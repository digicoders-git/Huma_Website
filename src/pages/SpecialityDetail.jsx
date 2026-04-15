import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { specialities } from "./Specialities";

const SpecialityDetail = () => {
  const { id } = useParams();
  const treatment = specialities.find((s) => s._id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-primary">Treatment not found</h2>
          <Link to="/specialities" className="text-secondary font-bold underline">Back to Specialities</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/specialities" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">Back to Specialities</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 mb-6">
            <img src={treatment.image} alt={treatment.title} className="w-full h-[300px] md:h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{treatment.title}</h1>
              <p className="text-white/80">Expert neurological care at Huma Neurology Center</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* About */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">About This Condition</h2>
              <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">{treatment.description}</p>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">Detailed Overview</h2>
              <p className="text-slate-600 leading-relaxed">{treatment.whatIs}</p>
            </div>

            {/* When Recommended */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-primary uppercase italic">When is Treatment Recommended?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {treatment.whenRecommended.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 size={12} className="text-secondary shrink-0" />
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Estimated Cost</p>
                <p className="text-xl font-bold text-primary">{treatment.costRange}</p>
              </div>
              <Link to="/contact" className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase hover:bg-primary transition-colors text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialityDetail;
