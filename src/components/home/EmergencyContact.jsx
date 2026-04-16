import { Phone, MessageCircle, Clock, MapPin, Ambulance, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const EmergencyContact = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.1)} className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            24/7 Emergency Services
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
            Neurological Emergency? <span className="text-[#9d2626">We're Always Here.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            Stroke, seizure, or any neurological emergency — our team is available round the clock. Every second counts.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Emergency Call Card */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="lg:col-span-1 bg-primary rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full" />
            <div className="relative z-10 space-y-5">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Ambulance size={28} className="text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Emergency Helpline</p>
                <h3 className="text-2xl font-black text-white leading-tight">Stroke & Neuro Emergency</h3>
              </div>
              <a
                href="tel:+917849893727"
                className="flex items-center gap-3 bg-secondary hover:bg-white hover:text-primary text-white font-black text-xl py-4 px-6 rounded-xl transition-all duration-300 shadow-lg group/btn"
              >
                <Phone size={22} className="shrink-0" />
                +91 7849893727
              </a>
              <div className="flex items-center gap-2 text-white/50 text-xs font-medium">
                <Clock size={14} className="text-secondary" />
                Available 24 hours, 7 days a week
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div variants={fadeIn("up", 0.2)} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/917849893727"
              target="_blank"
              rel="noreferrer"
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <MessageCircle size={22} className="text-green-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Us</p>
                <h4 className="font-bold text-primary text-lg leading-tight">Chat on WhatsApp</h4>
                <p className="text-slate-500 text-sm mt-1">Send reports & get instant response from our team</p>
              </div>
              <span className="text-green-500 font-bold text-xs uppercase tracking-widest group-hover:gap-2 flex items-center gap-1 transition-all">
                Start Chat →
              </span>
            </a>

            {/* OPD Timing */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Clock size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">OPD Timings</p>
                <h4 className="font-bold text-primary text-lg leading-tight">Clinic Hours</h4>
                <div className="mt-2 space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Mon – Sat</span>
                    <span className="font-bold text-primary">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Sunday</span>
                    <span className="font-bold text-secondary">Emergency Only</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Emergency</span>
                    <span className="font-bold text-green-600">24 / 7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh+India"
              target="_blank"
              rel="noreferrer"
              className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-secondary/40 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                <MapPin size={22} className="text-secondary group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
                <h4 className="font-bold text-primary text-lg leading-tight">Find Us</h4>
                <p className="text-slate-500 text-sm mt-1">Lucknow, Uttar Pradesh, India — 226010</p>
              </div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                Get Directions →
              </span>
            </a>

            {/* Warning Signs */}
            <div className="group bg-red-50 border border-red-100 rounded-2xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Call Immediately If</p>
                <h4 className="font-bold text-red-700 text-lg leading-tight">Warning Signs</h4>
                <ul className="mt-2 space-y-1">
                  {["Sudden face drooping", "Arm or leg weakness", "Slurred speech", "Severe sudden headache", "Loss of consciousness"].map((sign, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-red-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmergencyContact;
