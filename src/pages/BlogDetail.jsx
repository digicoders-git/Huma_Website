import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { blogs } from "./Blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b._id === id);
  const relatedArticles = blogs.filter((b) => b._id !== id).slice(0, 3);

  if (!blog) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-extrabold text-primary uppercase italic">Article Not Found</h2>
        <Link to="/blogs" className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1">
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-primary pt-[72px]">
        <img src={blog.image} className="absolute inset-0 w-full h-full object-cover opacity-20" alt={blog.title} />
        <div className="relative h-full flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm mb-4">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center justify-center gap-4 text-white text-sm mb-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-secondary/30">
                {blog.category}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} /> {blog.date}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{blog.title}</h1>
            <p className="text-white/60 text-sm">By {blog.author}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">Introduction</h2>
            </div>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">{blog.introduction}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">Article Content</h2>
            </div>
            <div
              className="blog-content-wrapper text-slate-700 space-y-3 [&_h3]:font-bold [&_h3]:text-primary [&_h3]:text-lg [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_li]:text-slate-600 [&_li]:text-sm [&_p]:leading-relaxed [&_strong]:text-primary"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h3 className="text-lg font-bold text-primary uppercase italic">How This Helps You</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Understand treatment options better", "Ask the right questions to doctors", "Plan your medical journey confidently", "Make informed decisions"].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <p className="text-sm text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary rounded-2xl text-white text-center space-y-4">
            <h3 className="text-xl font-bold uppercase italic">Need Personal Guidance?</h3>
            <p className="text-white/80">Get personalized neurological opinion and expert consultation from our team.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-2 px-6 rounded-lg uppercase text-sm hover:bg-white hover:text-primary transition-colors">
              Book Consultation <Send size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-1 bg-secondary rounded-full" />
            <h2 className="text-xl font-bold text-primary uppercase italic">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((art, idx) => (
              <Link to={`/blogs/${art._id}`} key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all">
                <div className="h-32 overflow-hidden">
                  <img src={art.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt={art.title} />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 text-sm">{art.title}</h4>
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="text-xs font-bold uppercase">Read More</span>
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

export default BlogDetail;
