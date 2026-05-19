

const LogoTicker = () => {
  return (
    <section className="w-full bg-white border-b border-primary/10 pt-6 pb-4 flex flex-col items-center justify-center">
      <p className="text-[12px] tracking-[0.3em] font-semibold text-primary/40 mb-6 uppercase">
        Built on science. Made for real life.
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28 opacity-40 grayscale">
        {/* Using simple text styling as approximations for the logos */}
        <span className="font-serif text-4xl tracking-tighter">Forbes</span>
        <span className="font-serif text-4xl uppercase tracking-widest">VOGUE</span>
        <span className="font-sans text-3xl font-bold uppercase tracking-tighter">HIGHSNOBIETY</span>
        <span className="font-sans text-2xl font-bold uppercase leading-none text-center">BUSINESS<br/>INSIDER</span>
        <span className="font-sans text-3xl font-black italic tracking-tighter">Men'sHealth</span>
      </div>
    </section>
  );
};

export default LogoTicker;
