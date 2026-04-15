import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MapPin,
  Award,
  CheckCircle2,
  Activity,
  Globe,
  Upload,
  Send,
  ArrowRight,
  Star,
  Users,
  Shield,
} from "lucide-react";
import PremiumLoader from "../components/PremiumLoader";
import { getHospitalById } from "../apis/hospital";
import { doctorsData } from "../data/doctorsData";

const HospitalDetail = () => {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const data = await getHospitalById(id);
        setHospital(data.hospital);
      } catch (error) {
        console.error("Error fetching hospital:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospital();
  }, [id]);

  // Find doctors associated with this hospital name
  const associatedDoctors = doctorsData.filter(
    (doc) => doc.hospital.name === hospital?.name,
  );

  if (loading) {
    return <PremiumLoader />;
  }

  if (!hospital) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-black text-primary">Hospital Not Found</h2>
        <Link
          to="/hospitals"
          className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1"
        >
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary to-primary/80 pt-[72px]">
        <img
          src={hospital.image}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt={hospital.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />

        <div className="relative h-full flex items-center px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-secondary/30">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {hospital.city}, India
                </span>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {hospital.name}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto line-clamp-2">
              {hospital.about}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                About Hospital
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {hospital.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Users className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Expert Team
                  </p>
                  <p className="text-xs font-bold text-primary">
                    Qualified Doctors
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Shield className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Safety First
                  </p>
                  <p className="text-xs font-bold text-primary">
                    Global Standards
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Star className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Excellence
                  </p>
                  <p className="text-xs font-bold text-primary">Quality Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialities Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Specialities Available
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {hospital.specialities.slice(0, 8).map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-secondary hover:text-white transition-colors cursor-pointer"
                >
                  {spec}
                </span>
              ))}
              {hospital.specialities.length > 8 && (
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">
                  +{hospital.specialities.length - 8} more
                </span>
              )}
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Facilities & Infrastructure
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {hospital.infrastructure.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100 hover:border-secondary transition-colors"
                >
                  <CheckCircle2 size={14} className="text-secondary shrink-0" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctors Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">
                Our Specialists
              </h2>
            </div>

            {associatedDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {associatedDoctors.slice(0, 4).map((doc, idx) => (
                  <Link
                    to={`/doctor/${doc.id}`}
                    key={idx}
                    className="group flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-secondary hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1 text-sm">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-slate-500 uppercase font-medium">
                        {doc.speciality}
                      </p>
                      <div className="flex items-center gap-1 text-secondary">
                        <span className="text-xs font-bold uppercase">
                          View Profile
                        </span>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center space-y-3">
                <p className="text-slate-600 text-sm">
                  We have a team of highly experienced doctors at this hospital.
                </p>
                <Link
                  to="/doctors"
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-secondary transition-colors"
                >
                  View All Doctors <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>

          {/* Why Choose & International Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Why Choose */}
            <div className="p-4 bg-primary rounded-2xl text-white space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold uppercase italic">
                  Why Choose Us?
                </h3>
              </div>
              <div className="space-y-2">
                {hospital.whyChoose.slice(0, 4).map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      size={12}
                      className="text-secondary shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-white/90">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* International Services */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">
                  Global Support
                </h3>
              </div>
              <div className="space-y-2">
                {hospital.internationalServices
                  .slice(0, 4)
                  .map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Globe size={12} className="text-secondary shrink-0" />
                      <p className="text-sm text-slate-600">{service}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      {/* <section
        id="enquiry"
        className="py-6 px-4 md:px-8 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary uppercase italic">
              Get Treatment at <span className="text-secondary">{hospital.name}</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Fill out the form below to receive a personalized treatment plan.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your country"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm"
                  placeholder="Your phone number"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Speciality
                </label>
                <select className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary text-sm">
                  <option>Select speciality...</option>
                  {hospital.specialities.map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Upload Reports
                </label>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center justify-between cursor-pointer hover:border-secondary transition-colors">
                  <span className="text-xs text-slate-400">Select files</span>
                  <Upload size={14} className="text-secondary" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Message
                </label>
                <textarea
                  rows="2"
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 focus:outline-none focus:border-secondary resize-none text-sm"
                  placeholder="Tell us about your condition..."
                />
              </div>

              <div className="md:col-span-2 text-center pt-2">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition-all uppercase text-sm flex items-center gap-2 mx-auto"
                >
                  Get Treatment Plan <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HospitalDetail;
