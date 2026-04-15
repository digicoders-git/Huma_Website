import {
  Heart,
  Activity,
  Brain,
  Bone,
  Baby,
  Scissors,
  Weight,
  Droplets,
  UserRound,
  Thermometer,
  FlaskConical,
  Microscope,
} from "lucide-react";

const specialties = [
  {
    icon: <Microscope size={32} />,
    name: "Oncology",
    desc: "Advanced cancer treatments with proven results.",
  },
  {
    icon: <Brain size={32} />,
    name: "Neurosurgery",
    desc: "The specialty of neurosurgical care includes both adult and pediatric patients.",
  },
  {
    icon: <Bone size={32} />,
    name: "Spine Surgery",
    desc: "Precision spine surgeries for better mobility.",
  },
  {
    icon: <Heart size={32} />,
    name: "Cardiology",
    desc: "World-class heart care for adults and children.",
  },
  {
    icon: <Activity size={32} />,
    name: "Orthopedics",
    desc: "Expert joint replacements and bone deformities solutions.",
  },
  {
    icon: <Baby size={32} />,
    name: "IVF",
    desc: "Leading fertility treatments with high success.",
  },
  {
    icon: <UserRound size={32} />,
    name: "Gynecology",
    desc: "Specialized women's health services.",
  },
  {
    icon: <Scissors size={32} />,
    name: "Cosmetic",
    desc: "Aesthetic procedures for a new you.",
  },
  {
    icon: <Weight size={32} />,
    name: "Weight Loss",
    desc: "Effective bariatric surgery options.",
  },
  {
    icon: <Droplets size={32} />,
    name: "Liver Transplant",
    desc: "Liver transplant procedures of varying complexity.",
  },
  {
    icon: <FlaskConical size={32} />,
    name: "Kidney Transplant",
    desc: "Expert renal care and transplants.",
  },
  {
    icon: <Thermometer size={32} />,
    name: "Bone Marrow",
    desc: "Bone marrow transplant options for matched and non matched donors",
  },
];

const Specialties = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-3">
          Multi-Specialty Focus
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto mb-12 text-sm md:text-base font-medium">
          We cover all medical needs, from hair transplants to heart
          transplants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl flex items-start gap-5 text-left border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
            >
              <div className="text-secondary group-hover:scale-110 transition-transform flex-shrink-0">
                {spec.icon}
              </div>
              <div className="space-y-2 pr-4">
                <h3 className="font-extrabold text-primary group-hover:text-secondary transition-colors">
                  {spec.name}
                </h3>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  {spec.desc}
                </p>
              </div>
              {/* Green plus button instead of red */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-sm cursor-pointer hover:bg-primary transition-colors">
                +
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-10 rounded-xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-wide">
            Need Assistance?
          </button>
          <button className="bg-primary hover:bg-accent text-white font-bold py-3 px-10 rounded-xl border border-primary/20 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 uppercase tracking-wide">
            <span className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[10px]">
              ●
            </span>
            Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
