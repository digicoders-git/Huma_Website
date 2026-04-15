import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const PageHero = ({
  slides,
  height = "h-[300px] md:h-[350px]",
  showLogoLabel = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const bannerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      className={`relative ${height} w-full overflow-hidden bg-primary`}
    >
      {/* Dynamic Lighting Hover Effect */}
      <div
        className="absolute inset-0 z-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(29, 182, 76, 0.2) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 30%)`,
        }}
      />

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative h-full w-full overflow-hidden"
          >
            {/* Image Container */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover animate-optimized-zoom"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/60 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <motion.div
                variants={staggerContainer(0.2, 0.4)}
                initial="hidden"
                whileInView="show"
                key={index}
                className="space-y-6 max-w-4xl"
              >
                {/* Badge Removed */}
                <motion.h1
                  variants={fadeIn("up", 0.2)}
                  className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none"
                >
                  {slide.title}
                </motion.h1>
                <div className="max-w-xl mx-auto border-t border-white/20 pt-6">
                  <motion.p
                    variants={fadeIn("up", 0.3)}
                    className="text-white/80 text-sm md:text-xl font-bold tracking-widest uppercase"
                  >
                    {slide.subtitle}
                  </motion.p>
                  {/* {slide.buttonLabel && (
                    <motion.div variants={fadeIn("up", 0.4)}>
                      <Link
                        to={slide.buttonLink || "#"}
                        className="inline-block bg-secondary hover:bg-white hover:text-primary text-white font-black py-4 px-12 rounded-2xl shadow-xl transition-all duration-500 uppercase tracking-widest text-xs border-2 border-secondary hover:border-white"
                      >
                        {slide.buttonLabel}
                      </Link>
                    </motion.div>
                  )} */}
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet { background: #ffffff !important; opacity: 0.2; width: 8px; height: 8px; }
        .swiper-pagination-bullet-active { background: #1db64c !important; opacity: 1; width: 30px; border-radius: 4px; }
        .swiper-button-next, .swiper-button-prev { color: #ffffff !important; opacity: 0.3; transform: scale(0.6); transition: 0.3s; }
        .swiper-button-next:hover, .swiper-button-prev:hover { opacity: 1; color: #1db64c !important; }
      `,
        }}
      />
    </section>
  );
};

export default PageHero;
