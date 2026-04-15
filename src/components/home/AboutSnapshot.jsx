import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const AboutSnapshot = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Visual Side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-xl border-4 border-slate-50">
              <img
                src="huma/h10.jpeg"
                alt="Doctor with patient"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            className="lg:w-1/2 space-y-6"
          >
            <div className="space-y-3">
              <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.25em] border-l-4 border-secondary pl-4">
                About Our Center
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight tracking-tight">
                Welcome to Huma Neurology Center
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base">
              <p>
                Huma Neurology Center is a premier neurological facility in Lucknow, dedicated to diagnosing and treating disorders of the brain, spinal cord, and nervous system with precision and compassion.
              </p>
              <p className="text-sm md:text-base">
                Our care is built on three core pillars: <strong>Advanced Neurodiagnostics</strong>, <strong>Evidence-Based Treatment</strong>, and <strong>Comprehensive Patient Rehabilitation</strong> — ensuring the best possible outcomes for every patient.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all uppercase tracking-widest text-[13px]"
              >
                Know Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSnapshot;
