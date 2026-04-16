import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import PageHero from "../components/PageHero";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Send, User, Smartphone, Calendar, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const bannerSlides = [
  {
    image: "/huma/h3.jpeg",
    title: "Book an Appointment",
    subtitle: "Schedule Your Consultation with Our Expert Neurologists — Fast, Easy & Confirmed",
    buttonLabel: "Book Now",
    buttonLink: "#appointment-form",
  },
];

const departments = [
  "General Neurology",
  "Stroke & Cerebrovascular Unit",
  "Epilepsy & EEG Department",
  "Movement Disorders Clinic",
  "Memory & Cognitive Neurology",
  "Neuro-Rehabilitation",
  "Headache & Pain Clinic",
  "Neuromuscular & EMG Lab",
];

const doctors = [
  "Dr. Mo. Shakil — Senior Neurologist",
  "Dr. Arjun Mehta — Neurosurgeon",
  "Dr. Priya Sharma — Consultant Neurologist",
  "Dr. Rakesh Verma — Neuro-Rehabilitation",
  "Dr. Sunita Agarwal — Cognitive Neurologist",
  "Dr. Imran Khan — Interventional Neurologist",
];

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
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* <PageHero slides={bannerSlides} /> */}

      {/* Steps */}
      {/* <section className="py-8 bg-primary">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", label: "Fill Details" },
              { step: "02", label: "Choose Doctor" },
              { step: "03", label: "Pick Date & Time" },
              { step: "04", label: "Confirmed!" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-black text-sm shrink-0">{s.step}</div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
          <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h4 className="text-secondary font-bold text-[11px] uppercase tracking-[0.3em]">Schedule a Visit</h4>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">Book Your Appointment</h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
            </div>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Fill in the form and our team will confirm your appointment within 2 hours. Walk-ins also welcome during OPD hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: <Phone size={16} />, label: "Call Us", val: "+91 7849893727", href: "tel:+917849893727" },
                { icon: <Mail size={16} />, label: "Email", val: "hamdshakil13@gmail.com", href: "mailto:hamdshakil13@gmail.com" },
                { icon: <MapPin size={16} />, label: "Location", val: "KGMC ,Lucknow, Uttar Pradesh — 226010", href: "#" },
                { icon: <Clock size={16} />, label: "OPD Hours", val: "Mon – Sat: 9:00 AM – 6:00 PM", href: "#" },
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

            {/* Promises */}
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
            {submitted ? (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-primary uppercase italic">Appointment Requested!</h3>
                <p className="text-slate-500 font-medium">Our team will confirm your appointment within 2 hours via phone or WhatsApp.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "", message: "" }); }}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-secondary transition-all">
                    Book Another
                  </button>
                  <Link to="/" className="px-6 py-3 bg-slate-50 border border-slate-200 text-primary font-bold rounded-xl text-xs uppercase tracking-widest hover:border-primary transition-all">
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 space-y-6">
                <h3 className="text-lg font-bold text-primary uppercase italic tracking-tight border-b border-slate-100 pb-4">Patient Information</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)}
                        placeholder="Your full name"
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone / WhatsApp *</label>
                    <div className="relative">
                      <Smartphone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <input type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                    </div>
                  </div>

                  {/* Department */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Department *</label>
                    <div className="relative">
                      <Stethoscope size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <select required value={form.department} onChange={(e) => set("department", e.target.value)}
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                        <option value="">Select Department</option>
                        {departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Doctor</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <select value={form.doctor} onChange={(e) => set("doctor", e.target.value)}
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all appearance-none">
                        <option value="">Any Available Doctor</option>
                        {doctors.map((d, i) => <option key={i} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Date *</label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                      <input type="date" required value={form.date} onChange={(e) => set("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all" />
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Time Slot *</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((t, i) => (
                      <button type="button" key={i} onClick={() => set("time", t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${form.time === t ? "bg-primary text-white border-primary" : "bg-slate-50 text-slate-600 border-slate-200 hover:border-secondary"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Symptoms / Message</label>
                  <textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)}
                    placeholder="Briefly describe your symptoms or reason for visit..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 focus:outline-none focus:border-secondary transition-all resize-none" />
                </div>

                <button type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-3">
                  <Send size={16} /> Confirm Appointment
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Appointment;
