'use client'

import { useEffect, useRef, useState } from "react";


export default function Home() {
  const clipRef = useRef(null);
  const alertRef=useRef(null);

  const [clip, setClip] = useState('')
  const [shortURL, setShortURL] = useState('')
  const [error, setError] = useState({clip:''})

async function getClip() {
  const gtClip=await navigator.clipboard.readText()
    setClip(gtClip);

   clipRef.current.value=gtClip;
  }

  async function copyShort(params) {
    await navigator.clipboard.writeText(shortURL);
    alertRef.current.classList.toggle('hidden');

    setTimeout(() => {
      alertRef.current.classList.toggle('hidden');
    }, 3000);
  }
  
const clipSubmit=async() => {
  setError({clip:''});
  if (clip.length ===0) {
    setError(prev=>({...prev,clip:"This Field Is Required"}))
  }else{
      try {
         const resp=await  fetch('http://localhost:5000/api/user/postClip',{method:"POST",headers: {"Content-Type": "application/json",},body:JSON.stringify({clip})})
          const data=await resp.json()
         if (!resp.ok) {
            setError(data)
         }else{setShortURL(data.shortURL)}

        } catch (error) {
        console.log(error)
      }
  }
}

  return (
 
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      
       <p ref={alertRef} className="fixed hidden bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 backdrop-blur-md animate-fade-in-up"><span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>Link successfully copied!</p>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            <span>🔗</span>
            <span>LinkCraft</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-slate-200 transition-colors">Features</a>
            <a href="#api" className="hover:text-slate-200 transition-colors">API</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-100 px-4 py-2 rounded-lg transition-all">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Main Section */}
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
              Shorten your links, <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                expand your reach.
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto font-light">
              Create clean, memorable, and trackable short URLs in seconds. Built for speed and security.
            </p>
          </div>

          {/* Generator Form Card */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-2xl backdrop-blur-xl text-left space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="url" onFocus={()=>getClip()} ref={clipRef} onChange={(e)=>{setClip(e.target.value)}}
                  placeholder="Paste your long link here (e.g., https://example.com/deep/path)"
                  required
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
                />
              </div>
              <p onClick={clipSubmit}
                className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all text-sm shrink-0 flex items-center justify-center cursor-pointer"
              >
                Shorten URL
              </p>
            </div>

              <p className="text-red-600">{error['clip']}</p>

            {/* Results Output Placeholder (Toggle/render with your own logic) */}
            <div className="pt-4 border-t border-slate-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Your Shortened Link
              </label>
              <div className="flex items-center justify-between bg-slate-950/50 border border-slate-800 rounded-xl p-3 pl-4">
                <span className="text-cyan-400 font-medium break-all text-sm">
                  {shortURL}
                </span>
                <p onClick={copyShort}
                  className="ml-4 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all shrink-0 cursor-pointer"
                >
                  Copy Link
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats / Trust Badges */}
          <div className="flex items-center justify-center space-x-8 text-xs font-medium uppercase tracking-widest text-slate-500 pt-4">
            <div>⚡ Fast Redirection</div>
            <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
            <div>📊 Real-time Analytics</div>
            <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
            <div>🔒 Fully Encrypted</div>
          </div>
        </div>

       
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-600 text-xs py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; LinkCraft Inc. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  
  );
}
