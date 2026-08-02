import ScrollReveal from "@/components/ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-950 text-white py-20 border-y border-slate-800/80 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content Block */}
        <div className="max-w-xl">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Your Trusted Logistics Partner
          </div>

          {/* MAIN HEADING - With Full Gradient */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Why Choose XCDGOC PVT LTD?
            </span>
          </h2>

          {/* SUBHEADING */}
          <h3 className="text-lg md:text-xl font-bold uppercase text-slate-200 mb-4 border-l-4 border-amber-500 pl-3">
            Experience. Dedication. Results.
          </h3>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            With over <span className="text-white font-semibold">08 years</span> of active service, XCDGOC PVT LTD has built a solid reputation for reliability, trust, and continuous performance. We work round the clock to keep your wheels moving and your business growing.
          </p>
        </div>

        {/* Right Side: Modern Glass Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
          
          {/* Card 1 */}
          <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 text-center">
            <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">
              08+
            </h4>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Years in Business
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 text-center">
            <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">
              500+
            </h4>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Happy Clients
            </p>
          </div>

          {/* Card 3 - Updated to 1M+ */}
          <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 text-center">
            <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">
              1M+
            </h4>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Loads Dispatched
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 text-center">
            <h4 className="text-3xl md:text-4xl font-black bg-gradient-to-br from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">
              24/7
            </h4>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Active Support
            </p>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}