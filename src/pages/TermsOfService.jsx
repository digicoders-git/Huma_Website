import {
  Gavel,
  Scale,
  AlertTriangle,
  UserPlus,
  CreditCard,
  ShieldX,
  Globe,
  Mail,
} from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    title: "Terms of Service",
    subtitle: "Huma Neurology Center – Transparent Legal Agreement",
    buttonLabel: "Read Terms",
    buttonLink: "#terms-content",
  },
];

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <PageHero slides={bannerSlides} />

      {/* 2. Content Section */}
      <section id="terms-content" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6 text-slate-600 leading-relaxed text-center">
            <p className="text-lg font-medium italic">
              "These Terms of Service govern your use of Huma Neurology Center
              Global website and services. By using our website or contacting
              us, you agree to these terms."
            </p>
          </div>

          {/* 1. Nature of Our Services */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-12 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Globe size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                  1. Nature of Our Services
                </h2>
              </div>
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-inner relative overflow-hidden">
                <p className="text-slate-600 font-medium mb-8">
                  Huma Neurology Center is a medical tourism facilitation and
                  coordination company. We focus on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    "Facilitation & Guidance",
                    "Connecting with Hospitals",
                    "Travel & Visa Coordination",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl mx-auto flex items-center justify-center text-secondary">
                        <Scale size={20} />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary leading-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-primary text-white rounded-2xl shadow-xl flex items-center gap-4">
                  <AlertTriangle
                    size={28}
                    className="text-secondary shrink-0"
                  />
                  <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-tight italic">
                    We do not provide medical treatment ourselves and do not
                    replace the doctor–patient relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. No Medical Guarantee */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <ShieldX size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                2. No Medical Guarantee
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-4">
                <h3 className="text-secondary font-black uppercase tracking-widest text-xs">
                  Medical Outcomes
                </h3>
                <p className="text-white/60 text-sm font-light italic leading-relaxed">
                  Medical outcomes vary from patient to patient. We do not
                  guarantee results, success rates, or recovery timelines.
                </p>
              </div>
              <div className="p-8 bg-slate-100 rounded-3xl text-primary space-y-4 border border-slate-200">
                <h3 className="text-primary font-black uppercase tracking-widest text-xs">
                  Decision Authority
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Final medical decisions are made by doctors and hospitals, not
                  by Huma Neurology Center.
                </p>
              </div>
            </div>
          </div>

          {/* 3. User Responsibilities */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <UserPlus size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                3. User Responsibilities
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "To provide accurate and complete information",
                "To share correct medical reports and history",
                "To understand that treatment decisions are based on doctor’s advice",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm italic hover:border-secondary transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 shrink-0">
                    <Scale size={20} />
                  </div>
                  <span className="text-primary font-bold uppercase text-[11px] tracking-widest leading-none">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] text-center pt-4">
              We are not responsible for issues arising from incorrect or
              incomplete information provided by the user.
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Gavel size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                4. Limitation of Liability
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Medical outcomes or complications",
                "Decisions taken by doctors or hospitals",
                "Delays caused by visa or external authorities",
                "Any indirect or consequential loss",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span className="text-[10px] md:text-[11px] font-extrabold text-primary uppercase tracking-widest italic">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5, 6, 7 & 8 Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <CreditCard size={20} />
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  5. Payments
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Any hospital payments are subject to their terms. Any Healing
                Escape coordination fees will be clearly communicated in
                advance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <ShieldX size={20} />
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  6. Intellectual Property
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                All content (text, images, logos) is the property of Healing
                Escape Global and may not be copied without permission.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Scale size={20} />
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  7. Termination
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                We reserve the right to refuse services if false info is
                provided or if there is misuse of platform or abusive behaviour.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Globe size={20} />
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  8. Governing Law
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                These terms shall be governed by and construed in accordance
                with the laws of India.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8 mt-16">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-primary uppercase italic">
                9. Contact
              </h3>
              <p className="text-slate-500 font-medium">
                For any questions about these terms, reach out to us at:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-4 bg-white px-10 py-5 rounded-2xl border border-slate-100 shadow-xl">
                <Mail size={18} className="text-secondary" />
                <span className="text-sm font-bold text-primary italic">
                  shubhamsinghs24@outlook.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Footer Buffer */}
      <div className="h-20 bg-primary" />
    </div>
  );
};

export default TermsOfService;
