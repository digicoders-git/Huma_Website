import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, User, Stethoscope, Phone, Printer, X, MapPin, Calendar, Clock } from 'lucide-react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

const AppointmentReceipt = ({ appointment, onClose }) => {
  const receiptRef = useRef();

  const handleDownload = async () => {
    const element = receiptRef.current;
    if (!element) return;

    try {
      // Improved options to bypass CORS/Security errors from external fonts/translate
      const dataUrl = await toPng(element, { 
        quality: 1,
        backgroundColor: '#ffffff',
        pixelRatio: 3,
        skipFonts: true, // Skip external fonts to avoid SecurityError
        filter: (node) => {
          // Filter out any scripts or frames that might cause issues
          if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') return false;
          return true;
        }
      });
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Receipt-${appointment.code || 'APT'}.pdf`);
    } catch (error) {
      console.error("PDF Generation Error:", error);
      alert("Error generating PDF. Please ensure you are using a modern browser.");
    }
  };

  if (!appointment) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-xl flex flex-col gap-4">
        
        {/* Simple Controls */}
        <div className="flex justify-between items-center bg-white p-3 rounded-2xl shadow-xl flex-shrink-0">
           <div className="flex items-center gap-2 ml-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Booking Success</span>
           </div>
           <div className="flex gap-2">
              <button 
                onClick={handleDownload}
                className="bg-primary text-white px-5 py-2 rounded-xl font-bold text-xs hover:bg-secondary transition-all shadow-md flex items-center gap-2"
              >
                <Download size={14} /> Download Receipt
              </button>
              <button 
                onClick={onClose}
                className="p-2 bg-slate-100 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all"
              >
                <X size={18} />
              </button>
           </div>
        </div>

        {/* The Receipt Structure (Simple & Clean) */}
        <div 
          className="bg-white rounded-3xl shadow-2xl overflow-hidden text-left" 
          ref={receiptRef}
          style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
          {/* Top Header */}
          <div className="border-b-4 border-primary p-8 bg-slate-50 flex justify-between items-center">
             <div className="flex items-center gap-4">
                <img src="/main_logo.png" alt="Center Logo" className="h-14 w-auto object-contain" />
                <div>
                   <h1 className="text-xl font-bold text-primary tracking-tight">Huma Neurology Center</h1>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Institutional Medical Care</p>
                </div>
             </div>
             <div className="text-right">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Receipt No.</h4>
                <p className="text-lg font-black text-slate-900">{appointment.code || '#APT-PENDING'}</p>
             </div>
          </div>

          {/* Patient Details Section */}
          <div className="p-8 space-y-8">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Patient Name</label>
                      <p className="text-sm font-bold text-slate-800">{appointment.name}</p>
                   </div>
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Contact Number</label>
                      <p className="text-sm font-bold text-slate-800">{appointment.phone}</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Scheduled Date</label>
                      <p className="text-sm font-bold text-slate-800">{appointment.date}</p>
                   </div>
                   <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Time Preference</label>
                      <p className="text-sm font-bold text-slate-800">{appointment.time || 'Pending'}</p>
                   </div>
                </div>
             </div>

             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-between">
                <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Department / Case</label>
                   <p className="text-sm font-bold text-primary flex items-center gap-2">
                      <Stethoscope size={14} /> {appointment.department || 'General Neurology'}
                   </p>
                </div>
                <div className="text-right">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Consultant</label>
                   <p className="text-sm font-bold text-slate-800">{appointment.doctor || 'Pending Assignment'}</p>
                </div>
             </div>

              {/* Consultation Fee Bar */}
              <div className="flex items-center justify-between py-3 border-y border-slate-50">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-secondary" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Consultation Service Fee</span>
                 </div>
                 <p className="text-lg font-black text-primary italic">₹{appointment.fees || '500'}</p>
              </div>

              {/* Verification Bar */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                 <CheckCircle2 size={14} className="text-green-500" />
                 <p className="text-[10px] font-bold text-slate-400 flex-1 uppercase tracking-wider">
                   Appointment confirmed by system. current status: <span className="text-primary">{appointment.status || 'Pending'}</span>
                 </p>
              </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="bg-slate-50 p-8 border-t border-slate-100">
             <div className="grid grid-cols-2 gap-6 items-end">
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                      <MapPin size={12} className="text-primary" /> KGMC ,Lucknow, UP
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                      <Phone size={12} className="text-primary" /> +91 7849893727
                   </div>
                </div>
                <div className="p-4 border-2 border-primary/10 rounded-xl text-center">
                   <Printer size={20} className="mx-auto text-primary/30 mb-1" />
                   <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                     Computer Generated<br/>Official Receipt
                   </p>
                </div>
             </div>
             <p className="text-center text-[8px] text-slate-300 font-bold uppercase tracking-[0.2em] mt-8">
                Thank you for choosing Huma Neurology Center • Excellence in Neuro Care
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentReceipt;
