import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Image as ImageIcon,
  X,
  Maximize2,
} from "lucide-react";
import PremiumLoader from "../components/PremiumLoader";
import { getGalleryById, getGalleries } from "../apis/gallery";

const GalleryDetail = () => {
  const { id } = useParams();
  const [galleryItem, setGalleryItem] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGalleryDetail = async () => {
      try {
        const data = await getGalleryById(id);
        setGalleryItem(data);

        // Fetch related images from same category
        const allGallery = await getGalleries({ page: 1, limit: 20 });
        const related =
          allGallery.gallery
            ?.filter(
              (item) =>
                item.isActive &&
                item._id !== id &&
                item.category === data.category,
            )
            .slice(0, 6) || [];
        setRelatedImages(related);
      } catch (error) {
        console.error("Error fetching gallery detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGalleryDetail();
    }
  }, [id]);

  if (loading) {
    return <PremiumLoader />;
  }

  if (!galleryItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ImageIcon size={48} className="mx-auto text-slate-200 mb-4" />
          <h2 className="text-xl font-bold text-primary">Image not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link
            to="/gallery"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back to Gallery</span>
          </Link>
        </div>
      </div>

      {/* Main Image Section */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-6">
            <img
              src={galleryItem.image}
              alt={galleryItem.caption}
              className="w-full h-[400px] md:h-[500px] object-cover cursor-pointer hover:scale-105 transition-all duration-500"
              onClick={() => setSelectedImage(galleryItem)}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-lg">
                <Maximize2 size={20} />
              </div>
            </div>
          </div>

          {/* Image Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">
                {galleryItem.category}
              </span>
              {galleryItem.createdAt && (
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <Calendar size={12} />
                  <span>
                    {new Date(galleryItem.createdAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              {galleryItem.caption}
            </h1>

            {galleryItem.description && (
              <p className="text-slate-600 leading-relaxed">
                {galleryItem.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Related Images */}
      {relatedImages.length > 0 && (
        <section className="py-6 px-4 md:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-4 uppercase italic">
              Related Images
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedImages.map((item) => (
                <Link
                  key={item._id}
                  to={`/gallery/${item._id}`}
                  className="group relative h-32 md:h-40 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-md transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary/90 to-transparent">
                    <h3 className="text-white text-xs font-bold line-clamp-2">
                      {item.caption}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={20} />
          </button>
          <div
            className="max-w-5xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              className="w-full max-h-[85vh] object-contain rounded-xl"
              alt={selectedImage.caption}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <div className="text-secondary text-sm font-bold uppercase mb-2">
                {selectedImage.category}
              </div>
              <h2 className="text-white text-2xl font-bold">
                {selectedImage.caption}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
