import {
  ClipboardList,
  Stethoscope,
  FileSearch,
  Plane,
  Hospital,
  Heart,
  History,
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={18} />,
    title: "Clinical Inquiry",
    desc: "Submit medical history for case review.",
  },
  {
    icon: <FileSearch size={18} />,
    title: "Expert Assessment",
    desc: "Consultation with senior specialists.",
  },
  {
    icon: <History size={18} />,
    title: "Clinical Proposal",
    desc: "Hospital options, timelines, and costs.",
  },
  {
    icon: <Plane size={18} />,
    title: "Logistical Support",
    desc: "Visa and travel coordination.",
  },
  {
    icon: <Hospital size={18} />,
    title: "Clinical Admission",
    desc: "Guided admission with care team.",
  },
  {
    icon: <Heart size={18} />,
    title: "Curative Treatment",
    desc: "Uncompromising clinical care.",
  },
  {
    icon: <History size={18} />,
    title: "Post-Ref Care",
    desc: "Discharge management and follow-up.",
  },
];

const Journey = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-10 space-y-2">
          <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.2em] px-3 py-1 bg-secondary/10 rounded inline-block">
            The Clinical Pathway
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight uppercase">
            Standardized Patient Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 border border-slate-100 shadow-sm relative group hover:shadow-lg transition-all duration-500 rounded"
            >
              <div className="absolute top-2 right-2 w-6 h-6 bg-primary text-white text-[11px] font-bold flex items-center justify-center rounded shadow-sm">
                0{idx + 1}
              </div>

              <div className="w-10 h-10 bg-slate-50 text-primary flex items-center justify-center rounded mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                {step.icon}
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-primary text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="p-5 border-2 border-dashed border-secondary text-primary flex flex-col justify-center items-center text-center rounded">
            <Heart size={24} className="text-secondary mb-2 animate-pulse" />
            <h3 className="font-bold text-xs uppercase tracking-widest text-secondary">
              Complete Recovery
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
