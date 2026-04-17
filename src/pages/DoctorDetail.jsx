import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GraduationCap, MapPin, Users, Activity, CheckCircle2 } from "lucide-react";

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`${API_URL}/doctor/${id}`);
        const data = await res.json();
        if (data.success && data.data) {
          const d = data.data;
          
          let exp = 10;
          if (d.startDate) {
            exp = new Date().getFullYear() - new Date(d.startDate).getFullYear();
            if (exp < 1) exp = 1;
          }
          if (d.experience) exp = d.experience;

          setDoctor({
            ...d,
            _id: d._id,
            name: d.fullName,
            designation: d.designation || "Senior Consultant",
            speciality: d.department || "Neurology",
            qualification: d.qualification || d.specialization || "MBBS, MD",
            experience: exp,
            city: d.city || "Lucknow",
            photo: d.avatar ? `${API_URL.replace('/api', '')}${d.avatar}` : "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            about: d.about || "Experienced specialist providing world-class healthcare and clinical excellence.",
            expertise: Array.isArray(d.expertise) && d.expertise.length > 0 ? d.expertise : ["Neurological Disorders", "General Consultation"],
            procedures: Array.isArray(d.procedures) && d.procedures.length > 0 ? d.procedures : ["Diagnostic Evaluation"],
            whyChoose: Array.isArray(d.whyChoose) && d.whyChoose.length > 0 ? d.whyChoose : ["Years of clinical experience", "Compassionate patient-centered care"],
            hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] }
          });
        }
      } catch (err) {
        console.error("Error fetching doctor detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [id, API_URL]);

  if (loading) {
    return (
      <div className="py-40 flex flex-col items-center justify-center bg-white min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Profile...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="py-40 text-center space-y-8 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black text-primary">Doctor Not Found</h2>
        <Link to="/doctors" className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1 cursor-pointer">
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-slate-50 pt-[10px]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-20" />
        <div className="relative w-full px-4 md:px-8 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-8 border-white shadow-2xl shrink-0 group">
              <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight">{doctor.name}</h1>
                <p className="text-secondary font-bold text-xl md:text-2xl">{doctor.designation}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-600">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <GraduationCap size={18} className="text-secondary" />
                  <span className="text-sm font-bold">{doctor.qualification}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin size={18} className="text-secondary" />
                  <span className="text-sm font-bold">{doctor.city}, India</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-lg cursor-pointer">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">About Doctor</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h2 className="text-xl font-bold text-primary uppercase italic">Experience & Expertise</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                With over {doctor.experience} years of experience, {doctor.name} has handled thousands of complex cases, providing world-class healthcare and clinical excellence.
              </p>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Users className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Experience</p>
                  <p className="text-sm font-bold text-primary">{doctor.experience} Years</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-2xl text-white shadow-xl space-y-4">
              <h4 className="text-xl font-bold uppercase italic text-secondary border-b border-white/10 pb-2">Expert Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {doctor.expertise.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-sm text-white font-medium leading-relaxed">• {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">Procedures & Treatments</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doctor.procedures.map((proc, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-secondary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm text-slate-700">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">Why Choose {doctor.name.split(" ").slice(1).join(" ")}</h3>
              </div>
              <div className="space-y-2">
                {doctor.whyChoose.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">Hospital Affiliation</h3>
              </div>
              <div className="space-y-2">
                <p className="text-secondary font-bold">{doctor.hospital.name}</p>
                <p className="text-slate-500 text-sm">{doctor.hospital.city}, India</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {doctor.hospital.accreditation.map((acc, i) => (
                    <span key={i} className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold uppercase">{acc}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetail;
