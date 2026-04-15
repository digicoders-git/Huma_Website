import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Neurological Specialities",
    subtitle:
      "Expert diagnosis and treatment for brain, spine & nervous system disorders — by senior DM/MD Neurologists at Huma Neurology Center.",
    buttonLabel: "Explore Specialities",
    buttonLink: "#treatments-start",
  },
];

export const specialities = [
  {
    _id: "1",
    title: "Stroke & Cerebrovascular Disease",
    description: "Rapid diagnosis and treatment of ischemic and hemorrhagic stroke with 24/7 acute stroke unit, IV thrombolysis, and mechanical thrombectomy.",
    whatIs: "Stroke occurs when blood supply to part of the brain is cut off. Our dedicated stroke unit provides round-the-clock care with the latest interventional techniques to minimize brain damage and maximize recovery.",
    whenRecommended: ["Sudden weakness", "Speech difficulty", "Vision loss", "Severe headache", "Loss of balance"],
    costRange: "Contact for Price",
    image: "/huma/h1.jpeg",
  },
  {
    _id: "2",
    title: "Epilepsy & Seizure Disorders",
    description: "Comprehensive epilepsy management with advanced video-EEG monitoring, drug-resistant epilepsy evaluation, and personalized treatment plans.",
    whatIs: "Epilepsy is a neurological disorder marked by recurrent seizures. Our epilepsy clinic offers advanced EEG diagnostics, medication management, and surgical evaluation for drug-resistant cases.",
    whenRecommended: ["Recurrent seizures", "Uncontrolled epilepsy", "Absence spells", "Convulsions", "Drug-resistant cases"],
    costRange: "Contact for Price",
    image: "/huma/h2.jpeg",
  },
  {
    _id: "3",
    title: "Parkinson's & Movement Disorders",
    description: "Specialized movement disorder clinic for Parkinson's disease, tremors, dystonia, and ataxia with individualized care and rehabilitation.",
    whatIs: "Movement disorders affect the ability to produce and control body movements. Our specialists provide accurate diagnosis and advanced treatment including medication optimization and deep brain stimulation evaluation.",
    whenRecommended: ["Tremors", "Stiffness", "Slow movement", "Balance problems", "Involuntary movements"],
    costRange: "Contact for Price",
    image: "/huma/h3.jpeg",
  },
  {
    _id: "4",
    title: "Headache & Migraine Clinic",
    description: "Expert evaluation and management of chronic migraine, cluster headaches, and other primary and secondary headache disorders.",
    whatIs: "Migraine is a complex neurological condition causing severe recurring headaches. Our headache clinic offers preventive and acute treatment strategies, Botox therapy, and lifestyle management programs.",
    whenRecommended: ["Chronic headache", "Migraine attacks", "Cluster headache", "Thunderclap headache", "Medication overuse"],
    costRange: "Contact for Price",
    image: "/huma/h4.jpeg",
  },
  {
    _id: "5",
    title: "Memory & Dementia Clinic",
    description: "Cognitive assessment, early Alzheimer's detection, and comprehensive dementia management with neuropsychological testing.",
    whatIs: "Dementia is a syndrome involving deterioration in memory, thinking, and behavior. Our memory clinic provides detailed cognitive evaluation, biomarker testing, and structured care plans for patients and families.",
    whenRecommended: ["Memory loss", "Confusion", "Behavioral changes", "Alzheimer's", "Cognitive decline"],
    costRange: "Contact for Price",
    image: "/huma/h5.jpeg",
  },
  {
    _id: "6",
    title: "Multiple Sclerosis (MS)",
    description: "Diagnosis and long-term management of multiple sclerosis and other demyelinating diseases with disease-modifying therapies.",
    whatIs: "Multiple sclerosis is an autoimmune disease affecting the central nervous system. Our MS clinic offers MRI-based diagnosis, infusion therapies, and multidisciplinary rehabilitation to slow disease progression.",
    whenRecommended: ["Vision problems", "Numbness", "Weakness", "Balance issues", "Fatigue"],
    costRange: "Contact for Price",
    image: "/huma/h6.jpeg",
  },
  {
    _id: "7",
    title: "Neuro-Rehabilitation",
    description: "Structured recovery programs for stroke survivors, spinal cord injury, traumatic brain injury, and neuromuscular disease patients.",
    whatIs: "Neuro-rehabilitation focuses on restoring function and improving quality of life after neurological injury. Our team includes neurologists, physiotherapists, speech therapists, and occupational therapists.",
    whenRecommended: ["Post-stroke recovery", "Spinal cord injury", "Brain injury", "Weakness", "Speech problems"],
    costRange: "Contact for Price",
    image: "/huma/h7.jpeg",
  },
  {
    _id: "8",
    title: "Neuropathy & Nerve Disorders",
    description: "Diagnosis and treatment of peripheral neuropathy, Guillain-Barré syndrome, and neuromuscular diseases with EMG/NCV testing.",
    whatIs: "Peripheral neuropathy involves damage to the peripheral nerves causing weakness, numbness, and pain. Our lab offers advanced EMG/NCV studies for accurate diagnosis and targeted treatment.",
    whenRecommended: ["Numbness", "Tingling", "Burning pain", "Muscle weakness", "Loss of reflexes"],
    costRange: "Contact for Price",
    image: "/huma/h8.jpeg",
  },
  {
    _id: "9",
    title: "Spine & Spinal Cord Disorders",
    description: "Expert management of cervical and lumbar spine disorders, myelopathy, and spinal cord diseases with advanced neuroimaging.",
    whatIs: "Spinal disorders can cause significant pain, weakness, and disability. Our spine neurology team provides comprehensive evaluation and non-surgical management for disc disease, myelopathy, and spinal cord conditions.",
    whenRecommended: ["Back pain", "Neck pain", "Radiating pain", "Weakness in limbs", "Bladder dysfunction"],
    costRange: "Contact for Price",
    image: "/huma/h9.jpeg",
  },
];

