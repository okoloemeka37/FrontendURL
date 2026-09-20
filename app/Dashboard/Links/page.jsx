'use client'
import Link from "next/link";

import { useAuth } from "../../context/AuthContext";
import getLink from "../../Functions/Admin/dashboard";
import { encryptId } from "../../../lib/hashid";
import { useEffect, useState,useRef} from "react";

export function humanDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function LinksPage() {

  
        const { userCred, logout,Frontend_Url } = useAuth();

        const [links, setlinks] = useState([]);
      
        const [error, seterror] = useState('')

          useEffect(() => {
        async function rf() {
        let data= await getLink()

        if (data.status==200) {
         
           setlinks(data.data.links)
       
        }else{seterror(data.message)}
       
        }
        rf()
     }, [])

       const alertRef=useRef(null);

     
async function copyShort(URL) {

    await navigator.clipboard.writeText(URL);
    alertRef.current.classList.toggle('hidden');

    setTimeout(() => {
      alertRef.current.classList.toggle('hidden');
    }, 3000);
  }
        
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-10 space-y-8">

         {error && (  <div className="fixed top-16 right-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-rose-500/30 text-rose-400 text-xs font-medium shadow-2xl shadow-rose-950/50 backdrop-blur-md">
      <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping shrink-0" />
      <span>{error}</span>
     </div>)}

            <p ref={alertRef} className="fixed hidden bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 backdrop-blur-md animate-fade-in-up"><span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>Link successfully copied!</p>

      {/* Top Header & Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Your Links</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage, track, and edit all your shortened links and QR codes.
          </p>
        </div>

        {/* Primary Action Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Create New Link
        </Link>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <svg
            className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search links, destinations, or tags..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>

        {/* Filter / Sort Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end text-xs">
          <select className="px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 focus:outline-none focus:border-emerald-500">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Archived</option>
          </select>
          <select className="px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 focus:outline-none focus:border-emerald-500">
            <option>Sort by: Newest</option>
            <option>Sort by: Clicks</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Links List Container */}
      <div className="space-y-4">
        
        {links.length ==0?(<p>No Links Added yet</p>):links.map((lik,i)=>(
            
        <div key={i} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Left: Link Details */}
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-3">
                <a
                  href={`${Frontend_Url}${lik['short']}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-cyan-400 hover:underline font-mono"
                >
                  {`${Frontend_Url}${lik['short']}`}
                </a>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
                <span className="text-xs text-slate-500">• {humanDate(lik['created_at'])}</span>
              </div>

              {/* Destination URL */}
              <p className="text-xs text-slate-400 max-w-md truncate flex items-center gap-1.5" title={lik['original']}>
                <svg className="w-3.5 h-3.5 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="truncate">{lik['original']}</span>
              </p>
            </div>

            {/* Right: Quick Stats & Actions */}
            <div className="flex items-center gap-6 justify-between lg:justify-end border-t lg:border-t-0 border-slate-800/60 pt-3 lg:pt-0">
              
              {/* Click Counter Badge */}
              <div className="text-left lg:text-right">
                <span className="text-xs font-semibold text-slate-400 block">Total Clicks</span>
                <span className="text-base font-bold text-slate-100">{lik['clicks']}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button onClick={()=>{copyShort(`${Frontend_Url}${lik['short']}`)}}
                  title="Copy Short Link"
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>

               {/*  <button
                  title="QR Code"
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </button> */}

                <Link
                  href={`ViewLinkProps?iop=${encryptId(lik['id'])}`}
                  className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Analytics
                </Link>
              </div>

            </div>
          </div>
        </div>
        ))}

        
      </div>

      {/* Pagination Footer */}
     {/*  <div className="flex items-center justify-between border-t border-slate-800/80 pt-6 text-xs text-slate-400">
        <span>Showing 1 to 2 of 2 links</span>
        <div className="flex items-center gap-2">
          <button disabled className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed">
            Previous
          </button>
          <button disabled className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed">
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}
