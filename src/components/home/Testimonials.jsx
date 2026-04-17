import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API = import.meta.env.VITE_API_BASE_URL;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/testimonial/all`);
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const getMediaUrl = (url) => {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    const base = API.replace("/api", "");
    return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  if (loading && testimonials.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-primary mb-2" size={32} />
        <p className="text-gray-400 font-bold">Loading Testimonials...</p>
      </div>
    );
  }

  // Fallback if no testimonials exist but loading is done
  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 space-y-2">
          <h4 className="text-[#9d2626] font-bold text-[12px] uppercase tracking-[0.2em]">
            Patient Feedback
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            What Our Patients Say
          </h2>
          <p className="text-slate-400 font-medium italic text-sm tracking-tight">
            (Our journey of trust and healing continues...)
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".prev-test",
              prevEl: ".next-test",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial._id || index}>
                <div className="relative p-8 md:p-12 pb-16 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-6">
                  <div className="absolute top-4 left-4 text-primary/5">
                    <Quote size={80} />
                  </div>

                  <div className="relative z-10 space-y-6 max-w-2xl">
                    <div className="flex justify-center gap-1 text-secondary">
                      {[...Array(Number(testimonial.rating) || 5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed italic">
                      "{testimonial.message || testimonial.text || testimonial.content}"
                    </p>


                    <div className="flex flex-col items-center gap-4">
                      {testimonial.image && (
                         <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
                           <img
                             src={getMediaUrl(testimonial.image)}
                             alt={testimonial.name}
                             className="w-full h-full object-cover"
                           />
                         </div>
                      )}
                      <div className="text-center">
                        <p className="text-primary font-bold text-lg leading-none">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mt-1">
                          {testimonial.role || testimonial.designation || "Patient"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:-mx-4">
            <button className="next-test pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <button className="prev-test pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-swiper {
          padding-bottom: 3rem !important;
        }
        .swiper-pagination-bullet-active {
          background: #9d2626 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
