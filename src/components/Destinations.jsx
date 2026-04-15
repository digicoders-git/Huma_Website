const destinations = [
  { name: "India", flag: "🇮🇳" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Germany", flag: "🇩🇪" },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-3">
          Top Medical Destinations
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto mb-12 text-sm md:text-base font-medium">
          Our network spans the top medical tourism hubs worldwide - giving you
          the choice of cities, doctors and price.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 rounded-xl border border-blue-100 bg-[#f8fbff] hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform">
                {dest.flag}
              </span>
              <span className="font-bold text-primary group-hover:text-secondary">
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
