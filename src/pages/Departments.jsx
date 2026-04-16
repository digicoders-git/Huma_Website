import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

const bannerSlides = [
  {
    image: "/huma/h3.jpeg",
    title: "Medical Departments",
    subtitle: "Specialized Neurological Departments — Expert Care for Every Brain & Nervous System Condition",
    buttonLabel: "Explore Departments",
    buttonLink: "#departments",
  },
];

const departments = [
  {
    id: "1",
    name: "General Neurology",
    shortDesc: "Comprehensive diagnosis & treatment for all neurological conditions.",
    image: "/huma/h1.jpeg",
    color: "from-blue-600 to-blue-800",
    icon: "🧠",
    about: "Our General Neurology department is the backbone of Huma Neurology Center. Led by senior DM/MD Neurologists, we evaluate and manage the full spectrum of neurological disorders with precision and compassion.",
    conditions: ["Stroke & TIA", "Epilepsy & Seizures", "Headache & Migraine", "Dizziness & Vertigo", "Neuropathy", "Encephalitis & Meningitis"],
    services: ["Comprehensive Neuro OPD", "Inpatient Neurology Care", "Telemedicine Consultation", "Second Opinion Services"],
    head: "Dr. Mo. Shakil",
    qualification: "MBBS, MD, DM Neurology",
  },
  {
    id: "2",
    name: "Stroke & Cerebrovascular Unit",
    shortDesc: "24/7 acute stroke care with thrombolysis & thrombectomy.",
    image: "/huma/h2.jpeg",
    color: "from-red-600 to-red-800",
    icon: "⚡",
    about: "Our dedicated Stroke Unit operates 24 hours a day, 7 days a week. We provide the fastest possible response to acute stroke with IV thrombolysis and coordination for mechanical thrombectomy — saving brain cells every minute.",
    conditions: ["Ischemic Stroke", "Hemorrhagic Stroke", "TIA (Mini Stroke)", "Carotid Artery Disease", "Cerebral Venous Thrombosis", "Subarachnoid Hemorrhage"],
    services: ["24/7 Stroke Emergency", "IV Thrombolysis", "Mechanical Thrombectomy", "Neuro-ICU Monitoring", "Post-Stroke Rehabilitation"],
    head: "Dr. Imran Khan",
    qualification: "MBBS, MD, DM Neurology (Interventional)",
  },
  {
    id: "3",
    name: "Epilepsy & EEG Department",
    shortDesc: "Advanced EEG monitoring & comprehensive epilepsy management.",
    image: "/huma/h3.jpeg",
    color: "from-purple-600 to-purple-800",
    icon: "📊",
    about: "Our Epilepsy Department offers state-of-the-art video-EEG monitoring, drug-resistant epilepsy evaluation, and personalized seizure management programs. We help patients achieve seizure freedom and live normal lives.",
    conditions: ["Generalized Epilepsy", "Focal Epilepsy", "Drug-Resistant Epilepsy", "Absence Seizures", "Juvenile Myoclonic Epilepsy", "Status Epilepticus"],
    services: ["Routine & Ambulatory EEG", "Video-EEG Monitoring", "Epilepsy Surgery Evaluation", "Anti-Seizure Medication Management", "Ketogenic Diet Clinic"],
    head: "Dr. Priya Sharma",
    qualification: "MBBS, MD, DM Neurology",
  },
  {
    id: "4",
    name: "Movement Disorders Clinic",
    shortDesc: "Specialized care for Parkinson's, tremors & dystonia.",
    image: "/huma/h4.jpeg",
    color: "from-green-600 to-green-800",
    icon: "🤲",
    about: "Our Movement Disorders Clinic provides expert evaluation and management of Parkinson's disease and all related movement disorders. We offer the latest pharmacological treatments and evaluate patients for Deep Brain Stimulation (DBS) surgery.",
    conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Huntington's Disease", "Ataxia", "Restless Legs Syndrome"],
    services: ["Parkinson's OPD", "DBS Evaluation", "Botox for Dystonia & Tremor", "Gait Analysis", "Parkinson's Rehabilitation"],
    head: "Dr. Mo. Shakil",
    qualification: "MBBS, MD, DM Neurology",
  },
  {
    id: "5",
    name: "Memory & Cognitive Neurology",
    shortDesc: "Early Alzheimer's detection & dementia management.",
    image: "/huma/h5.jpeg",
    color: "from-amber-600 to-amber-800",
    icon: "💭",
    about: "Our Memory Clinic specializes in the early detection and comprehensive management of Alzheimer's disease, vascular dementia, and other cognitive disorders. We use advanced neuropsychological testing and biomarker analysis for accurate diagnosis.",
    conditions: ["Alzheimer's Disease", "Vascular Dementia", "Frontotemporal Dementia", "Mild Cognitive Impairment", "Lewy Body Dementia", "Normal Pressure Hydrocephalus"],
    services: ["Cognitive Assessment Battery", "Neuropsychological Testing", "MRI Brain Volumetry", "Caregiver Counseling", "Cognitive Rehabilitation"],
    head: "Dr. Sunita Agarwal",
    qualification: "MBBS, MD, DM Neurology",
  },
  {
    id: "6",
    name: "Neuro-Rehabilitation Department",
    shortDesc: "Structured recovery for stroke, spinal & brain injury patients.",
    image: "/huma/h6.jpeg",
    color: "from-teal-600 to-teal-800",
    icon: "🏃",
    about: "Our Neuro-Rehabilitation Department provides comprehensive, multidisciplinary recovery programs for patients with neurological injuries. We harness the brain's neuroplasticity to help patients regain maximum function and independence.",
    conditions: ["Post-Stroke Rehabilitation", "Spinal Cord Injury", "Traumatic Brain Injury", "Parkinson's Rehabilitation", "MS Rehabilitation", "Neuromuscular Disease"],
    services: ["Physiotherapy", "Speech & Swallowing Therapy", "Occupational Therapy", "Cognitive Rehabilitation", "Functional Electrical Stimulation"],
    head: "Dr. Rakesh Verma",
    qualification: "MBBS, MD, DNB Neurology",
  },
  {
    id: "7",
    name: "Headache & Pain Clinic",
    shortDesc: "Expert management of migraine, cluster & chronic headache.",
    image: "/huma/h7.jpeg",
    color: "from-rose-600 to-rose-800",
    icon: "💊",
    about: "Our dedicated Headache Clinic offers specialized evaluation and treatment for all types of headache disorders. From chronic migraine to rare headache syndromes, we provide evidence-based treatments including Botox therapy and CGRP antagonists.",
    conditions: ["Chronic Migraine", "Cluster Headache", "Tension-Type Headache", "Medication Overuse Headache", "New Daily Persistent Headache", "Trigeminal Neuralgia"],
    services: ["Headache Diary Analysis", "Botox for Chronic Migraine", "CGRP Antagonist Therapy", "Nerve Block Procedures", "Preventive Medication Management"],
    head: "Dr. Priya Sharma",
    qualification: "MBBS, MD, DM Neurology",
  },
  {
    id: "8",
    name: "Neuromuscular & EMG Lab",
    shortDesc: "EMG/NCV testing for nerve & muscle disease diagnosis.",
    image: "/huma/h8.jpeg",
    color: "from-indigo-600 to-indigo-800",
    icon: "⚙️",
    about: "Our Neuromuscular Department and EMG Lab provides advanced electrodiagnostic testing for peripheral nerve and muscle diseases. Our state-of-the-art EMG/NCV lab delivers accurate, rapid results for complex neuromuscular conditions.",
    conditions: ["Peripheral Neuropathy", "Guillain-Barré Syndrome", "Myasthenia Gravis", "Motor Neuron Disease (ALS)", "Muscular Dystrophy", "Charcot-Marie-Tooth Disease"],
    services: ["EMG (Electromyography)", "Nerve Conduction Studies (NCV)", "Repetitive Nerve Stimulation", "Single Fiber EMG", "IVIG & Plasma Exchange"],
    head: "Dr. Imran Khan",
    qualification: "MBBS, MD, DM Neurology",
  },
];

