import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // 1. Automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. Button visibility for "Back to Top" functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-secondary text-white shadow-2xl hover:bg-primary transition-all duration-300 transform ${
        isVisible
          ? "scale-100 translate-y-0 opacity-100"
          : "scale-0 translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;
