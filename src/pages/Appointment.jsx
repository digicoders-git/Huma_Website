import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send, User, Smartphone, Calendar, Stethoscope, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentReceipt from "../components/AppointmentReceipt";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM",
  "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
  "4:30 PM", "5:00 PM",
];

const Appointment = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");
  const [currentFee, setCurrentFee] = useState(500);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [deptRes, docRes] = await Promise.all([
        fetch(`${API_URL}/department`),
        fetch(`${API_URL}/doctor`)
      ]);
      const deptData = await deptRes.json();
      const docData = await docRes.json();

      if (deptData.success) {
        setDepartments(deptData.data.filter(d => d.isActive));
      }
      
      if (docData.success) {
        // Backend might return array directly in data or inside a wrapper
        const docs = Array.isArray(docData.data) ? docData.data : (docData.data?.doctors || []);
        setDoctors(docs.filter(d => d.isActive));
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    
    // Update fee if doctor changes
    if (key === 'doctor') {
      const selectedDoc = doctors.find(d => d.fullName === val);
      if (selectedDoc && selectedDoc.consultationFee) {
        setCurrentFee(selectedDoc.consultationFee);
      } else {
        setCurrentFee(500); // Default fee
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          notes: form.message,
          fees: currentFee,
          status: "Pending"
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedData(data.data);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Receipt Modal */}
      {submittedData && (
        <AppointmentReceipt 
          appointment={submittedData} 
          onClose={() => setSubmittedData(null)} 
        />
      )}

      {/* Main Form */}
      <section id="appointment-form" className="py-12 md:py-16 px-4 md:px-8 bg-slate-50">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Left Info */}
          <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-2">
              <h4 className="text-secondary font-bold text-[11px] uppercase tracking-[0.3em]">Schedule a Visit</h4>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">Book Your Appointment</h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
            </div>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Fill in the form and our team will confirm your appointment within 2 hours. Walk-ins also welcome during OPD hours.
            </p>

            <div className="space-y-3">
              {[
                { icon: <Phone size={16} />, label: "Call Us", val: "+91 7849893727", href: "tel:+917849893727" },
                { icon: <Mail size={16} />, label: "Email", val: "hamdshakil13@gmail.com", href: "mailto:hamdshakil13@gmail.com" },
                { icon: <MapPin size={16} />, label: "Location", val: "538/643 Baba Ka Purwa Bandha Road Roop Pur Khadra Lucknow Landmark - Mansha Ram Mandir", href: "#" },
                { icon: <Clock size={16} />, label: "OPD Hours", val: "OPD Timing 12.00 to 5.00 Morning, 8.30 to 10.00 Evening", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl hover:border-secondary/40 transition-all group">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs font-bold text-primary">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 bg-primary rounded-2xl text-white space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">Our Promise</p>
              {["Confirmation within 2 hours", "No hidden charges", "Expert neurologist assigned", "Free cancellation / rescheduling"].map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-secondary shrink-0" />
                  <span className="text-xs font-medium text-white/80">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeIn("left", 0.2)} className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 space-y-6 text-left">
              <h3 className="text-lg font-bold text-primary uppercase italic tracking-tight border-b border-slate-100 pb-4 text-left">Patient Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)}
                      placeholder="Your full name"
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Smartphone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Department *</label>
                  <div className="relative">
                    <Stethoscope size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <select required value={form.department} 
                      onChange={(e) => {
                        set("department", e.target.value);
                        set("doctor", ""); // Clear doctor when department changes
                      }}
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                      <option value="">Select Department</option>
                      {departments.map((d) => <option key={d._id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Doctor</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <select value={form.doctor} onChange={(e) => set("doctor", e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                      <option value="">Any Available Doctor</option>
                      {doctors
                        .filter(d => !form.department || d.department === form.department)
                        .map((d) => <option key={d._id} value={d.fullName}>{d.fullName}</option>)
                      }
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Date *</label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <input type="date" required value={form.date} onChange={(e) => set("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Time Slot *</label>
                <div className="flex flex-wrap gap-2 text-left">
                  {timeSlots.map((t, i) => (
                    <button type="button" key={i} onClick={() => set("time", t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${form.time === t ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200 hover:border-secondary"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Symptoms / Message</label>
                <textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)}
                  placeholder="Briefly describe your symptoms..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all resize-none" />
              </div>

              {/* Consultation Fee Notice */}
              <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-secondary shadow-sm">
                     <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Total Payable</p>
                    <p className="text-sm font-bold text-primary">Consultation Fee</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-secondary tracking-tighter italic">₹{currentFee}</p>
                </div>
              </div>

              {error && <p className="text-red-500 font-bold text-xs uppercase tracking-widest text-left">{error}</p>}

              <button type="submit" disabled={loading}
                className="w-full bg-primary hover:bg-secondary disabled:opacity-70 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-3">
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
                {loading ? "PROCESSING..." : "Confirm Appointment"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Appointment;
