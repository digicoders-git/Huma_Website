import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  ShieldAlert,
  Mail,
} from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80&w=2000",
    title: "Privacy Policy",
    subtitle: "Huma Neurology Center – Your Data Security is Our Commitment",
    buttonLabel: "Read Policy",
    buttonLink: "#policy-content",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <PageHero slides={bannerSlides} />

      {/* 2. Content Section */}
      <section id="policy-content" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg font-medium">
              At Huma Neurology Center (“we”, “our”, “us”), we are committed to
              protecting the privacy and confidentiality of our users, patients,
              and visitors. This Privacy Policy explains how we collect, use,
              store, and protect your personal and medical information when you
              use our website or contact us for medical assistance.
            </p>
            <p className="text-lg font-medium">
              By using our website or services, you agree to the practices
              described in this Privacy Policy.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                1. Information We Collect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-bold text-primary uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  a) Personal Information
                </h3>
                <ul className="space-y-2 text-slate-500 text-sm font-medium">
                  <li>• Full name</li>
                  <li>• Email address</li>
                  <li>• Phone / WhatsApp number</li>
                  <li>• Country and city</li>
                  <li>• Any other details you submit in enquiry forms</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-bold text-primary uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  b) Medical Information
                </h3>
                <ul className="space-y-2 text-slate-500 text-sm font-medium">
                  <li>• Medical reports</li>
                  <li>• Prescriptions</li>
                  <li>• Test results</li>
                  <li>• Medical history shared by you</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 mt-6">
              <h3 className="font-bold text-primary uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                c) Technical Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <div className="bg-white p-3 rounded-xl border border-slate-100 text-center">
                  IP Address
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 text-center">
                  Browser Type
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 text-center">
                  Device Info
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 text-center">
                  Pages Visited
                </div>
              </div>
            </div>
          </div>

          {/* 2. How We Use Informaiton */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                2. How We Use Your Information
              </h2>
            </div>
            <div className="bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[40px] rounded-full" />
              <ul className="space-y-4 relative z-10">
                {[
                  "To review your medical case and provide guidance",
                  "To arrange medical opinions, consultations, and treatment plans",
                  "To connect you with suitable hospitals and doctors",
                  "To assist you with travel, visa, and treatment coordination",
                  "To respond to your enquiries and support requests",
                  "To improve our website and services",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-slate-600 font-medium"
                  >
                    <ShieldCheck
                      size={20}
                      className="text-secondary mt-1 shrink-0"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-secondary text-white rounded-2xl shadow-xl flex items-center gap-4">
                <ShieldAlert size={28} className="shrink-0" />
                <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-tight">
                  We do not sell, rent, or trade your personal or medical data
                  to anyone.
                </p>
              </div>
            </div>
          </div>

          {/* 3 & 4 Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl text-primary border border-slate-100">
                  3
                </div>
                <h3 className="text-xl font-extrabold text-primary uppercase italic">
                  Sharing of Info
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Shared only with doctors, hospitals for evaluation, our internal
                team, and support partners strictly for service delivery. We
                share only the minimum necessary information.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl text-primary border border-slate-100">
                  4
                </div>
                <h3 className="text-xl font-extrabold text-primary uppercase italic">
                  Data Security
                </h3>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                We take technical and organisational measures to protect data
                from unauthorised access. However, no internet transmission is
                100% secure.
              </p>
            </div>
          </div>

          {/* 5. Confidentiality */}
          <div className="p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
            <div className="flex items-center gap-4 relative z-10">
              <Lock size={32} className="text-secondary" />
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase italic tracking-tighter">
                Strict Confidentiality
              </h2>
            </div>
            <p className="text-white/60 text-lg font-light leading-relaxed relative z-10 italic">
              "Your medical information is treated as strictly confidential and
              is used only for medical evaluation, treatment planning, and
              hospital consultation."
            </p>
          </div>

          {/* 6. Your Rights */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <UserCheck size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary uppercase italic tracking-tight">
                6. Your Rights
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "Ask what information we hold",
                "Request correction of info",
                "Request deletion of data",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center space-y-4 shadow-sm hover:border-secondary transition-all"
                >
                  <div className="w-10 h-10 bg-white rounded-xl mx-auto flex items-center justify-center text-secondary shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary leading-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Sections */}
          <div className="space-y-8 pt-8 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  7. Third-Party Links
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  We are not responsible for privacy practices of hospital or
                  partner websites linked here.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black text-primary uppercase tracking-tight italic">
                  8. Policy Changes
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Updates will be posted on this page. Check periodically for
                  changes.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-primary uppercase italic">
                9. Contact Us
              </h3>
              <p className="text-slate-500 font-medium">
                For any privacy questions, reach out to us at:
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {/* <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm">
                <Mail size={18} className="text-secondary" />
                <span className="text-sm font-bold text-primary">
                  shubhamsinghs24@outlook.com
                </span>
              </div> */}
              <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm">
                <ShieldCheck size={18} className="text-secondary" />
                <span className="text-sm font-bold text-primary">
                  Huma Neurology Center
                </span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
              538/643 Baba Ka Purwa Bandha Road Roop Pur Khadra Lucknow
Landmark - Mansha Ram Mandir
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetic Footer Buffer */}
      <div className="h-20 bg-primary" />
    </div>
  );
};

export default PrivacyPolicy;
