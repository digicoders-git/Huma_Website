import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";
import Neural_Network_Brain_Animation_Video from "../../assets/Neural_Network_Brain_Animation_Video.mp4";
import { fadeIn, staggerContainer } from "../../utils/framerVariants";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] md:min-h-[90vh] lg:h-[88vh] py-16 md:py-20 lg:py-0 flex items-center overflow-hidden bg-primary"
    >
      {/* Video Background with Masking */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={Neural_Network_Brain_Animation_Video} type="video/mp4" />
        </video>
        {/* Deep Gradient Masks */}
        <div className="absolute inset-0 bg-linear-to-r rtl:bg-linear-to-l from-primary via-primary/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>

      {/* Dynamic Lighting Hover Effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(29, 182, 76, 0.2) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 30%)`,
        }}
      />

      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20 w-full"
      >
        <div className="flex items-center justify-center lg:justify-start">
          <div className="max-w-3xl space-y-5 md:space-y-6 text-center lg:text-start">
            <motion.div
              variants={fadeIn(document.dir === "rtl" ? "left" : "right", 0.2)}
              className="space-y-3 md:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Huma Neurology Center:{" "}
                <span className="text-secondary">Advanced Care for Brain,</span>{" "}
                Spine & Nervous System.
              </h1>
            </motion.div>
            <motion.p
              variants={fadeIn(document.dir === "rtl" ? "left" : "right", 0.3)}
              className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-xl leading-relaxed mx-auto lg:ms-0"
            >
              Huma Neurology Center is Lucknow's trusted destination for expert neurological care — offering{" "}
              <span className="text-secondary font-bold">
                diagnosis, treatment & rehabilitation —
              </span>{" "}
              for stroke, epilepsy, Parkinson's, migraine, multiple sclerosis, and all complex neurological conditions with compassionate, evidence-based care.
            </motion.p>

            <motion.div
              variants={fadeIn(document.dir === "rtl" ? "left" : "right", 0.4)}
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck size={16} className="text-secondary" />
                </div>
                <span className="text-lg font-bold text-secondary uppercase tracking-widest">
                  Expert Neurologists
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Activity size={16} className="text-secondary" />
                </div>
                <span className="text-lg font-bold text-secondary uppercase tracking-widest">
                  Certified Neuro Center
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
