import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Blog & Knowledge Hub",
    subtitle: "Trusted Neurological Information & Latest Brain Health Updates",
    buttonLabel: "Read Articles",
    buttonLink: "#blogs",
  },
];

export const blogs = [
  {
    _id: "1",
    title: "Understanding Stroke: Warning Signs, Treatment & Recovery",
    category: "Stroke",
    date: "January 15, 2025",
    excerpt: "Learn to recognize the FAST signs of stroke and why every minute counts in getting emergency treatment to save brain cells.",
    introduction: "Stroke is a medical emergency where blood supply to part of the brain is suddenly cut off. Recognizing the warning signs early and acting fast can mean the difference between full recovery and permanent disability.",
    content: `<p>A stroke occurs when a blood vessel in the brain is blocked (ischemic stroke) or bursts (hemorrhagic stroke). The brain cells begin to die within minutes of losing blood supply.</p><h3>The FAST Signs of Stroke</h3><ul><li><strong>F - Face drooping:</strong> One side of the face droops or is numb</li><li><strong>A - Arm weakness:</strong> One arm is weak or numb</li><li><strong>S - Speech difficulty:</strong> Slurred or strange speech</li><li><strong>T - Time to call emergency:</strong> Call immediately if you see any signs</li></ul><h3>Treatment Options</h3><p>IV Thrombolysis (clot-busting drug) must be given within 4.5 hours of symptom onset. Mechanical Thrombectomy can be performed up to 24 hours in eligible patients.</p><h3>Recovery</h3><p>With early treatment and dedicated neuro-rehabilitation, many stroke patients regain significant function. The brain has remarkable plasticity and can rewire itself with proper therapy.</p>`,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Mo. Shakil",
  },
  {
    _id: "2",
    title: "Epilepsy Myths vs Facts: What Every Patient Should Know",
    category: "Epilepsy",
    date: "January 28, 2025",
    excerpt: "Busting common myths about epilepsy and seizures — from first aid to long-term management and living a normal life.",
    introduction: "Epilepsy affects over 50 million people worldwide, yet it remains one of the most misunderstood neurological conditions. Let us separate fact from fiction.",
    content: `<p>Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures. Despite being common, many myths surround this condition.</p><h3>Common Myths Busted</h3><ul><li><strong>Myth:</strong> Put something in the mouth during a seizure. <strong>Fact:</strong> Never do this — it can cause injury.</li><li><strong>Myth:</strong> Epilepsy means intellectual disability. <strong>Fact:</strong> Most people with epilepsy have normal intelligence.</li><li><strong>Myth:</strong> Epilepsy cannot be treated. <strong>Fact:</strong> 70% of patients become seizure-free with proper medication.</li></ul><h3>Modern Treatment</h3><p>Advanced EEG monitoring, new anti-seizure medications, and surgical options for drug-resistant epilepsy have transformed outcomes. Many patients live completely normal lives.</p>`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Priya Sharma",
  },
  {
    _id: "3",
    title: "Parkinson's Disease: Early Signs & Advanced Treatment Options",
    category: "Movement Disorders",
    date: "February 5, 2025",
    excerpt: "Early detection of Parkinson's disease is key. Discover the subtle early signs and the latest treatment advances including Deep Brain Stimulation.",
    introduction: "Parkinson's disease is a progressive neurological disorder affecting movement. While there is no cure, early diagnosis and treatment can significantly improve quality of life.",
    content: `<p>Parkinson's disease occurs when dopamine-producing neurons in the brain gradually break down. It affects about 1% of people over 60 years of age.</p><h3>Early Warning Signs</h3><ul><li>Resting tremor (shaking at rest)</li><li>Slowness of movement (bradykinesia)</li><li>Muscle stiffness and rigidity</li><li>Loss of smell</li><li>Sleep disturbances</li><li>Small handwriting (micrographia)</li></ul><h3>Treatment Advances</h3><p>Levodopa remains the gold standard medication. Deep Brain Stimulation (DBS) surgery offers remarkable improvement for advanced cases. Physiotherapy and speech therapy are essential components of care.</p>`,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Mo. Shakil",
  },
  {
    _id: "4",
    title: "Migraine vs Headache: How to Tell the Difference",
    category: "Headache",
    date: "February 18, 2025",
    excerpt: "Not all headaches are migraines. Understanding the difference helps in getting the right treatment and preventing chronic headache.",
    introduction: "Migraine is the 2nd leading cause of disability worldwide, yet it is frequently misdiagnosed as a simple headache. Knowing the difference is crucial for effective treatment.",
    content: `<p>Migraine is a complex neurological condition, not just a bad headache. It involves changes in brain chemistry and nerve pathways.</p><h3>Key Differences</h3><ul><li><strong>Migraine:</strong> Throbbing, usually one-sided, moderate to severe, lasts 4-72 hours</li><li><strong>Tension Headache:</strong> Pressing/tightening, both sides, mild to moderate</li><li><strong>Cluster Headache:</strong> Severe, around one eye, with tearing and nasal congestion</li></ul><h3>Migraine Warning Signs (Aura)</h3><p>About 25% of migraine patients experience aura — visual disturbances, numbness, or speech difficulty before the headache begins.</p><h3>Treatment</h3><p>Triptans for acute attacks, preventive medications like topiramate or propranolol, and Botox injections for chronic migraine are highly effective options.</p>`,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Priya Sharma",
  },
  {
    _id: "5",
    title: "Dementia & Alzheimer's: Early Detection Saves Quality of Life",
    category: "Memory Disorders",
    date: "March 3, 2025",
    excerpt: "Early diagnosis of Alzheimer's and dementia allows for better management, planning, and access to treatments that slow progression.",
    introduction: "Dementia is not a normal part of aging. Early detection through cognitive screening and biomarker testing can open doors to treatments that preserve memory and independence longer.",
    content: `<p>Alzheimer's disease accounts for 60-70% of dementia cases. The disease begins years before symptoms appear, making early detection critical.</p><h3>Early Warning Signs</h3><ul><li>Forgetting recently learned information</li><li>Difficulty planning or solving problems</li><li>Confusion with time or place</li><li>Trouble with familiar tasks</li><li>Changes in mood or personality</li></ul><h3>Diagnosis</h3><p>Neuropsychological testing, MRI brain, PET scan, and CSF biomarker analysis help in early and accurate diagnosis of Alzheimer's disease.</p><h3>Management</h3><p>While no cure exists, cholinesterase inhibitors, memantine, and new immunotherapy drugs can slow progression. Caregiver support and cognitive rehabilitation are equally important.</p>`,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Sunita Agarwal",
  },
  {
    _id: "6",
    title: "Multiple Sclerosis: Living Well with MS in 2025",
    category: "Multiple Sclerosis",
    date: "March 20, 2025",
    excerpt: "Modern disease-modifying therapies have transformed MS from a disabling condition to one where most patients can live active, fulfilling lives.",
    introduction: "Multiple Sclerosis is an autoimmune disease where the immune system attacks the protective myelin sheath of nerve fibers. With today's treatments, the outlook for MS patients has never been better.",
    content: `<p>MS affects over 2.8 million people worldwide. It typically presents in young adults aged 20-40 years, with women affected twice as often as men.</p><h3>Types of MS</h3><ul><li><strong>Relapsing-Remitting MS (RRMS):</strong> Most common — episodes of new symptoms followed by recovery</li><li><strong>Secondary Progressive MS:</strong> Gradual worsening after initial relapsing course</li><li><strong>Primary Progressive MS:</strong> Steady worsening from onset</li></ul><h3>Modern Treatment</h3><p>High-efficacy disease-modifying therapies (DMTs) like natalizumab, ocrelizumab, and cladribine can reduce relapses by over 70%. Early aggressive treatment leads to better long-term outcomes.</p><h3>Living with MS</h3><p>Regular exercise, vitamin D supplementation, stress management, and a healthy diet all contribute to better MS outcomes alongside medical treatment.</p>`,
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Priya Sharma",
  },
  {
    _id: "7",
    title: "Neuro-Rehabilitation: The Road to Recovery After Brain Injury",
    category: "Rehabilitation",
    date: "April 8, 2025",
    excerpt: "Structured neuro-rehabilitation after stroke, brain injury, or spinal cord damage can dramatically improve recovery outcomes.",
    introduction: "The brain has a remarkable ability to reorganize itself — a property called neuroplasticity. Neuro-rehabilitation harnesses this ability to help patients regain lost functions after neurological injury.",
    content: `<p>Neuro-rehabilitation is a specialized medical process that helps people recover from neurological injuries and diseases. It involves a multidisciplinary team working together toward recovery goals.</p><h3>Who Benefits from Neuro-Rehabilitation?</h3><ul><li>Stroke survivors</li><li>Traumatic brain injury patients</li><li>Spinal cord injury patients</li><li>Parkinson's disease patients</li><li>Multiple sclerosis patients</li></ul><h3>Components of Rehabilitation</h3><p>Physiotherapy for movement, occupational therapy for daily activities, speech therapy for communication and swallowing, and cognitive rehabilitation for memory and thinking are all key components.</p><h3>When to Start</h3><p>Rehabilitation should begin as early as medically stable — often within 24-48 hours of a stroke. Early intervention leads to significantly better outcomes.</p>`,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Rakesh Verma",
  },
  {
    _id: "8",
    title: "Peripheral Neuropathy: Causes, Symptoms & Treatment",
    category: "Neuropathy",
    date: "April 22, 2025",
    excerpt: "Numbness, tingling, and burning pain in hands and feet could be peripheral neuropathy. Early diagnosis prevents permanent nerve damage.",
    introduction: "Peripheral neuropathy affects the nerves outside the brain and spinal cord. Diabetes is the most common cause, but many other conditions can damage peripheral nerves.",
    content: `<p>Peripheral neuropathy results from damage to the peripheral nerves, causing weakness, numbness, and pain — usually in the hands and feet.</p><h3>Common Causes</h3><ul><li>Diabetes mellitus (most common)</li><li>Vitamin B12 deficiency</li><li>Autoimmune diseases (Guillain-Barré syndrome)</li><li>Alcohol abuse</li><li>Certain medications (chemotherapy)</li><li>Hereditary conditions (Charcot-Marie-Tooth disease)</li></ul><h3>Diagnosis</h3><p>EMG (Electromyography) and NCV (Nerve Conduction Velocity) studies are the gold standard tests for diagnosing and characterizing peripheral neuropathy.</p><h3>Treatment</h3><p>Treating the underlying cause, pain management with medications like pregabalin or duloxetine, and physiotherapy can significantly improve symptoms and quality of life.</p>`,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Imran Khan",
  },
  {
    _id: "9",
    title: "Brain Health Tips: 10 Ways to Keep Your Nervous System Strong",
    category: "Brain Health",
    date: "May 10, 2025",
    excerpt: "Simple daily habits that protect your brain, reduce stroke risk, and keep your nervous system functioning at its best throughout life.",
    introduction: "Your brain is the most complex organ in your body. Taking care of it through lifestyle choices can significantly reduce the risk of neurological diseases and cognitive decline.",
    content: `<p>Neurological health is not just about treating disease — it is about prevention and maintaining optimal brain function throughout life.</p><h3>10 Brain Health Tips</h3><ol><li><strong>Exercise regularly:</strong> 150 minutes of moderate aerobic exercise per week reduces stroke risk by 27%</li><li><strong>Control blood pressure:</strong> Hypertension is the #1 modifiable risk factor for stroke</li><li><strong>Manage diabetes:</strong> High blood sugar damages nerves and blood vessels</li><li><strong>Sleep 7-8 hours:</strong> Sleep is when the brain clears toxic waste products</li><li><strong>Stay mentally active:</strong> Reading, puzzles, and learning new skills build cognitive reserve</li><li><strong>Eat a Mediterranean diet:</strong> Rich in omega-3s, antioxidants, and healthy fats</li><li><strong>Quit smoking:</strong> Smoking doubles the risk of stroke</li><li><strong>Limit alcohol:</strong> Excessive alcohol damages brain cells and nerves</li><li><strong>Manage stress:</strong> Chronic stress accelerates brain aging</li><li><strong>Stay socially connected:</strong> Social engagement protects against dementia</li></ol>`,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Mo. Shakil",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogCategories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">Knowledge Hub</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredBlogs.length}</span>
              <span>articles found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-secondary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBlogs.map((blog) => (
                <Link
                  to={`/blogs/${blog._id}`}
                  key={blog._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={blog.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      alt={blog.title}
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Calendar size={12} className="text-secondary" />
                      <span>{blog.date}</span>
                    </div>
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{blog.excerpt}</p>
                    <div className="pt-2 flex items-center gap-2 text-secondary">
                      <span className="text-xs font-bold uppercase">Read More</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <BookOpen size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No articles found in this category.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
