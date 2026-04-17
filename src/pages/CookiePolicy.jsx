import {
  Cookie,
  MousePointer2,
  ShieldCheck,
  Activity,
  Settings,
  ShieldAlert,
  Mail,
  BarChart2,
} from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    title: "Cookie Policy",
    subtitle: "Huma Neurology Center – Understanding How We Use Cookies",
    buttonLabel: "Read Policy",
    buttonLink: "#cookie-content",
  },
];

const CookiePolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <PageHero slides={bannerSlides} />

      {/* 2. Content Section */}
      <section id="cookie-content" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-6 text-slate-600 leading-relaxed text-center max-w-2xl mx-auto border-b border-slate-100 pb-12">
            <p className="text-lg font-medium italic">
              "This Cookie Policy explains how Huma Neurology Center uses
              cookies on its website to enhance your browsing experience and
              improve our services."
            </p>
          </div>

          {/* 1. What Are Cookies? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Cookie size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                  1. What Are Cookies?
                </h2>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic border-l-4 border-secondary pl-6 py-2">
                Cookies are small text files stored on your device when you
                visit a website.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  They help us:
                </p>
                <div className="space-y-3">
                  {[
                    "Improve website functionality",
                    "Remember user preferences",
                    "Understand visitor patterns",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl"
                    >
                      <ShieldCheck size={18} className="text-secondary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-widest leading-none">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-primary p-12 rounded-[3.5rem] flex flex-col items-center justify-center text-center text-white space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/20 scale-150 transform -rotate-12 translate-x-1/2 translate-y-1/2 rounded-full opacity-10" />
              <Cookie
                size={80}
                className="text-secondary transform group-hover:scale-110 transition-transform"
              />
              <h4 className="text-xl font-extrabold uppercase italic tracking-widest text-secondary">
                Smart Storage
              </h4>
            </div>
          </div>

          {/* 2 & 3 Sections */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <BarChart2 size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                2 & 3. Usage & Types
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Performance",
                  desc: "For speed and optimization",
                  icon: <Activity />,
                },
                {
                  title: "Essential",
                  desc: "Core website features",
                  icon: <ShieldCheck />,
                },
                {
                  title: "Analytics",
                  desc: "Traffic analysis tracking",
                  icon: <BarChart2 />,
                },
                {
                  title: "Preference",
                  desc: "Remembering your settings",
                  icon: <Settings />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4 hover:border-secondary transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl mx-auto flex items-center justify-center text-secondary shadow-md group-hover:bg-secondary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-primary italic">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Sensitive Data Warning */}
          <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 blur-[50px] rounded-full" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-secondary rounded-[1.5rem] flex items-center justify-center text-white shrink-0 shadow-2xl animate-pulse">
                <ShieldAlert size={40} />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-white uppercase italic tracking-tight">
                  4. Medical & Personal Data
                </h3>
                <p className="text-white/50 text-base font-light italic leading-relaxed">
                  We do not store medical reports, sensitive clinical data, or
                  critical personal information in cookies.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Managing Cookies */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <MousePointer2 size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                5. Managing Cookies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm italic">
                  Browser Controls
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  You can accept or reject cookies from your browser settings or
                  delete them at any time.
                </p>
              </div>
              <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl space-y-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm italic">
                  Impact of Disabling
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic relative z-10">
                  Disabling cookies may affect some website features or the
                  overall experience.
                </p>
              </div>
            </div>
          </div>

          {/* 6 & 7 Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                6. Third-Party Cookies
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Some analytics tools (e.g. Google Analytics) use their own
                cookies. We do not control those cookies.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                7. Policy Updates
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                We may update this policy periodically. Changes will be
                reflected here.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8 mt-16">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-primary uppercase italic">
                8. Contact
              </h3>
              <p className="text-slate-500 font-medium">
                If you have questions about our Cookie Policy, reach out to us
                at:
              </p>
            </div>
            {/* <div className="flex justify-center">
              <div className="flex items-center gap-4 bg-white px-10 py-5 rounded-2xl border border-slate-100 shadow-xl group hover:border-secondary transition-all">
                <Mail size={18} className="text-secondary" />
                <span className="text-sm font-bold text-primary italic">
                  shubhamsinghs24@outlook.com
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Aesthetic Footer Buffer */}
      <div className="h-20 bg-primary" />
    </div>
  );
};

export default CookiePolicy;
