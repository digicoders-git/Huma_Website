import { Activity } from "lucide-react";

const treatments = [
  { name: "Knee Replacement", price: "4000" },
  { name: "Hip Replacement", price: "5500" },
  { name: "Brain Tumor", price: "5000" },
  { name: "Heart Bypass Surgery", price: "4500" },
  { name: "Valve Replacement", price: "9500" },
  { name: "Breast Cancer", price: "5000" },
  { name: "Lung Cancer", price: "5500" },
  { name: "Rhinoplasty", price: "1800" },
  { name: "Breast Implants", price: "2750" },
  { name: "Hair Transplant", price: "1400" },
  { name: "Cervical Cancer", price: "4500" },
  { name: "Hysterectomy", price: "3000" },
];

const Quotes = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-3">
          Lowest Quotes Assured
        </h2>
        <p className="text-slate-500 max-w-4xl mx-auto mb-12 text-sm md:text-base font-medium leading-relaxed">
          We constantly negotiate better prices and alternatives without
          compromising treatment quality. Our prices are consistently lower.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-blue-50 flex items-center gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary/60 group-hover:bg-primary group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-primary group-hover:text-secondary text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Starting{" "}
                  <span className="text-primary font-black">${item.price}</span>
                </p>
                <button className="text-secondary font-bold text-[10px] mt-1 hover:underline">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Discover what we offer!
          </p>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3.5 px-12 rounded-xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest">
              Get Quote
            </button>
            <button className="bg-primary hover:bg-accent text-white font-bold py-3.5 px-12 rounded-xl border border-primary/20 transition-all shadow-lg shadow-primary/20 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-xs">
                ●
              </span>
              Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
