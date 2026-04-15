const Partners = () => {
  const logos = [
    "Apollo",
    "Fortis",
    "Medanta",
    "Max Healthcare",
    "Artis",
    "Manipal",
  ];

  return (
    <section className="py-8 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-primary">
            Our Trusted Hospital Partners
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] mt-1 italic">
            Connecting you with excellence
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center opacity-90 gap-6 md:gap-12  transition-all">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 font-bold text-lg text-primary transition-colors italic tracking-tighter"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
