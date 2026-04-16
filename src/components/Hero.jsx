import {
  ChevronDown,
  Star,
  Verified,
  Globe,
  Award,
  ShieldCheck,
} from "lucide-react";
import ModernSelect from "../components/ModernSelect";
import homeImg from "../assets/homeImg.png";

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center py-20 px-4 md:px-8 overflow-hidden bg-white">
      {/* Background Image with Global Context */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeImg}
          alt="Huma Neurology Center Medical Portal"
          className="w-full h-full object-cover"
        />
        {/* Advanced Layered Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">
        {/* Left Content - International Focus */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
              <Globe size={16} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                Premier Neurology Care Centre
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-primary leading-[1.05] tracking-tight">
              Medical Care with <br />
              <span className="text-secondary">Global</span> Excellence
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 font-bold max-w-xl leading-relaxed">
              Huma Neurology Center bridges the gap with world-class facilities & zero
              compromise care.
            </p>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-2xl"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt="Patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="leading-none">
                <p className="text-primary font-black text-2xl tracking-tighter">
                  1,00,000+
                </p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">
                  Trust Holders
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} className="text-secondary" />
                </div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                  Verified
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-50 group-hover:scale-110 transition-transform">
                  <Award size={24} className="text-primary" />
                </div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                  Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Lead Generation Form */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,108,181,0.2)] border border-white p-10 w-full max-w-md relative transition-all hover:scale-[1.01]">
            <div className="absolute top-0 left-0 right-0 h-3 bg-secondary rounded-t-[3rem]" />

            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-primary">
                Let Us Assist You
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">
                Free Consultant Experts
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <ModernInput placeholder="Patient Name" type="text" />
                <div className="grid grid-cols-2 gap-4">
                  <ModernSelect 
                    options={[
                      { value: "India", label: "India" },
                      { value: "UAE", label: "UAE" },
                      { value: "USA", label: "USA" },
                      { value: "UK", label: "UK" }
                    ]}
                    placeholder="Country"
                    className="w-full"
                  />
                  <ModernInput placeholder="City" type="text" />
                </div>
                <div className="flex gap-3">
                  <div className="w-20">
                    <ModernInput placeholder="+91" center />
                  </div>
                  <div className="flex-1">
                    <ModernInput placeholder="Phone Number" />
                  </div>
                </div>
                <textarea
                  placeholder="Tell us about the medical problem..."
                  rows="3"
                  className="w-full py-4 px-6 rounded-3xl border border-slate-100 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white transition-all resize-none text-sm font-bold text-slate-700 placeholder:text-slate-400"
                ></textarea>
                <ModernInput placeholder="Patient Age / DOB" />
              </div>

              <button className="w-full bg-primary hover:bg-secondary text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-primary/20 transition-all duration-500 uppercase tracking-[0.2em] text-[11px] mt-6 transform active:scale-95">
                Generate Free Quote
              </button>
            </form>

            <p className="text-[9px] text-slate-400 text-center mt-8 leading-relaxed font-bold uppercase tracking-widest opacity-60">
              International Patients are our{" "}
              <span className="text-primary">First Priority</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Modern UI Elements */
const ModernInput = ({ placeholder, type = "text", center }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full py-4 px-6 rounded-2xl border border-slate-100 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white transition-all text-sm font-extrabold text-slate-700 placeholder:text-slate-400 ${
      center ? "text-center px-2" : ""
    }`}
  />
);



export default Hero;
