import { useState, useEffect } from "react";
import { X, Maximize2, Image as ImageIcon, Loader2 } from "lucide-react";
import PageHero from "../components/PageHero";

const API = import.meta.env.VITE_API_BASE_URL;

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Our Gallery",
    subtitle: "A Glimpse into Our Facilities, Team & Patient Care Journey at Huma Neurology Center",
    buttonLabel: "View Gallery",
    buttonLink: "#gallery-grid",
  },
];

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/gallery/all`);
        const data = await res.json();
        if (data.success) {
          setGalleryItems(data.data);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const galleryCategories = ["All", ...new Set(galleryItems.map((g) => g.category))];

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeCategory);

  const getMediaUrl = (url) => {
    if (!url) return "/huma/h1.jpeg";
    if (url.startsWith("http")) return url;
    const base = API.replace("/api", "");
    return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">Photo Gallery</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredImages.length}</span>
              <span>images found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-secondary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-4">
              <Loader2 size={40} className="text-secondary animate-spin" />
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Loading Gallery...</p>
            </div>
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((item) => (
                <div
                  key={item._id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-100 hover:shadow-md transition-all"
                >
                  <img
                    src={getMediaUrl(item.image)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    alt={item.title || item.caption}
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                    {item.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                    <h3 className="text-white font-bold text-sm line-clamp-2">{item.title || item.caption}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <ImageIcon size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">No images found in this category.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 mt-20 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all z-20 border border-white/20 hover:border-white/40 group"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <div className="max-w-5xl w-full relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={getMediaUrl(selectedImage.image)}
                className="w-full max-h-[85vh] object-contain"
                alt={selectedImage.title || selectedImage.caption}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">{selectedImage.title || selectedImage.caption}</h2>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            Click anywhere to close
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}} />
    </div>
  );
};

export default Gallery;
