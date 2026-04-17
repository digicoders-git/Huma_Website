import { MessageCircle, CheckCircle, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="p-10 md:p-16 rounded bg-primary text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center shadow-xl animate-bounce">
              <PhoneCall size={24} />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight uppercase">
                Consult Our Neurologist Today
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-medium">
                Book an appointment with our expert neurology team for diagnosis, treatment & compassionate care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                to="/appointment"
                className="w-full lg:w-auto bg-secondary hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded shadow-xl transition-all duration-300 uppercase tracking-[0.15em] text-[13px] flex items-center justify-center gap-2"
              >
                <CheckCircle size={18} /> Book Appointment
              </Link>
              <a
                href="https://wa.me/917849893727"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary text-white font-bold py-4 px-10 rounded border border-white/20 transition-all duration-300 uppercase tracking-[0.15em] text-[13px] flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp Now
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 w-full text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                <span className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-secondary" />{" "}
                  Expert Neurologists
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-secondary" /> Advanced
                  Diagnostics
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-secondary" /> 24/7
                  Stroke Care
                </span>
              </div>
            </div>
          </div>

          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <div className="w-64 h-64 border-[30px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
