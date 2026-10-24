export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Northstar Realty</span>
        <a href="#cta" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
          Browse Listings
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-orange-600 font-semibold mb-4">Buy · Sell · Invest</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Find a home you’ll love coming back to</h1>
        <p className="text-lg text-slate-600 mb-10">Local experts guiding you through every step of buying or selling in today’s market.</p>
        <a href="#cta" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
          Talk to an Agent
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
          <p className="text-slate-600">Neighborhood knowledge you can’t get from an app.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Negotiation Support</h3>
          <p className="text-slate-600">We fight for the best price on your behalf.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Full-Service Closing</h3>
          <p className="text-slate-600">From offer to keys, we handle the paperwork.</p>
        </div>
      </section>

      <section id="cta" className="bg-orange-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to make your move?</h2>
        <p className="mb-8 text-orange-100">Free home valuation in under 24 hours.</p>
        <a href="#" className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Talk to an Agent
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Northstar Realty. All rights reserved.
      </footer>
    </div>
  )
}
