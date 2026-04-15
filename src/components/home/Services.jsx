import {
  Stethoscope,
  ClipboardList,
  Plane,
  Languages,
  HeartHandshake,
  UserRoundCheck,
  Hospital,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: "Neuro Consultation",
    desc: "Expert neurological evaluation by senior DM Neurology specialists.",
  },
  {
    icon: <Hospital size={28} />,
    title: "EEG & Epilepsy Care",
    desc: "Advanced EEG monitoring and comprehensive epilepsy management programs.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "MRI & Neuro-Imaging",
    desc: "High-resolution brain & spine MRI with expert neuroradiology reporting.",
  },
  {
    icon: <Plane size={28} />,
    title: "Stroke Management",
    desc: "24/7 acute stroke unit with IV thrombolysis and mechanical thrombectomy.",
  },
  {
    icon: <Languages size={28} />,
    title: "Movement Disorders",
    desc: "Specialized care for Parkinson's disease, tremors, and dystonia.",
  },
  {
    icon: <UserRoundCheck size={28} />,
    title: "Memory & Dementia Clinic",
    desc: "Cognitive assessment and management for Alzheimer's and dementia patients.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Neuro-Rehabilitation",
    desc: "Structured recovery programs for stroke, spinal injury, and neuromuscular diseases.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-primary text-white overflow-hidden relative">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="lg:col-span-4 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Our Neurology Services
              </h2>
              <p className="text-white/60 font-medium leading-relaxed text-base">
                Comprehensive neurological care under one roof.<br/>
                From initial diagnosis to long-term management, our multidisciplinary team provides specialized treatment for the full spectrum of brain, spine, and nervous system conditions.<br />
                We use the latest evidence-based protocols to ensure accurate diagnosis, effective treatment, and optimal recovery for every patient we serve.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.1)}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="text-secondary mb-3 transform group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <motion.div className="p-5 border-2 border-dashed border-secondary text-primary flex flex-col justify-center items-center text-center rounded">
            <Heart size={24} className="text-secondary mb-2 animate-pulse" />
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">
              Complete Recovery
            </h3>
          </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
