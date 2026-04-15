import {
  ArrowRight,
  Microscope,
  Brain,
  Bone,
  Activity,
  Droplets,
  Baby,
  Scissors,
  HeartPulse,
  Dna,
  Syringe,
  Activity as VascularIcon,
  Accessibility,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const specialities = [
  {
    name: "Oncology",
    subtitle: "Advanced Cancer Care",
    icon: <Microscope size={28} />,
  },
  {
    name: "Cardiology",
    subtitle: "Heart Surgery",
    icon: <HeartPulse size={28} />,
  },
  {
    name: "Neurosurgery",
    subtitle: "Brain & Spine",
    icon: <Brain size={28} />,
  },
  { name: "Orthopedics", subtitle: "Joint Care", icon: <Bone size={28} /> },
  {
    name: "Transplant",
    subtitle: "Liver & Kidney",
    icon: <Activity size={28} />,
  },
  { name: "IVF & Fertility", subtitle: "Parenthood", icon: <Baby size={28} /> },
  {
    name: "Gastro & Hepatology",
    subtitle: "Liver & Pancreas",
    icon: <Droplets size={28} />,
  },
  {
    name: "Plastic Surgery",
    subtitle: "Reconstructive",
    icon: <Scissors size={28} />,
  },
  {
    name: "Bone Marrow Transplant",
    subtitle: "Stem Cell (SCT)",
    icon: <Dna size={28} />,
  },
  {
    name: "Vascular surgery",
    subtitle: "Blood Vessel",
    icon: <VascularIcon size={28} />,
  },
  {
    name: "Sports injury",
    subtitle: "Trauma Care",
    icon: <Accessibility size={28} />,
  },
  { name: "Pediatrics", subtitle: "Child Health", icon: <Heart size={28} /> },
];

const Specialities = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto px-4 md:px-8"
      >
        <motion.div
          variants={fadeIn("up", 0.1)}
          className="text-center mb-10 space-y-2"
        >
          <h4 className="text-primary font-bold text-[12px] uppercase tracking-[0.25em]">
            Institutional Expertise
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
            Advance Treatments
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {specialities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", 0.1)}
              className="group bg-white p-6 border border-slate-100 hover:border-primary transition-all duration-300 rounded hover:shadow-lg relative overflow-hidden"
            >
              <div className="text-secondary bg-secondary/5 w-12 h-12 rounded flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div className="space-y-1 relative z-10">
                <h3 className="font-bold text-primary text-lg tracking-tight leading-none">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                  {item.subtitle}
                </p>
              </div>

              {/* Subtle Numbering */}
              <div className="absolute -bottom-2 end-[-0.5rem] text-5xl font-bold text-slate-50 group-hover:text-primary transition-colors duration-500 opacity-30 select-none">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Specialities;