const Departments = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Intro */}
      <section className="py-10 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <h4 className="text-secondary font-bold text-[12px] uppercase tracking-[0.3em]">Our Specialised Units</h4>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary uppercase italic tracking-tight">
            Departments of Excellence
          </h2>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            Each department at Huma Neurology Center is led by a dedicated specialist — ensuring focused, expert-level care for every neurological condition.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </section>

      {/* Departments Grid */}
      <section id="departments" className="py-12 px-4 md:px-8 bg-white">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              variants={fadeIn("up", 0.05 * idx)}
              onClick={() => setSelected(dept)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-[280px]"
            >
              <img
                src={dept.image}
                alt={dept.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-75 group-hover:opacity-90 transition-opacity duration-500`} />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="text-3xl mb-2">{dept.icon}</div>
                <div className="w-8 h-0.5 bg-white/60 rounded-full mb-2" />
                <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">{dept.name}</h3>
                <p className="text-white/70 text-xs font-medium mt-1 line-clamp-2">{dept.shortDesc}</p>
                <div className="flex items-center gap-1 mt-3 text-white/80 text-xs font-bold uppercase tracking-widest">
                  View Details <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Department Detail Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Side */}
              <div className="w-full md:w-2/5 relative h-[220px] md:h-auto shrink-0">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${selected.color} opacity-60`} />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl mb-2">{selected.icon}</div>
                  <h2 className="text-xl font-black uppercase leading-tight">{selected.name}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-full text-white md:hidden"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-primary transition-colors hidden md:block"
                >
                  <X size={24} />
                </button>

                <div className="space-y-6">
                  {/* Head */}
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department Head</p>
                      <p className="font-bold text-primary text-sm">{selected.head} <span className="text-slate-400 font-medium">— {selected.qualification}</span></p>
                    </div>
                  </div>

                  {/* About */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> About Department
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{selected.about}</p>
                  </div>

                  {/* Conditions */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> Conditions Treated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.conditions.map((c, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-secondary rounded-full" /> Services Offered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.services.map((s, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-secondary shrink-0" />
                          <span className="text-sm text-slate-600 font-medium">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl text-xs uppercase tracking-widest transition-all"
                    >
                      Book Appointment <ArrowRight size={14} />
                    </Link>
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
      `}} />
    </div>
  );
};

export default Departments;
