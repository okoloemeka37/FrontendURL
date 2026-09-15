'use client'
import { linkDetails } from "../../Functions/Admin/dashboard";
import { decryptId } from "../../../lib/hashid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState ,useRef} from "react";
import EditDestination from "../../components/EditDestination";
import { Suspense } from "react";


export default function Page(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LinkDetailsPage />
        </Suspense>
    );
}

function LinkDetailsPage() {
  let downUrl='http://localhost:3000/'
  const [link, setlink] = useState({})
  const [device, setdevice] = useState([{}]);
  const [location, setlocation] = useState([{}])
    const searchParams=useSearchParams();
    const link_id=decryptId(searchParams.get('iop'));

    useEffect(() => {
      async function rf(params) {
           const {data}= await linkDetails(link_id);
           setlink(data['link'][0]);
           
           const OSTotal= data['device'].map(isd =>isd['OsCount']).reduce((a,c)=>a+c)
           data['device'].forEach(ele => {
              const percent=((ele['OsCount'] * 100)/OSTotal).toFixed(2)
              ele['OsPercent']=percent
           });
          setdevice(data['device']);

             const CityTotal= data['location'].map(isd =>isd['CityCount']).reduce((a,c)=>a+c)
           data['location'].forEach(ele => {
              const percent=((ele['CityCount'] * 100)/CityTotal).toFixed(2)
              ele['CityPercent']=percent
           });

           setlocation(data['location'])
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
  
  const [openEdit, setopenEdit] = useState(false)
    

    
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-10 space-y-8">

            <p ref={alertRef} className="fixed hidden bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 backdrop-blur-md animate-fade-in-up"><span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>Link successfully copied!</p>

    {openEdit && <EditDestination link={link} setLink={setlink} openEdit={openEdit} setEdit={setopenEdit} />}
        



      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <Link href="" className="hover:text-slate-200 transition-colors">
              Links
            </Link>
            <span>/</span>
            <span className="text-emerald-400 font-mono">{`${downUrl}${link['short']}`}</span>
          </div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Link Analytics & Properties
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              Active
            </span>
          </h1>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-3">
          <button onClick={()=>setopenEdit(true)} className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-all">
            Edit Destination
          </button>
          <button onClick={()=>{copyShort(`${downUrl}${link['short']}`)}}  className="cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/10">
            Copy Link
          </button>
        </div>
      </div>

      {/* Target Properties Overview Card */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Short Link</span>
          <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono">{`${downUrl}${link['short']}`}</p>
        </div>
        <div className="md:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Original Destination</span>
          <p className="text-sm font-medium text-slate-200 mt-1 truncate">{link['original']}</p>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400">Total Clicks</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-slate-100">{link['clicks']}</span>
           {/*  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20"></span> */}
          </div>
        </div>

        {/* <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400">Top Location</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-slate-100">United States</span>
            <span className="text-xs font-medium text-cyan-400">42%</span>
          </div>
        </div> */}

       {/*  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400">Top Device</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-slate-100">Mobile</span>
            <span className="text-xs font-medium text-slate-400">58%</span>
          </div>
        </div> */}

       {/*  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400">Top Referrer</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-slate-100">Twitter / X</span>
            <span className="text-xs font-medium text-slate-400">310 clicks</span>
          </div>
        </div> */}

      </div>

      {/* Geographic & Device Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Location Breakdown Table */}
        <div className="lg:col-span-2 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-200">Geographic Locations</h2>
            <span className="text-xs text-slate-400 border border-slate-800 bg-slate-950 px-3 py-1 rounded-lg">
              Top Cities
            </span>
          </div>

          <div className="space-y-4">
         
            {location.map((elt,id)=>(
              <div key={id}>
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="flex items-center gap-2 text-slate-200">
                  <span className="text-base">{elt['country']}</span>{elt['city']}
                </span>
                <span className="text-slate-400">{elt['CityCount']} clicks ({elt['CityPercent']}%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[42%]" />
              </div>
            </div>
            ))}

          </div>
        </div>



        {/* Device & OS Cards */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 space-y-6">
          <h2 className="text-base font-bold text-slate-200">Device & OS Breakdown</h2>
          
         <div className="space-y-4 text-xs">
           {device.map((elt,id)=>(
             <div key={id} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <span className="text-slate-300 font-medium">{elt['os']} / {elt['device']}</span>
             <span className="font-semibold text-emerald-400">{elt['OsPercent']}%</span>
            </div>
           
           ))}
          </div> 
        </div>

      </div>

      {/* Real-time Click Activity Stream Table */}
  {/*  <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 overflow-hidden">
        <div className="p-6 border-b border-slate-800/80">
          <h2 className="text-base font-bold text-slate-200">Recent Click Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-400">
            <thead className="bg-slate-950/50 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-800/60">
              <tr>
                <th className="p-4">Time</th>
                <th className="p-4">Location</th>
                <th className="p-4">Device / OS</th>
                <th className="p-4">Browser</th>
                <th className="p-4">Referrer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              <tr className="hover:bg-slate-800/20 transition-all">
                <td className="p-4 text-slate-300">Just now</td>
                <td className="p-4 font-medium text-slate-200 flex items-center gap-1.5">
                  🇺🇸 New York, US
                </td>
                <td className="p-4 text-slate-300">Mobile (iOS)</td>
                <td className="p-4 text-slate-300">Safari</td>
                <td className="p-4 text-cyan-400">t.co (Twitter)</td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-all">
                <td className="p-4 text-slate-300">4 mins ago</td>
                <td className="p-4 font-medium text-slate-200 flex items-center gap-1.5">
                  🇬🇧 London, UK
                </td>
                <td className="p-4 text-slate-300">Desktop (Windows)</td>
                <td className="p-4 text-slate-300">Chrome</td>
                <td className="p-4 text-slate-500">Direct / None</td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-all">
                <td className="p-4 text-slate-300">12 mins ago</td>
                <td className="p-4 font-medium text-slate-200 flex items-center gap-1.5">
                  🇩🇪 Berlin, DE
                </td>
                <td className="p-4 text-slate-300">Desktop (macOS)</td>
                <td className="p-4 text-slate-300">Firefox</td>
                <td className="p-4 text-cyan-400">github.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>  */}

    </div>
  );
}