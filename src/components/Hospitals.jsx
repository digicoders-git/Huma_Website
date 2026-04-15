const hospitalGroups = [
  {
    country: "India",
    flag: "🇮🇳",
    hospitals: [
      {
        name: "Medanta, Gurgaon",
        img: "https://images.unsplash.com/photo-1587350849491-9c606c4f923e?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Indraprastha Apollo, New Delhi",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Kokilaben, Mumbai",
        img: "https://images.unsplash.com/photo-1586773860418-d373a14e9f90?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Apollo, Chennai",
        img: "https://images.unsplash.com/photo-1538108197017-c1a4668.jpg?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    hospitals: [
      {
        name: "Medical Park, Istanbul",
        img: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Memorial Hospitals, Istanbul",
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    hospitals: [
      {
        name: "Burjeel, Abu Dhabi",
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Saudi German, Dubai",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    hospitals: [
      {
        name: "Bumrungrad, Bangkok",
        img: "https://images.unsplash.com/photo-1504813184591-01574ff81cbb?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Bangkok Hospital, Bangkok",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    hospitals: [
      {
        name: "Charite, Berlin",
        img: "https://images.unsplash.com/photo-1511174511562-5f7f185854c8?auto=format&fit=crop&q=80&w=600",
      },
      {
        name: "Heidelberg University, Heidelberg",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
];

const Hospitals = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-primary">
            Network of Top Hospitals
          </h2>
          <p className="text-slate-500 max-w-4xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            We rigorously vet hospitals before adding to our panel, ensuring you
            receive the best care. We have in-depth knowledge of hospitals in
            every country we operate in.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {hospitalGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#f0f7ff] rounded-2xl p-6 w-full max-w-[500px] border border-blue-50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-primary">
                  {group.country}
                </h3>
                <span className="text-3xl">{group.flag}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.hospitals.map((hosp, hIdx) => (
                  <div key={hIdx} className="space-y-3">
                    <div className="h-32 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={hosp.img}
                        alt={hosp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-bold text-primary px-1">
                      {hosp.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
