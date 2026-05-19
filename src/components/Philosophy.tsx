import { Brain, Wifi, Clock, Moon } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full bg-white py-0 border-b border-primary/10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="lg:col-span-5 px-8 lg:px-12 py-12">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-6 block">The Philosophy</span>
            <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-[1.1]">
              A new standard for <br/>
              <span className="italic">evening recovery.</span>
            </h2>
            <p className="text-lg text-primary/80 mb-12 max-w-md leading-relaxed font-light">
              We believe that true performance begins with the quality of your rest. ELYS is designed to bridge the gap between high-intensity days and restorative nights.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 max-w-lg">
              <div className="flex flex-col gap-3 px-4 border-l border-primary/10">
                <Brain className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
                <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">Cognitive<br/>Overload</span>
              </div>
              <div className="flex flex-col gap-3 px-4 border-l border-primary/10">
                <Wifi className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
                <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">Digital<br/>Overstim</span>
              </div>
              <div className="flex flex-col gap-3 px-4 border-l border-primary/10">
                <Clock className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
                <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">Circadian<br/>Drift</span>
              </div>
              <div className="flex flex-col gap-3 px-4 border-l border-primary/10">
                <Moon className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
                <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">Sleep<br/>Latency</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bleed Image */}
          <div className="lg:col-span-7 relative min-h-[450px]">
            {/* The wrapper that bleeds to the right */}
            <div className="absolute top-0 bottom-[4px] right-[-100vw] left-0 overflow-hidden">
              <img 
                src="images/philo.png" 
                alt="Calm interior space"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
