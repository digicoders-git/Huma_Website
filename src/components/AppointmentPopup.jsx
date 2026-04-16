import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar, CheckCircle2, Stethoscope, User, Smartphone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const departments = [
  "General Neurology", "Stroke & Cerebrovascular Unit", "Epilepsy & EEG",
  "Movement Disorders", "Memory & Cognitive Neurology", "Neuro-Rehabilitation",
  "Headache & Pain Clinic", "Neuromuscular & EMG Lab",
];

const AppointmentPopup = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", department: "", date: "" });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-3 md:p-6"
          >
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-h-[92vh] overflow-hidden">

              {/* Left Panel — hidden on mobile */}
              <div className="relative hidden md:flex w-full md:w-2/5 bg-primary p-8 flex-col justify-between overflow-hidden shrink-0">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-secondary/10 rounded-full" />

                <div className="relative z-10 space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Book Appointment</span>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase italic">
                      Expert Neuro Care <span className="text-secondary">Awaits You</span>
                    </h2>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">
                      Schedule your consultation with Lucknow's top neurologists. Confirmed within 2 hours.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {["Senior DM/MD Neurologists", "Same-day appointments available", "24/7 Stroke Emergency Care", "Free cancellation anytime"].map((p, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-secondary shrink-0" />
                        <span className="text-xs text-white/70 font-medium">{p}</span>
                      </div>
                    ))}
                  </div>

                  <a href="tel:+917849893727"
                    className="flex items-center gap-3 bg-secondary hover:bg-white hover:text-primary text-white font-bold py-3 px-5 rounded-xl transition-all text-sm">
                    <Phone size={16} /> +91 7849893727
                  </a>
                </div>

                {/* Bottom image */}
                <div className="relative z-10 mt-6 hidden md:block">
                  <img src="/huma/h1.jpeg" alt="Neurology" className="w-full h-32 object-cover rounded-xl opacity-30" />
                </div>
              </div>

              {/* Right Panel — Form */}
              <div className="flex-1 p-5 md:p-8 relative overflow-y-auto">
                {/* Close */}
                <button onClick={() => setShow(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-all">
                  <X size={16} />
                </button>

                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-black text-primary uppercase italic">Appointment Requested!</h3>
                    <p className="text-slate-500 text-sm font-medium max-w-xs">Our team will confirm your slot within 2 hours via WhatsApp or call.</p>
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setShow(false)}
                        className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-secondary transition-all">
                        Close
                      </button>
                      <Link to="/appointment" onClick={() => setShow(false)}
                        className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-primary font-bold rounded-xl text-xs uppercase tracking-widest hover:border-primary transition-all">
                        Full Form
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-black text-primary uppercase italic">Quick Appointment</h3>
                      <p className="text-slate-400 text-xs font-medium mt-0.5">Fill in basic details — we'll handle the rest</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                          <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)}
                            placeholder="Your full name"
                            className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone / WhatsApp *</label>
                        <div className="relative">
                          <Smartphone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                          <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                        </div>
                      </div>

                      {/* Department */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Department *</label>
                        <div className="relative">
                          <Stethoscope size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                          <select required value={form.department} onChange={(e) => set("department", e.target.value)}
                            className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                            <option value="">Select Department</option>
                            {departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Date *</label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                          <input type="date" required value={form.date} onChange={(e) => set("date", e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                        </div>
                      </div>

                      <button type="submit"
                        className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg flex items-center justify-center gap-2">
                        <Send size={14} /> Book Appointment
                      </button>

                      <p className="text-center text-[10px] text-slate-400 font-medium">
                        Want more options?{" "}
                        <Link to="/appointment" onClick={() => setShow(false)} className="text-secondary font-bold hover:underline">
                          Full Booking Form →
                        </Link>
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentPopup;
