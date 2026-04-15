import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, ArrowRight, Video } from "lucide-react";
import PageHero from "../components/PageHero";
import PremiumLoader from "../components/PremiumLoader";
import { getVideos } from "../apis/video";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    title: "Video Gallery",
    subtitle: "See Real Stories, Real Care, and Real Medical Journeys",
    buttonLabel: "Watch Videos",
    buttonLink: "#videos",
  },
];

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from videos data
  const videoCategories = ["All", ...new Set(videos.map((v) => v.category))];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos({ page: 1, limit: 50 });
        // Filter only active videos
        const activeVideos = data.videos?.filter((v) => v.isActive) || [];
        setVideos(activeVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  if (loading) {
    return <PremiumLoader />;
  }

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Video Gallery
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">
                {filteredVideos.length}
              </span>
              <span>videos found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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

      {/* Video Grid Section */}
      <section id="videos" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVideos.map((video) => (
                <Link
                  to={`/videos/${video._id}`}
                  key={video._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  {/* Video Section */}
                  <div className="relative h-48 overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      poster={video.thumbnail}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg">
                        <Play size={16} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {video.category}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-primary/80 rounded text-white text-xs font-bold flex items-center gap-1">
                      <Clock size={10} /> {video.duration}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-secondary">
                      <span className="text-xs font-bold uppercase">
                        Watch Video
                      </span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Video size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No videos found in this category.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Videos;
