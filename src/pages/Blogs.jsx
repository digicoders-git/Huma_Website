import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen, Loader2 } from "lucide-react";
import PageHero from "../components/PageHero";

const API = import.meta.env.VITE_API_BASE_URL;

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Blog & Knowledge Hub",
    subtitle: "Trusted Neurological Information & Latest Brain Health Updates",
    buttonLabel: "Read Articles",
    buttonLink: "#blogs",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/blog/all?isPublished=true`);
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const blogCategories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const getMediaUrl = (url) => {
    if (!url) return "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800";
    if (url.startsWith("http")) return url;
    const base = API.replace("/api", "");
    return `${base}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">Knowledge Hub</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredBlogs.length}</span>
              <span>articles found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
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

      <section id="blogs" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-4">
              <Loader2 size={40} className="text-secondary animate-spin" />
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Loading Articles...</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBlogs.map((blog) => (
                <Link
                  to={`/blogs/${blog._id}`}
                  key={blog._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={getMediaUrl(blog.coverImage)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      alt={blog.title}
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={12} className="text-secondary" />
                      <span>{new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{blog.excerpt}</p>
                    <div className="pt-2 flex items-center gap-2 text-secondary">
                      <span className="text-xs font-bold uppercase">Read More</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <BookOpen size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No articles found in this category.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
