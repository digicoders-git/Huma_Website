import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mainLogo from "../assets/main_logo.png";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent"></div>
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>

      {/* 1. News/Notice Banner (Unique Medical Feature) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.1)}
        className="max-w-7xl mx-auto mb-0"
      >
        {/* <div className="bg-gradient-to-r from-secondary/15 to-secondary/5 border border-secondary/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm shadow-2xl shadow-secondary/10 relative overflow-hidden hover:border-secondary/50 transition-all duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-5 z-10">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 p-4 rounded-2xl text-white shadow-xl hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-secondary mb-2">
                Latest Notice & News
              </h4>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Free Medical Consultation Camp in Lucknow - January 2026.
                Register Now!
              </p>
            </div>
          </div>
          <button className="bg-secondary hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded-xl text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-secondary/30 hover:shadow-white/20 hover:scale-105 z-10">
            View Offer Letter
          </button>
        </div> */}
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 relative z-10"
      >
        {/* Column 1: About */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          className="lg:col-span-1 space-y-7"
        >
          {/* Premium Animated Logo Section */}
          <div className="relative inline-flex items-center justify-center">
            {/* 1. Pulsating Glow Background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-40 h-40 bg-secondary/20 rounded-full blur-2xl"
            />

            {/* 2. Outer Rotating Ring (Slow) */}
            <div
              className="absolute w-[110px] h-[110px] rounded-full border border-white/10"
              style={{
                animation: "spinCircle 15s linear infinite",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            </div>

            {/* 3. Middle Dashed Ring (Fast) */}
            <div
              className="absolute w-[100px] h-[100px] rounded-full border-2 border-dashed border-secondary/40"
              style={{
                animation: "spinCircle 8s linear infinite reverse",
              }}
            />

            {/* 4. Scanner Line Effect */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[110px] h-[110px] rounded-full border-t-2 border-l-2 border-transparent border-t-secondary/60 border-l-secondary/30"
            />

            {/* 5. The Logo */}
            <div className="relative z-10">
              <img
                src={mainLogo}
                alt="Huma Neurology Center"
                className="h-28 w-28 object-contain "
              />
            </div>
          </div>
          <p className="text-white/70 text-base font-medium leading-relaxed">
            Lucknow's premier neurological care center — expert diagnosis &
            compassionate treatment for brain, spine & nervous system disorders.
          </p>
          <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-xl border border-secondary/20 hover:bg-secondary/15 hover:border-secondary/30 transition-all duration-300">
            <ShieldCheck size={18} className="text-secondary" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">
              NABH Partner Portal
            </span>
          </div>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={fadeIn("up", 0.2)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Quick Links
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-4 text-white/80 text-base font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Specialities", path: "/specialities" },
              { label: "Doctors", path: "/doctors" },
              { label: "Patient Journey", path: "/journey" },
              { label: "Our Services", path: "/services" },
              { label: "Medical Departments", path: "/departments" },
              { label: "Emergency", path: "/emergency" },
              { label: "Knowledge Blog", path: "/blogs" },
              { label: "Gallery", path: "/gallery" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 group"
                >
                  <ExternalLink
                    size={14}
                    className="text-secondary group-hover:rotate-45 transition-transform duration-300"
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Legal Links */}
        <motion.div variants={fadeIn("up", 0.3)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Legal Links
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-4 text-white/80 text-base font-medium">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cookie-policy"
                className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Column 4: Contact Info */}
        <motion.div variants={fadeIn("up", 0.4)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Contact Info
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <ul className="space-y-5">
            <li className="flex gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <MapPin
                size={18}
                className="text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="leading-relaxed">
               538/643 Baba Ka Purwa Bandha Road Roop Pur Khadra Lucknow
Landmark - Mansha Ram Mandir
              </span>
            </li>
            <li className="flex items-center gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <Phone
                size={18}
                className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300"
              />
              <a href="tel:+91 7849893727">+91 7849893727</a>
            </li>
            <li className="flex items-center gap-4 text-white/90 text-base group hover:text-secondary transition-colors duration-300">
              <Mail
                size={18}
                className="text-secondary shrink-0 group-hover:scale-110 transition-transform duration-300"
              />
              <a href="mailto:contactus@humaneurogy.com">
                hamdshakil13@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Column 5: Social Media */}
        <motion.div variants={fadeIn("up", 0.5)} className="space-y-7">
          <div className="relative pb-4">
            <h4 className="font-bold text-sm uppercase tracking-[0.25em] text-white">
              Social Connect
            </h4>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-1 bg-white/30 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              // { Icon: Facebook, href: "#" },
              // { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                target="_blank"
                href={social.href}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg group"
              >
                <social.Icon
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>
          {/* <div className="pt-6 p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] text-center backdrop-blur-sm hover:border-secondary/30 transition-all duration-300">
            Scan for Digital Brochure
          </div> */}
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", 0.6)}
        className="max-w-7xl mx-auto mt-10 pt-10 border-t border-white/10 flex items-center justify-center relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-secondary to-transparent"></div>
        <p className="text-white/80 text-sm font-medium tracking-[0.15em] text-center">
          © 2026 Huma Neurology Center. || Created with ❤️ by{" "}
          <a
            href="https://digicoders.in/"
            target="_blank"
            rel="noreferrer"
            className="underline text-white font-bold hover:text-secondary transition-colors"
          >
            Team Digicoders
          </a>
        </p>
      </motion.div>

      {/* Corporate Watermark */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[18rem] font-bold leading-none tracking-tighter">
          HUMA
        </h2>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes spinCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }}
      />
    </footer>
  );
};

export default Footer;
