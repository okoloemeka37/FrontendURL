'use client'

import HeaderComponents from "../components/HeaderComponents";


export default function FeaturesPage() {
  return (
    <> 
    <div className="min-h-screen text-slate-50 relative overflow-hidden">
       <HeaderComponents />
      {/* Ambient backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
            Product Capabilities
          </h2>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Supercharge your links.
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg font-light">
            Everything you need to share, track, and optimize your web addresses in a clean, high-performance interface.
          </p>
        </div>

        {/* --- SECTION 1: AVAILABLE NOW --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Active Features (Available Now)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1: Shortener */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all group">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">Instant Shortening</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transform long, cluttered destination links into beautiful, ultra-short redirect links with sub-millisecond redirect times.
              </p>
            </div>

            {/* Feature 2: QR Generator */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all group">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-2">Dynamic QR Codes</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instantly generate a matching high-quality QR code alongside your short link. Download it with a single click for print or digital campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: ROADMAP / COMING SOON --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Future Roadmap (Planned & Coming Soon)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Roadmap item 1: Dashboard & Analytics */}
            <div className="bg-slate-900/20 border border-slate-800/40 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-indigo-500/20">
                In Progress
              </div>
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12-8.878V18a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6.878a2 2 0 01.607-1.414l4.134-4.134a2 2 0 012.828 0l1.414 1.414a2 2 0 01.025 2.828z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-slate-200 mb-2">Analytical Dashboard</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Log in securely to view real-time metrics. Track total link click-throughs, custom active periods, and manage your history of generated links.
              </p>
            </div>

            {/* Roadmap item 2: Geo & Device Tracking */}
            <div className="bg-slate-900/20 border border-slate-800/40 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-slate-800/80 text-slate-400 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-slate-700/20">
                Planned
              </div>
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-slate-200 mb-2">Audience Demographics</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Break down clicks by geographic region, device operating system (iOS, Android, Desktop), and referral sources to know exactly who is clicking.
              </p>
            </div>

            {/* Roadmap item 3: Custom Slugs */}
            <div className="bg-slate-900/20 border border-slate-800/40 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-slate-800/80 text-slate-400 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-slate-700/20">
                Planned
              </div>
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-slate-200 mb-2">Custom Branded Aliases</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Replace random slugs with customizable text (e.g., <code className="text-cyan-300">/promo2026</code>) to build trust and increase click-through rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}