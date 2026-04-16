import { useParams, Link } from "react-router-dom";
import { GraduationCap, MapPin, Users, Activity, CheckCircle2 } from "lucide-react";

const doctors = [
  {
    _id: "1",
    name: "Dr. Mo. Shakil",
    designation: "Senior Neurologist",
    speciality: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: 15,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
    about: "Dr. Mo. Shakil is a Senior Neurologist with 15+ years of expertise in stroke management, epilepsy, and movement disorders. Trained from premier medical institutions, she leads the neurology department at Huma Neurology Center with a patient-first approach.",
    expertise: ["Stroke & Cerebrovascular Disease", "Epilepsy & Seizure Disorders", "Parkinson's Disease", "Headache & Migraine", "Multiple Sclerosis", "Neuro-Immunology"],
    procedures: ["IV Thrombolysis for Stroke", "Video EEG Monitoring", "Botox for Migraine", "Lumbar Puncture", "EMG/NCV Studies", "Cognitive Assessment"],
    whyChoose: ["15+ years of clinical experience in neurology", "Pioneer in stroke thrombolysis in Lucknow", "Compassionate patient-centered care", "Regular training at international neurology conferences"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
  {
    _id: "2",
    name: "Dr. Arjun Mehta",
    designation: "Senior Neurosurgeon",
    speciality: "Neurosurgery",
    qualification: "MBBS, MS, MCh Neurosurgery",
    experience: 18,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    about: "Dr. Arjun Mehta is an expert neurosurgeon with 18 years of experience specializing in brain tumor surgery, spinal cord disorders, and minimally invasive neurosurgical procedures.",
    expertise: ["Brain Tumor Surgery", "Spinal Cord Surgery", "Minimally Invasive Neurosurgery", "Hydrocephalus Management", "Peripheral Nerve Surgery", "Skull Base Surgery"],
    procedures: ["Craniotomy", "Endoscopic Brain Surgery", "Spinal Fusion", "VP Shunt", "Microdiscectomy", "Deep Brain Stimulation"],
    whyChoose: ["18+ years of neurosurgical expertise", "Specialist in minimally invasive techniques", "Hundreds of successful brain surgeries", "Advanced training in skull base surgery"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
  {
    _id: "3",
    name: "Dr. Priya Sharma",
    designation: "Consultant Neurologist",
    speciality: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: 12,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    about: "Dr. Priya Sharma is a Consultant Neurologist specializing in epilepsy, headache disorders, and multiple sclerosis with extensive experience in advanced EEG diagnostics and immunotherapy.",
    expertise: ["Epilepsy & Drug-Resistant Seizures", "Multiple Sclerosis", "Headache & Migraine Clinic", "Autoimmune Neurology", "Neuro-Ophthalmology", "Pediatric Neurology"],
    procedures: ["Advanced EEG & Video EEG", "Epilepsy Surgery Evaluation", "MS Infusion Therapy", "Botox Injections", "Nerve Conduction Studies", "Neuropsychological Testing"],
    whyChoose: ["Specialist in drug-resistant epilepsy", "Expert in MS disease-modifying therapies", "12 years of dedicated neurology practice", "Trained in advanced neurodiagnostics"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
  {
    _id: "4",
    name: "Dr. Rakesh Verma",
    designation: "Neuro-Rehabilitation Specialist",
    speciality: "Neuro-Rehabilitation",
    qualification: "MBBS, MD, DNB Neurology",
    experience: 10,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope_171337-1566.jpg",
    about: "Dr. Rakesh Verma is a dedicated neuro-rehabilitation specialist helping stroke, Parkinson's, and spinal cord injury patients regain function and independence through structured recovery programs.",
    expertise: ["Post-Stroke Rehabilitation", "Parkinson's Rehabilitation", "Spinal Cord Injury Recovery", "Traumatic Brain Injury", "Neuromuscular Rehabilitation", "Speech & Swallowing Therapy"],
    procedures: ["Gait Training", "Constraint-Induced Movement Therapy", "Functional Electrical Stimulation", "Cognitive Rehabilitation", "Dysphagia Management", "Spasticity Management"],
    whyChoose: ["Dedicated neuro-rehabilitation expert", "Multidisciplinary team approach", "Personalized recovery programs", "Proven outcomes in stroke rehabilitation"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
  {
    _id: "5",
    name: "Dr. Sunita Agarwal",
    designation: "Cognitive Neurologist",
    speciality: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: 14,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    about: "Dr. Sunita Agarwal is an expert in memory disorders, dementia, and Alzheimer's disease with specialized training in cognitive neurology and neuropsychological assessment.",
    expertise: ["Alzheimer's Disease", "Vascular Dementia", "Mild Cognitive Impairment", "Frontotemporal Dementia", "Memory Disorders", "Behavioral Neurology"],
    procedures: ["Neuropsychological Testing", "Cognitive Assessment Battery", "PET Scan Evaluation", "CSF Biomarker Analysis", "Caregiver Counseling", "Memory Rehabilitation"],
    whyChoose: ["14 years in cognitive neurology", "Specialist in early Alzheimer's detection", "Comprehensive memory clinic services", "Compassionate dementia care approach"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
  {
    _id: "6",
    name: "Dr. Imran Khan",
    designation: "Interventional Neurologist",
    speciality: "Interventional Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: 16,
    city: "Lucknow",
    photo: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
    about: "Dr. Imran Khan is an interventional neurologist specializing in mechanical thrombectomy, carotid stenting, and endovascular treatment of cerebrovascular diseases.",
    expertise: ["Mechanical Thrombectomy", "Carotid Artery Stenting", "Cerebral Angiography", "AVM Embolization", "Intracranial Angioplasty", "Stroke Intervention"],
    procedures: ["Mechanical Thrombectomy", "Carotid Stenting", "Diagnostic Cerebral Angiography", "Coil Embolization", "Intracranial Stenting", "IV Thrombolysis"],
    whyChoose: ["16 years in interventional neurology", "Pioneer in mechanical thrombectomy in UP", "24/7 stroke intervention availability", "Hundreds of successful endovascular procedures"],
    hospital: { name: "Huma Neurology Center", city: "Lucknow", accreditation: ["NABH"] },
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d._id === id);

  if (!doctor) {
    return (
      <div className="py-40 text-center space-y-8">
        <h2 className="text-4xl font-black text-primary">Doctor Not Found</h2>
        <Link to="/doctors" className="text-secondary font-bold uppercase tracking-widest border-b-2 border-secondary pb-1 cursor-pointer">
          Back to Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-slate-50 pt-[10px]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-20" />
        <div className="relative w-full px-4 md:px-8 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-8 border-white shadow-2xl shrink-0 group">
              <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight">{doctor.name}</h1>
                <p className="text-secondary font-bold text-xl md:text-2xl">{doctor.designation}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-600">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <GraduationCap size={18} className="text-secondary" />
                  <span className="text-sm font-bold">{doctor.qualification}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin size={18} className="text-secondary" />
                  <span className="text-sm font-bold">{doctor.city}, India</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-lg cursor-pointer">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">About Doctor</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h2 className="text-xl font-bold text-primary uppercase italic">Experience & Expertise</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                With over {doctor.experience} years of experience, {doctor.name} has handled thousands of complex cases, providing world-class healthcare and clinical excellence.
              </p>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Users className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Experience</p>
                  <p className="text-sm font-bold text-primary">{doctor.experience} Years</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-2xl text-white shadow-xl space-y-4">
              <h4 className="text-xl font-bold uppercase italic text-secondary border-b border-white/10 pb-2">Expert Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {doctor.expertise.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-sm text-white font-medium leading-relaxed">• {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-secondary rounded-full" />
              <h2 className="text-xl font-bold text-primary uppercase italic">Procedures & Treatments</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doctor.procedures.map((proc, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-secondary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm text-slate-700">{proc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">Why Choose {doctor.name.split(" ").slice(1).join(" ")}</h3>
              </div>
              <div className="space-y-2">
                {doctor.whyChoose.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-secondary rounded-full" />
                <h3 className="text-lg font-bold text-primary uppercase italic">Hospital Affiliation</h3>
              </div>
              <div className="space-y-2">
                <p className="text-secondary font-bold">{doctor.hospital.name}</p>
                <p className="text-slate-500 text-sm">{doctor.hospital.city}, India</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {doctor.hospital.accreditation.map((acc, i) => (
                    <span key={i} className="bg-secondary text-white px-2 py-1 rounded text-xs font-bold uppercase">{acc}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetail;