const Specialities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpec, setSelectedSpec] = useState(null);

  const filtered = specialities.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter italic">
              Neurological Specialities
            </h2>
            <p className="text-slate-500 font-medium text-base max-w-2xl mx-auto">
              Expert care for the full spectrum of brain, spine, and nervous system conditions — all under one roof at Huma Neurology Center.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-slate-400 group-focus-within:text-secondary mb-1 transition-colors" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search neurological conditions (e.g. Stroke, Epilepsy, Parkinson's...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded focus:border-secondary transition-all outline-none shadow-sm hover:shadow-md text-primary font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((spec, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={spec._id}
                onClick={() => setSelectedSpec(spec)}
                className="group relative h-[350px] rounded overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left transition-transform duration-500">
                  <div className="space-y-3">
                    <div className="w-12 h-1 bg-secondary rounded-full" />
                    <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight line-clamp-1">
                      {spec.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium line-clamp-2">
                      {spec.description}
                    </p>
                    <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em]">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary italic uppercase">No treatments found</h3>
              <p className="text-slate-500">Try adjusting your search query</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedSpec && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpec(null)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                <img src={selectedSpec.image} alt={selectedSpec.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white md:hidden cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="absolute top-8 right-8 p-2 text-slate-400 hover:text-primary transition-colors hidden md:block cursor-pointer"
                >
                  <X size={28} />
                </button>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">Speciality Detail</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tighter leading-none">
                      {selectedSpec.title}
                    </h2>
                  </div>
                  <div className="space-y-6 text-left">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" /> About Treatment
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{selectedSpec.description}</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" /> Detailed Overview
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{selectedSpec.whatIs}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" /> Recommended When
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSpec.whenRecommended.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Cost</p>
                        <p className="text-2xl font-black text-primary italic">{selectedSpec.costRange}</p>
                      </div>
                      <Link to="/contact" className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-secondary transition-all cursor-pointer">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}} />
    </div>
  );
};

export default Specialities;
