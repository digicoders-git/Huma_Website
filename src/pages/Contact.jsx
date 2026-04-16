import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  Globe,
  User,
  Smartphone,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image: "/huma/h5.jpeg",
    title: "Contact Us",
    subtitle: "We Are Here to Guide You at Every Step of Your Medical Journey",
    buttonLabel: "Send Enquiry",
    buttonLink: "#enquiry-form",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* <PageHero slides={bannerSlides} /> */}

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-6">
                {/* Badge Removed */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-[1.1] uppercase tracking-tighter italic">
                  Connect with <br />
                  <span className="text-secondary">Huma Neurology</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                Our team is here to listen to you, understand your medical
                needs, and guide you honestly and professionally at every step
                of your journey to recovery.
              </p>
            </motion.div>

            {/* Right Column - Quick Contact Cards */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Phone size={24} />,
                  label: "Call Us",
                  value: "+91 7849893727",
                },
                {
                  icon: <Mail size={24} />,
                  label: "Email Us",
                  value: "hamdshakil13@gmail.com",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "Visit Us",
                  value: "KGMC Lucknow, India",
                },
                {
                  icon: <Clock size={24} />,
                  label: "Working Hours",
                  value: "Mon-Sat: 10AM-7PM",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-primary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Main Contact Form Area */}
      <section
        id="enquiry-form"
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Left Side: Contact Info */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-4 space-y-10"
            >
              <div className="space-y-8 md:space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tighter italic border-l-4 border-secondary pl-4">
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                    {[
                      {
                        icon: <MapPin size={20} />,
                        label: "Location",
                        val: "KGMC Lucknow, Uttar Pradesh, India",
                      },
                      {
                        icon: <Phone size={20} />,
                        label: "Phone",
                        val: "+91 7849893727",
                      },
                      {
                        icon: <Mail size={20} />,
                        label: "Email",
                        val: "hamdshakil13@gmail.com",
                      },
                      {
                        icon: <Clock size={20} />,
                        label: "Hours",
                        val: "Mon - Sat: 10AM - 7PM (IST)",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {item.label}
                          </p>
                          <p className="text-sm font-bold text-primary italic">
                            {item.val}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-slate-900 rounded text-white space-y-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full" />
                  {/* Badge Removed */}
                  <div className="space-y-4">
                    {[
                      "Response to every enquiry",
                      "Honest & ethical guidance",
                      "Complete confidentiality",
                    ].map((txt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                          {txt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="bg-white">
                <div className="space-y-10 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tighter italic">
                      Send Your Enquiry
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Fill in the medical details and our experts will get back
                      to you shortly.
                    </p>
                  </div>

                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    onSubmit={handleSubmit}
                  >
                    {submitted ? (
                      <div className="md:col-span-2 py-12 text-center space-y-4">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-xl font-black text-primary uppercase italic">Enquiry Submitted!</h3>
                        <p className="text-slate-500 font-medium text-sm">Our team will contact you within 2 hours.</p>
                        <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-secondary transition-all">
                          Send Another
                        </button>
                      </div>
                    ) : (<>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Country
                      </label>
                      <div className="relative">
                        <Globe
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="e.g. Oman, Kenya"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Smartphone
                          size={18}
                          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-secondary opacity-60"
                        />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 rounded bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm"
                          placeholder="WhatsApp Number"
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Select Treatment
                      </label>
                      <ModernSelect
                        options={treatmentOptions.map(t => ({ value: t, label: t }))}
                        value={treatment}
                        onChange={setTreatment}
                        placeholder="Select Speciality"
                        className="w-full"
                      />
                    </div> */}
                    {/* <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        Preferred City
                      </label>
                      <ModernSelect
                        options={citiesList.map(c => ({ value: c, label: c }))}
                        value={city}
                        onChange={setCity}
                        placeholder="Any City"
                        className="w-full"
                      />
                    </div> */}

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 ml-4">
                        How can we help you?
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-6 md:px-8 py-4 md:py-6 rounded bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary font-bold text-sm resize-none"
                        placeholder="Describe your medical condition..."
                        required
                      />
                    </div>

                    <div className="md:col-span-2 space-y-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 md:py-6 rounded transition-all duration-500 uppercase tracking-[0.4em] text-[10px] md:text-[11px] shadow-2xl flex items-center justify-center gap-4 md:gap-6 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Send Enquiry
                        <Send size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                    </>)}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Steps Area */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            {/* Badge Removed */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              "Expert Review of Medical Reports",
              "Case Evaluation by Specialists",
              "Selection of Best Hospital Options",
              "Receive Detailed Treatment Plan",
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative group text-center space-y-4 md:space-y-6"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded flex items-center justify-center text-secondary border border-slate-100 mx-auto group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                  <span className="text-3xl md:text-4xl font-extrabold italic opacity-30">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed px-4">
                  {step}
                </p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-slate-100 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto lg:mx-0" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-none">
              Find Us in <br className="hidden md:block" />{" "}
              <span className="text-secondary">Lucknow</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium italic leading-relaxed">
              Our office is located in Lucknow, a major medical hub of North
              India, with easy connectivity to leading hospitals across the
              country.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest italic">
                Official Huma Neurology HQ
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            className="h-[350px] md:h-[500px] w-full bg-slate-100 rounded overflow-hidden border-4 md:border-8 border-slate-50 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.6037221524!2d80.77769805023176!3d26.84859648069349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1768289417351!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <h2 className="text-2xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight">
            "Your journey to better health begins with a simple message."
          </h2>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
};

export default Contact;
