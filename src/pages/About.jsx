import {
  ShieldCheck,
  Target,
  Eye,
  Activity,
  MapPin,
  BarChart3,
  HeartHandshake,
  Users,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import mainLogo from "../assets/main_logo.png";

const bannerSlides = [
  {
    image: "/huma/h1.jpeg",
    title: "Huma Neurology Center",
    subtitle: "Expert Care for Brain, Spine & Nervous System Disorders",
    buttonLabel: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/huma/h3.jpeg",
    title: "Advanced Neuro-Diagnostics",
    subtitle: "State-of-the-Art EEG, MRI & EMG/NCV — All Under One Roof",
    buttonLabel: "Book Appointment",
    buttonLink: "/contact",
  },
  {
    image: "/huma/h5.jpeg",
    title: "Compassionate Neurological Care",
    subtitle: "Trusted by Thousands of Patients Across Lucknow & Beyond",
    buttonLabel: "Know Our Team",
    buttonLink: "/doctors",
  },
];

const About = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* 1. Top Banner Slider */}
      <PageHero slides={bannerSlides} />

      {/* 2. Company Story */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase italic leading-none">
                  Our Story
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                Huma Neurology Center was established with a single mission — to bring world-class neurological care to the people of Lucknow and beyond. Founded by Dr. Huma, a distinguished neurologist, our center specializes in diagnosing and treating the full spectrum of brain, spine, and nervous system disorders with precision, compassion, and evidence-based medicine.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="relative group px-4 md:px-0"
            >
              <div className="rounded md:rounded overflow-hidden  border-4 md:border-8 border-white transform md:group-hover:scale-[1.02] transition-all duration-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10"></div>
                <img
                  src={mainLogo}
                  className="w-full h-auto md:h-[450px] object-contain p-8 md:p-12"
                  alt="Huma Neurology Center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Management Message */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div variants={fadeIn('up', 0.1)} className="text-center mb-10 space-y-3">
            <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.3em]">Leadership & Vision</h4>
            <h2 className="text-2xl md:text-4xl font-bold text-primary uppercase italic tracking-tight">Message from the Management</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={fadeIn('right', 0.2)} className="lg:col-span-4 flex flex-col items-center gap-6">
              <div className="relative flex items-center justify-center w-64 h-64">
                <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dashed border-secondary/30" style={{ animation: 'spinMgmt 12s linear infinite' }} />
                <div className="absolute w-[260px] h-[260px] rounded-full border border-primary/10" style={{ animation: 'spinMgmt 20s linear infinite reverse' }} />
                <div className="w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg"
                    alt="Dr. Mo. Shakil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-xl font-black text-primary">Dr. Mo. Shakil</h3>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest">Founder & Chief Neurologist</p>
                <p className="text-slate-400 text-xs font-medium">MBBS, MD, DM Neurology</p>
                <div className="flex items-center justify-center gap-2 mt-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">15+ Years Experience</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} className="lg:col-span-8 space-y-4">
              <div className="text-8xl font-black text-secondary/10 leading-none select-none -mb-2">“</div>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-base md:text-lg">
                <p>When I founded Huma Neurology Center, my vision was simple yet profound — to ensure that every patient suffering from a neurological condition receives the same quality of care that was previously only available in metro cities. Lucknow deserved a world-class neurology center, and we built one.</p>
                <p>Neurological diseases — stroke, epilepsy, Parkinson's, dementia — are not just medical conditions. They affect the entire family. They rob people of their independence, their identity, and their joy. Our mission is to give that back.</p>
                <p>At Huma Neurology Center, we combine the latest advances in neuroscience with a deeply human approach to care. Every patient who walks through our doors is treated with dignity, precision, and compassion. We do not just treat diseases — we restore lives.</p>
              </div>
              <div className="text-8xl font-black text-secondary/10 leading-none select-none text-right -mt-2">”</div>
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-black text-primary text-lg italic">Dr. Mo. Shakil</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Founder & Chief Neurologist, Huma Neurology Center</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ value: '15+', label: 'Years' }, { value: '10K+', label: 'Patients' }, { value: '98%', label: 'Success' }].map((s, i) => (
                    <div key={i} className="text-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      <p className="text-xl font-black text-primary">{s.value}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@keyframes spinMgmt { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` }} />
      </motion.section>

      {/* 4. Mission & Vision */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-12 rounded md:rounded border-2 border-slate-100 shadow-xl space-y-6 md:space-y-8 group hover:shadow-2xl hover:border-secondary/40 transition-all duration-500 overflow-hidden relative text-center md:text-left"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary/15 to-secondary/5 roundedmd:rounded-3xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 mx-auto md:mx-0 border-2 border-secondary/20 shadow-lg">
                <Target size={32} className="md:w-10 md:h-10" />
              </div>
              <div className="space-y-3 md:space-y-4 relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tight italic">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto md:mx-0"></div>
                <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed">
                  To provide every patient with accurate neurological diagnosis, personalised treatment, and compassionate care — ensuring the best possible outcomes for brain, spine, and nervous system conditions.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-12 rounded md:rounded border-2 border-slate-100 shadow-xl space-y-6 md:space-y-8 group hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden relative text-center md:text-left"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/15 to-primary/5 rounded md:rounded flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 mx-auto md:mx-0 border-2 border-primary/20 shadow-lg">
                <Eye size={32} className="md:w-10 md:h-10" />
              </div>
              <div className="space-y-3 md:space-y-4 relative z-10">
                <h3 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tight italic">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto md:mx-0"></div>
                <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed">
                  To become the most trusted neurology center in North India — a hub of excellence where cutting-edge neuroscience meets compassionate patient care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. Why We Exist */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-primary rounded md:rounded p-8 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.1),transparent_50%)]" />
            <div className="relative z-10 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none italic">
                  Why We Exist
                </h2>
              </div>
              <div className="text-center max-w-4xl mx-auto space-y-10 md:space-y-12">
                <motion.p
                  variants={fadeIn("up", 0.3)}
                  className="text-xl md:text-4xl text-white font-black leading-tight italic"
                >
                  "We exist to restore hope, function, and quality of life through the power of neurological science."
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    "Accurate Diagnosis",
                    "Evidence-Based Care",
                    "Patient Empowerment",
                    "Compassionate Support",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn("up", 0.1 * (i + 1))}
                      className="flex flex-col items-center gap-4 p-6 md:p-8 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Why india Focus */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase leading-[0.9] italic">
                  Why Choose
                  <br />
                  <span className="text-secondary">Huma Neurology</span>
                </h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Lucknow's most trusted destination for neurological care — combining advanced diagnostics with expert clinical management.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Dedicated Neurology OPD & IPD",
                    "24/7 Stroke Emergency Unit",
                    "Advanced EEG, MRI & EMG/NCV Lab",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn("right", 0.1 * (i + 1))}
                      className="flex items-center gap-4 md:gap-6 bg-slate-50 p-2 md:p-3 rounded md:rounded border border-slate-100 shadow-sm md:hover:translate-x-4 transition-all duration-500 text-left"
                    >
                      <div className="bg-white p-3 md:p-4 rounded md:rounded shadow-md text-secondary shrink-0">
                        <MapPin size={20} md:size={24} />
                      </div>
                      <span className="text-xs md:text-base font-bold text-primary uppercase tracking-wide leading-none">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-1 gap-4 md:gap-8 items-end">
                <div className="space-y-4 md:space-y-8">
                  <motion.img
                    variants={fadeIn("up", 0.3)}
                    src="/huma/h2.jpeg"
                    className="w-full h-auto md:h-[350px] object-contain md:object-cover rounded md:rounded shadow-2xl border-2 border-white"
                    alt="Neurology Center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. Industry Stats */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 md:py-20 bg-primary relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-white mb-12 md:mb-20 text-center space-y-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white italic"
            >
              Neurology at Huma Center
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                label: "Years of Excellence",
                value: "15+",
                icon: <BarChart3 size={32} />,
              },
              {
                label: "Patients Treated",
                value: "10K+",
                icon: <Users size={32} />,
              },
              {
                label: "Conditions Managed",
                value: "50+",
                icon: <Activity size={32} />,
              },
              {
                label: "Success Rate",
                value: "98%",
                icon: <ShieldCheck size={32} />,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.1 * (i + 1))}
                className="bg-white/5 border border-white/10 p-6 md:p-12 rounded md:rounded text-center space-y-2 md:space-y-4 shadow-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-secondary flex justify-center md:group-hover:-translate-y-2 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none italic">
                  {stat.value}
                </h4>
                <p className="text-white/40 text-[8px] md:text-[11px] font-bold uppercase tracking-[0.3em] leading-tight pt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. Ethical Commitment */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-slate-50 rounded md:rounded p-8 md:p-24 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center shadow-inner relative overflow-hidden"
          >
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:col-span-7 space-y-10 md:space-y-12 text-center lg:text-left relative z-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight uppercase leading-[1.1] italic">
                  Our Clinical <br /> Commitment
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Advanced Neuro-Diagnostics",
                  "Expert DM/MD Neurologists",
                  "Evidence-Based Protocols",
                  "Patient Data Privacy",
                  "Ethical & Transparent Care",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("right", 0.1 * (i + 1))}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded md:rounded border border-slate-100 shadow-sm md:hover:border-secondary transition-colors text-left"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded md:rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <ShieldCheck size={20} md:size={24} />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-primary uppercase tracking-tight leading-none">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:col-span-5 relative z-10"
            >
              <img
                src="/huma/h4.jpeg"
                className="w-full h-[400px] md:h-[600px] rounded md:rounded object-cover shadow-2xl border-4 md:border-8 border-white"
                alt="Our Clinical Team"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. Our Team */}
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-12 md:py-16 bg-white pb-32 md:pb-40"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="mb-16 md:mb-24 space-y-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="text-3xl md:text-5xl font-extrabold text-primary tracking-tighter uppercase leading-none italic"
            >
              The Human Edge
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              className="lg:col-span-7 space-y-10 md:space-y-12"
            >
              <motion.p
                variants={fadeIn("up", 0.3)}
                className="text-xl md:text-4xl font-extrabold text-primary text-center lg:text-left leading-tight italic"
              >
                Our multidisciplinary team of neurologists, neuroradiologists, and rehabilitation specialists work together for you.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-center">
                {[
                  "Senior Neurologists (DM/MD)",
                  "Neuro-Rehabilitation Experts",
                  "Neuroradiology Specialists",
                  "Dedicated Nursing & Support Staff",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn("up", 0.1 * (i + 1))}
                    className="flex flex-col items-center gap-4 bg-slate-50 p-8 md:p-10 rounded md:rounded border border-slate-100 md:hover:bg-white md:hover:border-secondary transition-all shadow-sm group"
                  >
                    <HeartHandshake
                      size={40}
                      className="text-primary md:group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-black uppercase tracking-widest text-primary pt-2 md:pt-4 leading-none italic">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="lg:col-span-5"
            >
              <img
                src="/huma/h6.jpeg"
                className="w-full h-[250px] md:h-[350px] rounded object-cover shadow-2xl"
                alt="Our Neurology Team"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
