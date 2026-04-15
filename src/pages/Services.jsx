import {
  Stethoscope,
  Plane,
  Languages,
  Handshake,
  RefreshCw,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const bannerSlides = [
  {
    image: "/huma/h3.jpeg",
    title: "Our Neurological Services",
    subtitle: "Comprehensive Brain, Spine & Nervous System Care at Huma Neurology Center",
    buttonLabel: "Explore Services",
    buttonLink: "#core-services",
  },
];

const Services = () => {
  const coreServices = [
    {
      icon: <Stethoscope size={32} />,
      title: "1. Expert Neuro Consultation",
      whatWeDo: [
        "Comprehensive neurological assessment by DM/MD specialists",
        "Review of existing MRI, EEG, and medical reports",
        "Accurate differential diagnosis and clinical opinion",
        "Personalised treatment planning and prognosis discussion",
        "Online / telemedicine consultation available",
      ],
      whyImportant: [
        "Early and accurate diagnosis prevents disease progression",
        "Expert opinion ensures the right treatment, not guesswork",
        "Helps patients understand their condition clearly",
        "Avoids unnecessary tests and procedures",
        "Sets the foundation for effective long-term care",
      ],
    },
    {
      icon: <Activity size={32} />,
      title: "2. Advanced Neuro-Diagnostics",
      whatWeDo: [
        "High-resolution MRI Brain & Spine imaging",
        "EEG for epilepsy, sleep disorders & brain activity",
        "EMG / NCV for nerve and muscle disease assessment",
        "CSF analysis (Lumbar Puncture) for infections & MS",
        "Neuropsychological testing for cognitive disorders",
      ],
      whyImportant: [
        "Precise diagnostics are the cornerstone of neurology",
        "Identifies exact cause enabling targeted treatment",
        "All tests performed in-house for faster results",
        "Reduces need for referrals and repeated testing",
      ],
    },
    {
      icon: <Handshake size={32} />,
      title: "3. Stroke & Emergency Neurology",
      whatWeDo: [
        "24/7 acute stroke recognition and emergency response",
        "IV thrombolysis (clot-busting treatment) within golden hour",
        "Mechanical thrombectomy coordination with neuroradiology",
        "Dedicated Neuro-ICU monitoring and management",
        "Post-stroke neurological rehabilitation",
      ],
      whyImportant: [
        "Every minute counts in stroke — fast care saves brain cells",
        "Timely thrombolysis dramatically improves outcomes",
        "Reduces long-term disability and mortality risk",
        "Dedicated neuro team ensures expert-level emergency care",
      ],
    },
    {
      icon: <RefreshCw size={32} />,
      title: "4. Neuro-Rehabilitation",
      whatWeDo: [
        "Structured physiotherapy for stroke and spinal injury patients",
        "Speech therapy for aphasia and swallowing disorders",
        "Cognitive rehabilitation for memory and attention deficits",
        "Occupational therapy for daily living independence",
        "Ongoing monitoring of rehabilitation progress",
      ],
      whyImportant: [
        "Rehabilitation is as critical as the initial treatment",
        "Maximises functional recovery — walking, talking, independence",
        "Reduces the burden of long-term disability",
        "Improves quality of life for patients and families",
      ],
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "5. Long-Term Neuro Care & Follow-Up",
      whatWeDo: [
        "Regular OPD follow-up consultations with your neurologist",
        "Medication review, adjustments, and monitoring",
        "Ongoing EEG and MRI reviews for epilepsy and MS patients",
        "Remote and telemedicine consultation for distant patients",
        "Coordination with multi-disciplinary specialists",
      ],
      whyImportant: [
        "Neurological conditions require consistent long-term management",
        "Regular monitoring prevents relapse and complications",
        "Keeps patients connected to their treating neurologist",
        "Ensures medicine is always optimised for best outcomes",
      ],
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <PageHero slides={bannerSlides} />

      {/* 1. Intro Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white"
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
                  Your Neurological <br />
                  <span className="text-secondary">Care Partner</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  At Huma Neurology Center, we offer much more than just a consultation. We provide comprehensive, step-by-step neurological care ensuring accurate diagnosis, effective treatment, and full recovery support — all under one roof.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  From your very first appointment to long-term follow-up, our dedicated team of neurologists stays with you at every stage of your neurological health journey.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Service Highlights */}
            <motion.div variants={fadeIn("left", 0.2)} className="space-y-4">
              {[
                {
                  icon: "🧠",
                  title: "Neuro Consultation",
                  desc: "Expert DM/MD Neurologist assessment",
                },
                {
                  icon: "🔬",
                  title: "Advanced Diagnostics",
                  desc: "MRI, EEG, EMG/NCV in-house",
                },
                {
                  icon: "🏥",
                  title: "Stroke Emergency Care",
                  desc: "24/7 acute stroke unit",
                },
                {
                  icon: "💊",
                  title: "Long-Term Follow-Up",
                  desc: "Ongoing neuro care & monitoring",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center border border-secondary/20 text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl border border-secondary/20 text-center">
                <p className="text-xs font-bold text-primary italic">
                  "Trusted by thousands of patients across Lucknow & North India for expert neurological care."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Core Services Grid */}
      <motion.section
        id="core-services"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-10 md:py-10 px-4 md:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Our Core Services
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 font-medium">
              Each service below is an essential part of making your treatment
              experience successful, comfortable, and worry-free.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-32">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 md:gap-20 items-start`}
              >
                {/* Icon & Title Side */}
                <motion.div
                  variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.2)}
                  className="lg:w-1/2 space-y-8"
                >
                  <div className="inline-flex items-center gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-secondary border border-slate-100 shadow-xl group hover:bg-secondary hover:text-white transition-all duration-500 shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-primary italic uppercase tracking-tighter leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-secondary uppercase tracking-[0.3em]">
                        What We Do
                      </p>
                      <ul className="space-y-3">
                        {service.whatWeDo.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              className="text-secondary mt-1 shrink-0"
                            />
                            <span className="text-slate-600 font-medium leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Importance Side */}
                <motion.div
                  variants={fadeIn(idx % 2 === 0 ? "left" : "right", 0.2)}
                  className="lg:w-1/2 p-8 md:p-12 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-inner relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[40px] rounded-full" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <Activity size={20} className="text-secondary" />
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
                        Why This Is Important
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {service.whyImportant.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span className="text-xs md:text-sm font-bold text-primary italic leading-none">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Service Promise Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-10 md:space-y-12"
            >
              <div className="space-y-4">
                {/* Badge Removed */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.1] italic">
                  Huma Neurology Center <br />
                  <span className="text-secondary">Service Promise</span>
                </h2>
              </div>
              <p className="text-white/60 text-lg md:text-xl font-light italic leading-relaxed">
                At Huma Neurology Center, our services are not just about appointments
                — they are about taking complete responsibility for your neurological health and recovery.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "We provide accurate, evidence-based neurological diagnosis",
                "We recommend treatments based on clinical need, not profit",
                "We ensure complete transparency in treatment planning",
                "We offer end-to-end care from diagnosis to rehabilitation",
                "We treat every patient with compassion, dignity & respect",
              ].map((promise, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("up", 0.1 * (i + 1))}
                  className="flex items-center gap-6 p-5 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center text-white shrink-0 shadow-lg">
                    <ShieldCheck size={20} md:size={24} />
                  </div>
                  <span className="text-sm md:text-lg font-bold text-white uppercase tracking-tight leading-none italic">
                    {promise}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Closing CTA Section */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 px-4 md:px-8 bg-white text-center"
      >
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="w-20 h-1 bg-secondary mx-auto rounded-full"
          />
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="text-2xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic leading-tight"
          >
            "Our services are designed so you can focus only on your neurological
            recovery, while our expert team handles everything else."
          </motion.h2>
          <motion.div variants={fadeIn("up", 0.3)} className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] shadow-2xl hover:bg-secondary transition-all group"
            >
              Book a Consultation{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </motion.section>

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

export default Services;
