import { Wallet, Stethoscope, Cpu, Globe, ArrowRight } from "lucide-react";
import mod1 from "../../assets/home/mod1.png";

const WhyIndia = () => {
  const reasons = [
    {
      icon: <Wallet size={28} />,
      title: "Economical Care",
      desc: "India combines world-class clinical expertise with advanced technology at a fraction of global costs.",
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Clinical Excellence",
      desc: "Direct access to JCI/NABH hospitals with standardized international care outcomes.",
    },
    {
      icon: <Cpu size={28} />,
      title: "Advanced Systems",
      desc: "Experience leading-edge robotic surgery centers and modern diagnostic infrastructure.",
    },
    {
      icon: <Globe size={28} />,
      title: "Minimal Wait Time",
      desc: "Fast-track clinical intervention for critical cardiac and oncological requirements.",
    },
  ];
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-50 rounded-3xl p-10 md:p-12 relative overflow-hidden">
          {/* Accent Element */}
          <div className="absolute top-0 left-0 w-2 h-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-12 mb-6 text-center space-y-3">
              <h4 className="text-primary font-bold text-[12px] uppercase tracking-[0.3em]">
                Global Medical Hub
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
                Why India is a Top Choice of Global Patients
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-secondary">{item.icon}</div>
                  <h3 className="font-bold text-primary text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-4xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={mod1}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  alt="Medical Hub India"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndia;
