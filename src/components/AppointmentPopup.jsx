import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar, CheckCircle2, Stethoscope, User, Smartphone, Send, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentReceipt from "./AppointmentReceipt";

const AppointmentPopup = () => {
  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", department: "", date: "" });
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    fetchDepartments();
    return () => clearTimeout(timer);
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await fetch(`${API_URL}/department`);
      const data = await res.json();
      if (data.success) {
        setDepartments(data.data.filter(d => d.isActive));
      }
    } catch (err) {
      console.error("Error fetching departments:", err);
    }
  };

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

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
          type: "Quick Appointment",
          status: "Pending"
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedData(data.data);
      } else {
        setError(data.message || "Failed to book appointment.");
      }
    } catch (err) {
      setError("Server connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {submittedData && (
        <AppointmentReceipt 
          appointment={submittedData} 
          onClose={() => { setSubmittedData(null); setShow(false); }} 
        />
      )}

      {show && !submittedData && (
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
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-h-[92vh] overflow-hidden text-left">
              {/* Left Panel */}
              <div className="relative hidden md:flex w-full md:w-2/5 bg-primary p-8 flex-col justify-between overflow-hidden shrink-0">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-secondary/10 rounded-full" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Book Appointment</span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase italic text-left">
                      Expert Neuro Care <span className="text-secondary">Awaits You</span>
                    </h2>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">
                      Schedule your consultation with Lucknow's top neurologists.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {["Senior DM/MD Neurologists", "24/7 Stroke Emergency Care"].map((p, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-secondary shrink-0" />
                        <span className="text-xs text-white/70 font-medium uppercase tracking-tight">{p}</span>
                      </div>
                    ))}
                  </div>
                  <a href="tel:+917849893727" className="flex items-center gap-3 bg-secondary text-white font-bold py-4 px-6 rounded-xl transition-all text-sm shadow-xl shadow-black/10">
                    <Phone size={16} /> +91 7849893727
                  </a>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 p-5 md:p-8 relative overflow-y-auto">
                <button onClick={() => setShow(false)} className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-all">
                  <X size={16} />
                </button>
                <div className="space-y-5">
                  <div className="text-left">
                    <h3 className="text-lg font-black text-primary uppercase italic">Quick Appointment</h3>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">Instant booking confirmation digital receipt</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                        <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name" className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone / WhatsApp *</label>
                      <div className="relative">
                        <Smartphone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                        <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Department *</label>
                      <div className="relative">
                        <Stethoscope size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                        <select required value={form.department} onChange={(e) => set("department", e.target.value)} className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                          <option value="">Select Department</option>
                          {departments.map((d) => <option key={d._id} value={d.name}>{d.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Date *</label>
                      <div className="relative">
                        <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                        <input type="date" required value={form.date} onChange={(e) => set("date", e.target.value)} min={new Date().toISOString().split("T")[0]} className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                      </div>
                    </div>
                    {error && <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-left">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-secondary disabled:opacity-70 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg flex items-center justify-center gap-2">
                      {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} />} 
                      {loading ? "PROCESSING..." : "Book & Get Receipt"}
                    </button>
                    <p className="text-center text-[10px] text-slate-400 font-medium">
                      Want more options? <Link to="/appointment" onClick={() => setShow(false)} className="text-secondary font-bold hover:underline">Full Form →</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentPopup;
