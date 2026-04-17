import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Neurological Specialities",
    subtitle:
      "Expert diagnosis and treatment for brain, spine & nervous system disorders — by senior DM/MD Neurologists at Huma Neurology Center.",
    buttonLabel: "Explore Specialities",
    buttonLink: "#treatments-start",
  },
];

const Specialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpec, setSelectedSpec] = useState(null);
  
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchSpecialities = async () => {
    try {
      const res = await fetch(`${API_URL}/speciality`);
      const data = await res.json();
      if (data.success) {
        setSpecialities(data.data);
      }
    } catch (err) {
      console.error("Error fetching specialities:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecialities();
  }, []);

  const filtered = specialities.filter((s) =>
    (s.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (s.description || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFullImageUrl = (path) => {
    if (!path) return "https://via.placeholder.com/800x600?text=No+Image";
    if (path.startsWith("http")) return path;
    const base = API_URL.replace("/api", "");
    return `${base}${path}`;
  };

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Neurological Specialities
            </h2>
            <p className="text-slate-500 font-medium text-base max-w-2xl mx-auto">
              Expert care for the full spectrum of brain, spine, and nervous system conditions — all under one roof at Huma Neurology Center.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-slate-400 group-focus-within:text-secondary mb-1 transition-colors" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search neurological conditions (e.g. Stroke, Epilepsy, Parkinson's...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded focus:border-secondary transition-all outline-none shadow-sm hover:shadow-md text-primary font-medium"
            />
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Specialities...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((spec, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={spec._id}
                  onClick={() => setSelectedSpec(spec)}
                  className="group relative h-[350px] rounded overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={getFullImageUrl(spec.image)}
                    alt={spec.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-left transition-transform duration-500">
                    <div className="space-y-3">
                      <div className="w-12 h-1 bg-secondary rounded-full" />
                      <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight line-clamp-1">
                        {spec.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium line-clamp-2">
                        {spec.description}
                      </p>
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em]">
                        View Details <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary italic uppercase">No treatments found</h3>
              <p className="text-slate-500">Try adjusting your search query</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedSpec && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpec(null)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <img src={getFullImageUrl(selectedSpec.image)} alt={selectedSpec.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white md:hidden cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-8 right-8 p-2 text-slate-400 hover:text-primary transition-colors hidden md:block cursor-pointer"
                >
                  <X size={28} />
                </button>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">Speciality Detail</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tighter leading-none">
                      {selectedSpec.name}
                    </h2>
                  </div>
                  <div className="space-y-6 text-left">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" /> About Treatment
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{selectedSpec.description}</p>
                    </div>
                    {selectedSpec.whatIs && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" /> Detailed Overview
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{selectedSpec.whatIs}</p>
                      </div>
                    )}
                    {selectedSpec.whenRecommended && selectedSpec.whenRecommended.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" /> Recommended When
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedSpec.whenRecommended.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Cost</p>
                        <p className="text-2xl font-black text-primary italic">{selectedSpec.costRange}</p>
                      </div>
                      <Link to="/contact" className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-secondary transition-all cursor-pointer">
                        Inquire Now
                      </Link>
                    </div>
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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}} />
    </div>
  );
};

export default Specialities;
