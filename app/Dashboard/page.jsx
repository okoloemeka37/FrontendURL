'use client'
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import getDash from "../Functions/Admin/dashboard";
import { useEffect, useState,useRef } from "react";
import { encryptId } from "../../lib/hashid";

export function humanDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}


export default function AdminDashboardPage() {

    const { userCred, logout,Frontend_Url } = useAuth();
    const [links, setlinks] = useState([]);
    const [totalC,setTotalC]=useState(0)
    const [error, seterror] = useState('')
     useEffect(() => {
        async function rf() {
        let data= await getDash()

        if (data.status==200) {
          console.log(data.data)
           setlinks(data.data.links)
           setTotalC(data.data.totalClicks)
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
    <div>
        {error && (  <div className="fixed top-16 right-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-rose-500/30 text-rose-400 text-xs font-medium shadow-2xl shadow-rose-950/50 backdrop-blur-md">
      <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping shrink-0" />
      <span>{error}</span>
     </div>)}

            <p ref={alertRef} className="fixed hidden bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 backdrop-blur-md animate-fade-in-up"><span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>Link successfully copied!</p>

      {/* Main View Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-lg font-bold text-slate-100">Overview</h1>
          <a href={"/"} className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/10">
            + Create Short Link
          </a>
        </header>

        {/* Content Wrapper */}
        <main className="p-6 space-y-6">
          {/* Key Metric Stats Grid */}


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400">Total Links</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl font-bold text-slate-100">{links.length}</span>
                {/* <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  +12%
                </span> */}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400">Total Clicks</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl font-bold text-slate-100">{totalC}</span>
               {/*  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  +24%
                </span> */}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400">QR Scans</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl font-bold text-slate-100">0</span>
              {/*   <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  +8%
                </span> */}
              </div>
            </div>

           {/*  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400">Active Campaigns</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-2xl font-bold text-slate-100">14</span>
                <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                  Stable
                </span>
              </div>
            </div> */}
          </div>




        {/* Analytics Visual Chart Placeholder */}
         {/*  
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-sm font-bold text-slate-200">Click Performance</h2>
                <p className="text-xs text-slate-500">Traffic over the last 7 days</p>
              </div>
              <span className="text-xs text-slate-400 border border-slate-800 bg-slate-950 px-3 py-1 rounded-lg">
                Last 7 Days
              </span>
            </div>
            
            <div className="h-44 w-full flex items-end justify-between gap-2 pt-6">
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[40%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[65%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[30%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[85%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[50%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[95%] rounded-t-lg transition-all" />
              <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 h-[70%] rounded-t-lg transition-all" />
            </div>
          </div> */}

          {/* Data Table */}


          {!error &&
          
          (<div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 overflow-hidden">
            <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-200">Recent Short Links</h2>
              <Link href={"/Dashboard/Links"} className="text-xs font-semibold text-emerald-400 hover:underline">
                View All
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-400">
                <thead className="bg-slate-950/50 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-800/60">
                  <tr>
                    <th className="p-4">Short URL</th>
                    <th className="p-4">Original Destination</th>
                    <th className="p-4">Clicks</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                
                {links.length === 0 ? (<tr><td>No Shorten Link</td></tr>) : (
                 links.map(lik=>(
                    <tr key={lik['id']} className="hover:bg-slate-800/20 transition-all">
                    <td className="p-4 font-medium text-cyan-400">{`${Frontend_Url}${lik['short']}`}</td>
                    <td className="p-4 truncate max-w-xs text-slate-300">{lik['original']}</td>
                    <td className="p-4 font-semibold text-slate-200">{lik['clicks']}</td>
                    <td className="p-4 text-slate-500">{humanDate(lik['created_at'])}</td>
                    <td className="p-4 text-right flex ">
                      <button onClick={()=>{copyShort(`${Frontend_Url}${lik['short']}`)}} className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-all">
                        Copy
                      </button>
                        <Link href={`Dashboard/ViewLinkProps?iop=${encryptId(lik['id'])}`} className="px-3 py-1 rounded-md bg-blue-800 hover:bg-blue-700 text-white font-medium transition-all">
                        View
                      </Link>
                    </td>
                  </tr>
                 ))
                )}
                 
                </tbody>
              </table>
            </div>
          </div>)
          }


        </main>
      </div>
    </div>
  );
}