import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Search, ArrowRight, Calendar } from "lucide-react";
import PageHero from "../components/PageHero";

const bannerSlides = [
  {
    image: "/huma/h7.jpeg",
    title: "Our Expert Neurologists",
    subtitle: "Meet our team of senior DM/MD Neurology specialists dedicated to your brain, spine & nervous system health.",
    buttonLabel: "Explore Doctors",
    buttonLink: "#doctors",
  },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchDoctors = async () => {
    try {
      const res = await fetch(`${API_URL}/doctor`);
      const data = await res.json();
      if (data.success) {
        // Map backend structure to fit frontend UI perfectly
        const mapped = (data.data || []).filter(d => d.isActive).map(d => {
          // Process schedule to summarize availability
          let availDays = "Mon - Sat";
          let availTime = "10:00 AM - 02:00 PM";
          
          if (d.schedule) {
            const activeDays = Object.keys(d.schedule).filter(day => d.schedule[day].checked);
            if (activeDays.length > 0) {
              const firstDay = activeDays[0];
              const lastDay = activeDays[activeDays.length - 1];
              availDays = activeDays.length === 1 ? firstDay : `${firstDay} - ${lastDay}`;
              availTime = `${d.schedule[firstDay].start} - ${d.schedule[firstDay].end}`;
            }
          }

          // Calculate experience from startDate
          let exp = 10;
          if (d.startDate) {
            exp = new Date().getFullYear() - new Date(d.startDate).getFullYear();
            if (exp < 1) exp = 1;
          }
          if (d.experience) exp = d.experience;

          return {
            ...d,
            _id: d._id,
            name: d.fullName,
            speciality: d.department || "Neurology",
            qualification: d.specialization || "MD, DM Neurology",
            experience: exp,
            city: "Lucknow", // Default since it's a local center
            photo: d.avatar ? `${API_URL.replace('/api', '')}${d.avatar}` : "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            availability: {
              days: availDays,
              time: availTime,
              status: d.status?.toLowerCase() === "available" ? "available" : "busy"
            }
          };
        });
        setDoctors(mapped);
      }
    } catch (err) {
      console.error("Error fetching doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const specialitiesList = ["All", ...new Set(doctors.map((d) => d.speciality))];

  const filteredDoctors =
    activeFilter === "All"
      ? doctors
      : doctors.filter((doc) => doc.speciality === activeFilter);

  return (
    <div className="bg-white">
      <PageHero slides={bannerSlides} />

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary uppercase italic">Our Specialists</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-bold text-secondary">{filteredDoctors.length}</span>
              <span>doctors found</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {specialitiesList.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveFilter(spec)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === spec
                    ? "bg-secondary text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-secondary"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section id="doctors" className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
             <div className="py-20 text-center">
                <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Medical Staff...</p>
             </div>
          ) : filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 rounded text-xs font-bold">
                      {doctor.city}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-slate-500 uppercase font-medium">
                        {doctor.speciality}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        {doctor.qualification}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center">
                        <Clock size={12} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">Experience</p>
                        <p className="text-sm font-bold text-primary">{doctor.experience}+ Yrs</p>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="border-t border-slate-100 pt-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Availability</p>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          doctor.availability.status === "available"
                            ? "bg-green-50 text-green-600 border border-green-200"
                            : doctor.availability.status === "busy"
                            ? "bg-amber-50 text-amber-600 border border-amber-200"
                            : "bg-red-50 text-red-600 border border-red-200"
                        }`}>
                          {doctor.availability.status === "available" ? "● Available" : doctor.availability.status === "busy" ? "● Busy" : "● Emergency"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={11} className="text-secondary shrink-0" />
                        <span className="text-xs font-semibold text-slate-600">{doctor.availability.days}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={11} className="text-secondary shrink-0" />
                        <span className="text-xs font-semibold text-slate-600">{doctor.availability.time}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/doctor/${doctor._id}`}
                        className="w-full bg-primary text-white text-center py-2 rounded-lg font-bold text-sm uppercase hover:bg-secondary transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        View Profile <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Search size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-lg font-bold text-primary uppercase italic">
                No doctors found matching your criteria.
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
