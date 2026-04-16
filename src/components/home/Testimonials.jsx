import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsData = [
  {
    name: "Ramesh Kumar",
    role: "Stroke Patient, Lucknow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300",
    text: "After my stroke, I was devastated. The team at Huma Neurology Center gave me hope. Their 24/7 stroke unit responded immediately and the neurorehabilitation program helped me regain my speech and mobility. Forever grateful.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Epilepsy Patient, Kanpur",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300",
    text: "I had been suffering from uncontrolled seizures for years. The epilepsy specialists at Huma Neurology Center correctly diagnosed my condition through advanced EEG monitoring and put me on the right treatment. I have been seizure-free for 18 months now.",
    rating: 5,
  },
  {
    name: "Abdul Rauf",
    role: "Parkinson's Patient, Varanasi",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    text: "Managing Parkinson's disease felt overwhelming until we found Huma Neurology Center. Dr. Huma's dedicated movement disorder clinic provided a personalized care plan that significantly improved my father's quality of life. Exceptional care and compassion.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-8 md:p-12 pb-16 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center gap-6">
                  <div className="absolute top-4 left-4 text-primary/5">
                    <Quote size={80} />
                  </div>

                  <div className="relative z-10 space-y-6 max-w-2xl">
                    <div className="flex justify-center gap-1 text-secondary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex flex-col items-center gap-4">
                      {/* <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div> */}
                      <div className="text-center">
                        <p className="text-primary font-bold text-lg leading-none">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mt-1">
                          {testimonial.role}
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
