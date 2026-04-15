import React from "react";
import { motion } from "framer-motion";
import loaderImage from "../assets/logocopy.png";

const PremiumLoader = ({ imageSrc = loaderImage }) => {
  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        {/* Main Glowing Background */}
        <div className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />

        {/* Outer Orbital Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-56 h-56 rounded-full border border-dashed border-primary/20"
        />

        {/* Spinning Gradient Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 rounded-full border-4 border-transparent border-t-primary border-r-primary/30"
        />

        {/* Counter-Spinning Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border-2 border-transparent border-b-secondary/50 border-l-secondary/10"
        />

        {/* Center Image with Pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.05, 1], opacity: 1 }}
          transition={{
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.5 },
          }}
          className="relative w-28 h-28 rounded-full bg-white p-1.5 shadow-2xl flex items-center justify-center z-10"
        >
          <img
            src={imageSrc}
            alt="Loading..."
            className="w-full h-full object-contain rounded-full"
          />

          {/* Subtle Gloss Effect */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/30 to-transparent rounded-full pointer-events-none" />
        </motion.div>

        {/* Orbital Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              originX: "100px",
              left: "-10px",
            }}
          />
        ))}
      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          ))}
        </div>
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] ml-1">
          Huma Neurology Center
        </span>
      </motion.div>
    </div>
  );
};

export default PremiumLoader;
