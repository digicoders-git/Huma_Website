import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Search,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  UserCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import PageHero from "../components/PageHero";
import ModernSelect from "../components/ModernSelect";
import PremiumLoader from "../components/PremiumLoader";
import { getHospitals } from "../apis/hospital";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/framerVariants";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityFilter, setCityFilter] = useState("All");
  const [specFilter, setSpecFilter] = useState("All");
  const [accFilter, setAccFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique values from hospitals data
  const citiesList = ["All", ...new Set(hospitals.map((h) => h.city))];
  const hospitalSpecialities = [
    "All",
    ...new Set(hospitals.flatMap((h) => h.specialities)),
  ];
  const accreditationList = [
    "All",
    ...new Set(hospitals.flatMap((h) => h.accreditations)),
  ];

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data = await getHospitals({ page: 1, limit: 50 });
        // Filter only active hospitals
        const activeHospitals = data.hospitals?.filter((h) => h.isActive) || [];
        setHospitals(activeHospitals);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, []);

  const filteredHospitals = hospitals.filter((hosp) => {
    const cityMatch = cityFilter === "All" || hosp.city === cityFilter;
    const specMatch =
      specFilter === "All" || hosp.specialities.includes(specFilter);
    const accMatch =
      accFilter === "All" || hosp.accreditations.includes(accFilter);
    return cityMatch && specMatch && accMatch;
  });

  if (loading) {
    return <PremiumLoader />;
  }

  const bannerSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
      title: "Medical Travel India",
      subtitle: "Affordable Medical Travel with Best Hospital Network",
      buttonLabel: "Explore Hospitals",
      buttonLink: "#listing-start",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* 1. Desktop Filter Section */}
      <section className="hidden lg:block sticky top-[56px] z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-end gap-6">
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="flex-1">
                <label className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Select City
                </label>
                <ModernSelect
                  options={citiesList.map((c) => ({
                    value: c,
                    label: c === "All" ? "All Cities" : c,
                  }))}
                  value={cityFilter}
                  onChange={setCityFilter}
                  placeholder="All Cities"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <label className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Select Speciality
                </label>
                <ModernSelect
                  options={hospitalSpecialities.map((s) => ({
                    value: s,
                    label: s === "All" ? "All Specialities" : s,
                  }))}
                  value={specFilter}
                  onChange={setSpecFilter}
                  placeholder="All Specialities"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <label className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  Select Accreditation
                </label>
                <ModernSelect
                  options={accreditationList.map((a) => ({
                    value: a,
                    label: a === "All" ? "All Accreditations" : a,
                  }))}
                  value={accFilter}
                  onChange={setAccFilter}
                  placeholder="All Accreditations"
                  className="w-full"
                />
              </div>
            </div>
            <div className="shrink-0 pb-1">
              <button
                onClick={() => {
                  setCityFilter("All");
                  setSpecFilter("All");
                  setAccFilter("All");
                }}
                className="px-8 py-4 bg-slate-50 hover:bg-secondary hover:text-white text-slate-400 font-bold uppercase tracking-widest text-[10px] transition-all rounded-2xl border border-slate-100"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile Filter Floating Trigger */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[200px] px-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full bg-primary text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[11px] border border-white/10"
        >
          <SlidersHorizontal size={18} className="text-secondary" /> Filter
        </button>
      </div>

      {/* 3. Mobile Filter Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          isMobileFilterOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileFilterOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 w-full bg-white rounded-t-[3rem] md:rounded-t-[3.5rem] p-8 pb-12 transition-transform duration-500 max-h-[90vh] overflow-y-auto ${
            isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-extrabold text-primary uppercase tracking-tighter italic">
              Filters
            </h3>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Location
              </label>
              <ModernSelect
                options={citiesList.map((c) => ({
                  value: c,
                  label: c === "All" ? "All Cities" : c,
                }))}
                value={cityFilter}
                onChange={setCityFilter}
                placeholder="All Cities"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Speciality
              </label>
              <ModernSelect
                options={hospitalSpecialities.map((s) => ({
                  value: s,
                  label: s === "All" ? "All Specialities" : s,
                }))}
                value={specFilter}
                onChange={setSpecFilter}
                placeholder="All Specialities"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                Accreditation
              </label>
              <ModernSelect
                options={accreditationList.map((a) => ({
                  value: a,
                  label: a === "All" ? "All Accreditations" : a,
                }))}
                value={accFilter}
                onChange={setAccFilter}
                placeholder="All Accreditations"
                className="w-full"
              />
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-5 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-[10px]"
            >
              Show Results
            </button>
          </div>
        </div>
      </div>

      {/* 4. Page Content */}
      <section id="listing-start" className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase italic">
                Verified <span className="text-secondary">Hospitals</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Internationally accredited facilities for quality healthcare.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <span className="text-secondary font-bold text-xl">
                {filteredHospitals.length}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase">
                Hospitals Found
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hosp, index) => (
              <Link
                to={`/hospital/${hosp._id}`}
                key={hosp._id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hosp.image}
                    alt={hosp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {hosp.accreditations.slice(0, 2).map((acc) => (
                      <span
                        key={acc}
                        className="bg-secondary text-white px-2 py-1 rounded-lg text-xs font-bold uppercase"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-secondary" />
                      <span className="text-xs font-bold text-slate-700">
                        {hosp.city}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                    {hosp.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 h-12 overflow-hidden">
                    {hosp.specialities.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-100"
                      >
                        {spec}
                      </span>
                    ))}
                    {hosp.specialities.length > 3 && (
                      <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-xs font-medium">
                        +{hosp.specialities.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      {/* <CheckCircle2 size={14} className="text-secondary" /> */}
                      <span className="text-xs font-bold text-slate-400 uppercase"></span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary group-hover:gap-3 transition-all">
                      <span className="text-xs font-bold uppercase">
                        View Details
                      </span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredHospitals.length === 0 && (
            <div className="py-20 text-center">
              <Search size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase">
                No hospitals found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
};

export default Hospitals;
