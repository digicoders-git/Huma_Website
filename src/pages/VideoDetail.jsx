import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Play,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Send,
  ArrowRight,
} from "lucide-react";
import PremiumLoader from "../components/PremiumLoader";
import { getVideoById, getVideos } from "../apis/video";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const [videoData, allVideosData] = await Promise.all([
          getVideoById(id),
          getVideos({ page: 1, limit: 50 }),
        ]);

        setVideo(videoData.video);

        // Get related videos from same category (excluding current video)
        const activeVideos =
          allVideosData.videos?.filter((v) => v.isActive && v._id !== id) || [];
        const sameCategory = activeVideos.filter(
          (v) => v.category === videoData.video?.category,
        );
        setRelatedVideos(sameCategory.slice(0, 3));
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideoData();
  }, [id]);

  if (loading) {
    return <PremiumLoader />;
  }

  if (!video) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary uppercase italic">
          Video Not Found
        </h2>
        <Link
          to="/videos"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Video Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary to-primary/80 pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />

        <div className="relative h-full flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm mb-4"
            >
              <ArrowLeft size={16} /> Back to Gallery
            </Link>
            <div className="flex items-center justify-center gap-4 text-white text-sm mb-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                {video.category}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> {video.duration}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {video.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
            <video
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
              poster={video.thumbnail}
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                About This Video
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">
              {video.description}
            </p>
          </div>

          {/* What You Will Learn */}
          {video.whatYouWillLearn && video.whatYouWillLearn.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">
                  What This Video Covers
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {video.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-secondary shrink-0"
                    />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="p-6 bg-primary rounded-2xl text-white text-center space-y-4">
            <h3 className="text-xl font-bold uppercase italic">
              Need Personal Guidance?
            </h3>
            <p className="text-white/80">
              Get personalized medical opinion and hospital recommendations from
              our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-2 px-6 rounded-lg uppercase text-sm hover:bg-white hover:text-primary transition-colors"
            >
              Request Medical Opinion <Send size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Videos */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-1 bg-secondary rounded-full" />
            <h2 className="text-xl font-bold text-primary uppercase italic">
              Related Videos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedVideos.map((rv, idx) => (
              <Link
                to={`/videos/${rv._id}`}
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={rv.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    alt={rv.title}
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play
                        size={12}
                        fill="currentColor"
                        className="text-white"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-primary/80 rounded text-white text-xs font-bold flex items-center gap-1">
                    <Clock size={8} /> {rv.duration}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 text-sm">
                    {rv.title}
                  </h4>
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="text-xs font-bold uppercase">
                      Watch Video
                    </span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoDetail;
