export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-900 text-white py-20 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-2">Why Choose XCDGOC PVT LTD?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">Experience. Dedication. Results.</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            With over 08 years of active service, XCDGOC PVT LTD has built a reputation for reliability, trust, and results. We work round the clock to keep your wheels moving and your business growing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full lg:w-auto text-center">
          <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-1">08+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Years in Business</p>
          </div>
          <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-1">500+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Happy Clients</p>
          </div>
          <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-1">50K+</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Loads Dispatched</p>
          </div>
          <div className="bg-zinc-950/50 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-1">24/7</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wide">Active Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}