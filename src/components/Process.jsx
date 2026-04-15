import { Phone, CheckSquare, Plane, Heart, Play } from "lucide-react";

const steps = [
  {
    icon: <Phone size={28} />,
    text: "Contact us, share your case details and our team will get in touch with you.",
  },
  {
    icon: <CheckSquare size={28} />,
    text: "Receive medical opinion and cost estimate within 48 Hours",
  },
  {
    icon: <Plane size={28} />,
    text: "Book flights and get received by our team at the airport",
  },
  {
    icon: <Heart size={28} />,
    text: "Get treated and fly back. We stay in touch with you for follow ups",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-16">
          How do we work?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="lg:col-span-8 bg-[#fdfefe] p-8 md:p-12 rounded-[2rem] border border-blue-50 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-6 group"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-primary/70 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 shadow-inner">
                    {step.icon}
                  </div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed px-2 transition-colors group-hover:text-primary">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="lg:col-span-4 h-full">
            <div className="relative aspect-video lg:aspect-square bg-blue-50 rounded-[2rem] border-4 border-blue-100/50 flex items-center justify-center group cursor-pointer overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-217359f488d5?auto=format&fit=crop&q=80&w=600"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform">
                  <Play fill="currentColor" size={24} translate="x-[2px]" />
                </div>
                <span className="font-black text-primary text-lg tracking-tight uppercase">
                  Play Video
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
