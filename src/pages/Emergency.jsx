import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import PageHero from "../components/PageHero";
import { Phone, Ambulance, Clock, MapPin, AlertCircle, CheckCircle2, Zap, HeartPulse, Brain, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const bannerSlides = [
  {
    image: "/huma/h6.jpeg",
    title: "Emergency & Ambulance Services",
    subtitle: "24/7 Neurological Emergency Response — Every Second Counts in Stroke & Seizure Care",
    buttonLabel: "Call Emergency Now",
    buttonLink: "tel:+917849893727",
  },
];

const emergencyNumbers = [
  { label: "Neuro Emergency Helpline", number: "+91 7849893727", desc: "24/7 stroke & seizure emergency", color: "bg-red-600", icon: <Phone size={22} /> },
  { label: "Ambulance Service", number: "+91 7849893727", desc: "Equipped neuro ambulance dispatch", color: "bg-orange-600", icon: <Ambulance size={22} /> },
  { label: "WhatsApp Emergency", number: "+91 7849893727", desc: "Send reports & get instant guidance", color: "bg-green-600", icon: <Phone size={22} /> },
  { label: "OPD Appointment", number: "+91 7849893727", desc: "Mon – Sat: 9:00 AM – 6:00 PM", color: "bg-primary", icon: <Clock size={22} /> },
];

const warningSignsStroke = [
  "Sudden face drooping on one side",
  "Arm or leg weakness / numbness",
  "Slurred or confused speech",
  "Sudden severe headache",
  "Vision loss in one or both eyes",
  "Loss of balance or coordination",
];

const warningSignsSeizure = [
  "Uncontrolled shaking / convulsions",
  "Sudden loss of consciousness",
  "Blank staring spell",
  "Confusion after an episode",
  "Repetitive jerking movements",
  "Tongue biting or incontinence",
];

const dosDonts = [
  { type: "do", text: "Call emergency immediately — +91 7849893727" },
  { type: "do", text: "Note the exact time symptoms started" },
  { type: "do", text: "Keep the patient calm and lying down" },
  { type: "do", text: "Loosen tight clothing around neck" },
  { type: "do", text: "Turn patient on side if vomiting" },
  { type: "dont", text: "Do NOT give food or water" },
  { type: "dont", text: "Do NOT put anything in mouth during seizure" },
  { type: "dont", text: "Do NOT leave the patient alone" },
  { type: "dont", text: "Do NOT delay — every minute counts in stroke" },
  { type: "dont", text: "Do NOT drive yourself to hospital in stroke" },
];

const ambulanceFeatures = [
  { icon: <Brain size={20} />, title: "Neuro-Equipped Ambulance", desc: "Oxygen, suction, cardiac monitor, IV access — ready for neurological emergencies." },
  { icon: <HeartPulse size={20} />, title: "Trained Paramedics", desc: "Staff trained in stroke recognition, seizure management, and neuro first aid." },
  { icon: <Zap size={20} />, title: "Rapid Response", desc: "Target response time under 15 minutes within Lucknow city limits." },
  { icon: <ShieldCheck size={20} />, title: "Direct Hospital Link", desc: "Direct communication with our stroke unit for pre-arrival preparation." },
];

const Emergency = () => {
  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Emergency Numbers — Top Strip */}
      <section className="bg-red-600 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {emergencyNumbers.map((item, i) => (
              <a key={i} href={`tel:${item.number.replace(/\s/g, "")}`}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 transition-all group">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-red-600 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-black text-white">{item.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div variants={fadeIn("up", 0.1)} className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Call Emergency Immediately If You See These Signs
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tight">Recognize a Neurological Emergency</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stroke */}
            <motion.div variants={fadeIn("right", 0.2)} className="bg-white border-2 border-red-100 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertCircle size={20} className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-black text-primary uppercase italic text-lg">Stroke Warning Signs</h3>
                  <p className="text-xs text-slate-400 font-medium">Use the FAST method — act within minutes</p>
                </div>
              </div>
              <div className="space-y-2">
                {warningSignsStroke.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 bg-red-50 rounded-lg border border-red-100">
                    <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+917849893727" className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-widest transition-all">
                <Phone size={16} /> Call Stroke Emergency
              </a>
            </motion.div>

            {/* Seizure */}
            <motion.div variants={fadeIn("left", 0.2)} className="bg-white border-2 border-orange-100 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-black text-primary uppercase italic text-lg">Seizure Warning Signs</h3>
                  <p className="text-xs text-slate-400 font-medium">Seizure lasting 5+ min is an emergency</p>
                </div>
              </div>
              <div className="space-y-2">
                {warningSignsSeizure.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 bg-orange-50 rounded-lg border border-orange-100">
                    <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+917849893727" className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-widest transition-all">
                <Phone size={16} /> Call Seizure Emergency
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ambulance Features */}
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 px-4 md:px-8 bg-primary"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div variants={fadeIn("up", 0.1)} className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase italic tracking-tight">Our Ambulance Service</h2>
            <p className="text-white/60 font-medium max-w-xl mx-auto text-sm">Fully equipped neurological ambulance — dispatched within minutes of your call.</p>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ambulanceFeatures.map((f, i) => (
              <motion.div key={i} variants={fadeIn("up", 0.1 * i)}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">{f.icon}</div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wide">{f.title}</h4>
                <p className="text-white/50 text-xs font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center pt-4">
            <a href="tel:+917849893727"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-white hover:text-primary text-white font-black py-4 px-10 rounded-2xl text-sm uppercase tracking-widest transition-all shadow-2xl">
              <Ambulance size={20} /> Dispatch Ambulance Now — +91 7849893727
            </a>
          </div>
        </div>
      </motion.section>

      {/* Do's & Don'ts */}
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-12 px-4 md:px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div variants={fadeIn("up", 0.1)} className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tight">Emergency First Aid — Do's & Don'ts</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dosDonts.map((item, i) => (
              <motion.div key={i} variants={fadeIn("up", 0.05 * i)}
                className={`flex items-start gap-3 p-4 rounded-xl border ${item.type === "do" ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.type === "do" ? "bg-green-500" : "bg-red-500"}`}>
                  {item.type === "do"
                    ? <CheckCircle2 size={14} className="text-white" />
                    : <span className="text-white font-black text-xs">✕</span>}
                </div>
                <span className={`text-sm font-semibold ${item.type === "do" ? "text-green-800" : "text-red-800"}`}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location + CTA */}
      <section className="py-12 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic">Find Us — Huma Neurology Center</h2>
            <div className="space-y-3">
              {[
                { icon: <MapPin size={16} />, text: "Lucknow, Uttar Pradesh, India — " },
                { icon: <Clock size={16} />, text: "OPD: Mon – Sat, 9:00 AM – 6:00 PM" },
                { icon: <Phone size={16} />, text: "Emergency: 24/7 — +91 7849893727" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">{item.icon}</div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="tel:+917849893727" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-widest transition-all">
                <Phone size={14} /> Call Emergency
              </a>
              <Link to="/appointment" className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-widest transition-all">
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="h-[300px] rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.6037221524!2d80.77769805023176!3d26.84859648069349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1768289417351!5m2!1sen!2sin"
              className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
