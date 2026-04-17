import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

const getFullImageUrl = (path) => {
  if (!path) return "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=800&auto=format&fit=crop";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/huma")) return path;
  const apiBase = import.meta.env.VITE_API_BASE_URL?.replace("/api", "") || "";
  return `${apiBase}${path.startsWith('/') ? '' : '/'}${path}`;
};

const bannerSlides = [
  {
    image: "/huma/h3.jpeg",
    title: "Medical Departments",
    subtitle: "Specialized Neurological Departments — Expert Care for Every Brain & Nervous System Condition",
    buttonLabel: "Explore Departments",
    buttonLink: "#departments",
  },
];

const Departments = () => {
  const [selected, setSelected] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/department`);
        const data = await res.json();
        if (data.success) {
          setDepartments(data.data.filter((d) => d.isActive !== false));
        }
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Intro */}
      <section className="py-10 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.3em]">Our Specialised Units</h4>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tight">
            Departments of Excellence
          </h2>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            Each department at Huma Neurology Center is led by a dedicated specialist — ensuring focused, expert-level care for every neurological condition.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </section>

      {/* Departments Grid */}
      <section id="departments" className="py-12 px-4 md:px-8 bg-white min-h-[50vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-20">
            <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Departments...</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {departments.map((dept, idx) => (
              <motion.div
                key={dept._id || idx}
                variants={fadeIn("up", 0.05 * idx)}
                onClick={() => setSelected(dept)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-[280px]"
              >
                <img
                  src={getFullImageUrl(dept.image)}
                  alt={dept.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dept.color ? dept.color : 'from-slate-800 to-transparent'} opacity-75 group-hover:opacity-90 transition-opacity duration-500`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white relative z-10">
                  <div className="text-3xl mb-2">{dept.icon || "🏥"}</div>
                  <div className="w-8 h-0.5 bg-white/60 rounded-full mb-2" />
                  <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">{dept.name}</h3>
                  <p className="text-white/70 text-xs font-medium mt-1 line-clamp-2">{dept.shortDesc}</p>
                  <div className="flex items-center gap-1 mt-3 text-white/80 text-xs font-bold uppercase tracking-widest">
                    View Details <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Department Detail Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              {/* Image Side */}
              <div className="w-full md:w-2/5 relative h-[220px] md:h-auto shrink-0">
                <img src={getFullImageUrl(selected.image)} alt={selected.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${selected.color ? selected.color : 'from-slate-800 to-transparent'} opacity-60`} />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl mb-2">{selected.icon || "🏥"}</div>
                  <h2 className="text-xl font-black uppercase leading-tight">{selected.name}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white md:hidden"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-primary transition-colors hidden md:block"
                >
                  <X size={24} />
                </button>

                <div className="space-y-6">
                  {/* Head */}
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department Head</p>
                      <p className="font-bold text-primary text-sm">{selected.head || 'Senior Consultant'} <span className="text-slate-400 font-medium">— {selected.qualification || 'MBBS, MD'}</span></p>
                    </div>
                  </div>

                  {/* About */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> About Department
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{selected.about || 'Specialized and comprehensive care.'}</p>
                  </div>

                  {/* Conditions */}
                  {selected.conditions && selected.conditions.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> Conditions Treated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.conditions.map((c, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}

                  {/* Services */}
                  {selected.services && selected.services.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> Services Offered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.services.map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-secondary shrink-0" />
                          <span className="text-sm text-slate-600 font-medium">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  )}

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl text-xs uppercase tracking-widest transition-all"
                    >
                      Book Appointment <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default Departments;
