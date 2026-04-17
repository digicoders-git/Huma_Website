import {
  ChevronDown,
  Menu,
  X,
  Globe,
  Calendar,
  BookOpen,
  PlayCircle,
  Image as ImageIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import mainLogo from "../assets/main_logo.png";
// import { fadeIn } from "../utils/framerVariants";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "ar", label: "AR", name: "Arabic" },
    { code: "fr", label: "FR", name: "French" },
    { code: "ru", label: "RU", name: "Russian" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);

    // Google Translate integration
    const triggerTranslate = () => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang.code;
        select.dispatchEvent(new Event("change"));
      } else {
        // Retry if Google Translate isn't loaded yet
        setTimeout(triggerTranslate, 500);
      }
    };
    triggerTranslate();
  };

  useEffect(() => {
    // Initial sync with Google Translate
    if (i18n.language !== "en") {
      const timer = setTimeout(() => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
          select.value = i18n.language;
          select.dispatchEvent(new Event("change"));
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Specialities", path: "/specialities" },
    { label: "Doctors", path: "/doctors" },
    { label: "Patient Journey", path: "/journey" },
    {
      label: "Services",
      path: "#",
      dropdownItems: [
        { label: "Our Services", path: "/services" },
        { label: "Medical Departments", path: "/departments" },
        { label: "Emergency & Ambulance", path: "/emergency" },
      ],
    },
    {
      label: "Knowledge",
      path: "#",
      dropdownItems: [
        { label: "Blog", path: "/blogs" },
        { label: "Gallery", path: "/gallery" },
      ],
    },
  ];

  return (
    <>
      {/* 1. Announcement Ticker Bar */}
      <div className="bg-primary text-white overflow-hidden relative z-110 font-['Poppins'] border-b border-white/20 h-9 sm:h-10 flex items-center">
        <div className="flex items-stretch h-full w-full">
          {/* Static Label */}
          <div className="shrink-0 bg-secondary px-6 text-primary text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-2.5 z-20 relative shadow-[10px_0_20px_rgba(0,0,0,0.15)]">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm" />
            <span className="relative pt-[0.5px]">News</span>
          </div>
          {/* Scrolling Text container */}
          <div className="overflow-hidden flex-1 relative flex items-center">
            {/* Subtle gradient overlay for better transition */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary to-transparent z-10" />
            
            <div className="flex whitespace-nowrap items-center h-full" style={{ animation: "tickerScroll 35s linear infinite" }}>
              {[...Array(2)].map((_, i) => (
                <span key={i} className="inline-flex items-center gap-12 px-8 text-[11px] sm:text-[12px] font-medium tracking-wide text-white/95">
                  <span className="flex items-center gap-2">🏥 <strong className="text-secondary font-bold">New OPD Block Inaugurated</strong> — Huma Neurology Center expands with a dedicated Neuro-Rehabilitation wing.</span>
                  <span className="text-secondary opacity-50">✦</span>
                  <span className="flex items-center gap-2">📢 <strong className="text-secondary font-bold">News:</strong> Free Epilepsy Awareness Camp — Every 2nd Saturday of the month.</span>
                  <span className="text-secondary opacity-50">✦</span>
                  <span className="flex items-center gap-2">💡 <strong className="text-secondary font-bold">Health Tip:</strong> High blood pressure is the #1 cause of stroke. Check your BP regularly.</span>
                  <span className="text-secondary opacity-50">✦</span>
                  <span className="flex items-center gap-2">🏥 <strong className="text-secondary font-bold">Hospital Update:</strong> Advanced Video-EEG Monitoring Lab now operational.</span>
                  <span className="text-secondary opacity-50">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation - Sticky (Will stay at top) */}
      <nav
        className={`w-full sticky top-0 z-100 transition-all duration-500 font-['Poppins'] ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg py-2 border-b border-slate-100"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={mainLogo}
              alt="Huma Neurology Center"
              className={`transition-all duration-500 w-auto object-contain ${
                isScrolled ? "h-14 lg:h-16" : "h-18 lg:h-25"
              }`}
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((item, index) =>
              item.dropdownItems ? (
                <NavDropdown
                  key={index}
                  label={item.label}
                  items={item.dropdownItems}
                  active={location.pathname.startsWith(item.path)}
                />
              ) : (
                <NavMenuLink
                  key={index}
                  to={item.path}
                  label={item.label}
                  active={location.pathname === item.path}
                />
              ),
            )}
          </div>

          {/* Right Actions Group */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="hidden lg:flex bg-[#9d2626] hover:bg-primary text-white font-bold py-2.5 px-4 xl:px-6 rounded-xl shadow-xl transition-all duration-500 text-[10px] xl:text-xs uppercase tracking-widest whitespace-nowrap"
            >
              Enquiry
            </Link>
            <Link
              to="/appointment"
              className="hidden lg:flex bg-[#9d2626] hover:bg-[#9d2626] text-white font-bold py-2.5 px-4 xl:px-6 rounded-xl shadow-xl transition-all duration-500 text-[10px] xl:text-xs uppercase tracking-widest whitespace-nowrap items-center gap-1.5"
            >
              <Calendar size={13} /> Book Appointment
            </Link>

            {/* Language Selector for Mobile/Tablet - Visible only below 1024px */}
            <div className="lg:hidden relative notranslate">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 p-2.5 bg-slate-50 rounded text-primary font-bold text-[11px] uppercase transition-all border border-slate-100"
              >
                <Globe size={18} className="text-secondary" />
                <span>{currentLang.label}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform text-slate-400 ${isLangOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown for Mobile Language */}
              <div className={`absolute top-full end-0 mt-2 w-32 bg-white shadow-2xl rounded border border-slate-100 p-1.5 transition-all duration-300 z-111 ${
                isLangOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-[10px] font-bold rounded transition-all uppercase tracking-wider ${
                      i18n.language === lang.code
                        ? "bg-primary text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - Hidden from 1024px up */}
            <button
              className="lg:hidden p-1 text-primary focus:outline-none bg-slate-50 rounded border border-slate-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <Menu size={28} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-150 lg:hidden font-['Poppins']"
          >
            <div className="p-8 pt-12 h-full flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={mainLogo} alt="Logo" className="w-[150px]" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-slate-100 rounded-full text-primary"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-1 overflow-y-auto pr-2 flex-1 scrollbar-thin">
                {navLinks.map((item, index) =>
                  item.dropdownItems ? (
                    <MobileNavDropdown
                      key={index}
                      label={item.label}
                      items={item.dropdownItems}
                      onClick={() => setIsOpen(false)}
                    />
                  ) : (
                    <MobileNavLink
                      key={index}
                      to={item.path}
                      label={item.label}
                      active={location.pathname === item.path}
                      onClick={() => setIsOpen(false)}
                    />
                  ),
                )}

                <div className="h-px bg-slate-100 my-8" />

                <div className="grid grid-cols-2 gap-3 pb-6">
                  <UtilityItem
                    icon={<BookOpen size={16} />}
                    label="Blogs"
                    to="/blogs"
                    onClick={() => setIsOpen(false)}
                  />
                  <UtilityItem
                    icon={<PlayCircle size={16} />}
                    label="Videos"
                    to="/videos"
                    onClick={() => setIsOpen(false)}
                  />
                  <UtilityItem
                    icon={<ImageIcon size={16} />}
                    label="Gallery"
                    to="/gallery"
                    onClick={() => setIsOpen(false)}
                  />
                  <div className="relative group/lang-mobile w-full notranslate">
                    <button className="flex items-center justify-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest bg-slate-50 p-4 rounded-xl border border-slate-100 active:bg-primary active:text-white transition-all w-full">
                      <Globe size={16} /> {currentLang.name}{" "}
                      <ChevronDown
                        size={14}
                        className="group-hover/lang-mobile:rotate-180 transition-transform"
                      />
                    </button>
                    <div className="absolute bottom-full start-0 w-full mb-2 bg-white shadow-2xl rounded-xl border border-slate-100 p-2 opacity-0 invisible group-hover/lang-mobile:opacity-100 group-hover/lang-mobile:visible transition-all duration-300">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang);
                            setActiveDropdown(null);
                          }}
                          className={`w-full text-left px-4 py-3 text-xs font-bold rounded-lg transition-all uppercase ${
                            i18n.language === lang.code
                              ? "bg-primary text-white"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-secondary text-white font-bold py-5 rounded-2xl shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm"
                >
                  Contact Us / Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <NavbarStyles />
    </>
  );
};

/* Components */

const NavMenuLink = ({ to, label, active }) => (
  <Link
    to={to}
    className={`px-1.5 xl:px-3 py-2 text-[10px] xl:text-[12px] font-bold uppercase tracking-wide transition-all relative group whitespace-nowrap ${
      active ? "text-primary" : "text-slate-600 hover:text-primary"
    }`}
  >
    {label}
    <span
      className={`absolute bottom-0 inset-x-3 h-[2px] bg-secondary rounded-full transform transition-all duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </Link>
);

const NavDropdown = ({ label, items, active }) => {
  return (
    <div className="relative group px-1.5 xl:px-3 py-2 cursor-pointer">
      <div
        className={`flex items-center gap-1 text-[10px] xl:text-[12px] font-bold uppercase tracking-wide transition-all whitespace-nowrap ${
          active ? "text-primary" : "text-slate-600 group-hover:text-primary"
        }`}
      >
        {label}{" "}
        <ChevronDown
          size={12}
          className="group-hover:rotate-180 transition-transform text-slate-400 group-hover:text-secondary"
        />
      </div>
      {/* Dropdown Menu - Dynamic Width based on content */}
      <div className="absolute top-full start-0 mt-2 min-w-[200px] w-max bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-[101]">
        {items.map((item, idx) => (
          <DropdownItem key={idx} label={item.label} to={item.path} />
        ))}
      </div>
      <span
        className={`absolute bottom-0 inset-x-3 h-[2px] bg-secondary rounded-full transform transition-all duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </div>
  );
};

const DropdownItem = ({ label, to }) => (
  <Link
    to={to}
    className="block px-4 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-primary hover:text-white rounded-xl transition-all duration-300 uppercase tracking-wider whitespace-nowrap"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-4 text-lg font-bold uppercase tracking-wide transition-all ${
      active
        ? "text-primary border-s-4 border-secondary ps-4"
        : "text-slate-500 ps-4"
    }`}
  >
    {label}
  </Link>
);

const MobileNavDropdown = ({ label, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 ps-4 text-lg font-bold uppercase tracking-wide text-slate-500 hover:text-primary transition-colors"
      >
        {label}
        <ChevronDown
          size={20}
          className={`text-slate-300 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-secondary" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            onClick={onClick}
            className="block py-3 ps-8 text-sm font-bold text-slate-500 hover:text-secondary uppercase tracking-wider"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const UtilityItem = ({ icon, label, to, onClick }) => (
  <Link
    to={to || "#"}
    onClick={onClick}
    className="flex items-center justify-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest bg-slate-50 p-4 rounded-xl border border-slate-100 active:bg-primary active:text-white transition-all"
  >
    {icon} {label}
  </Link>
);

const NavbarStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes spinCircle {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes tickerScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  ` }} />
);

export default Navbar;
