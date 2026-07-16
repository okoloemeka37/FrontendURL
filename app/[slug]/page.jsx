// app/[slug]/page.tsx
import { permanentRedirect } from "next/navigation";

import Link from "next/link";

export default async function RedirectPage({ params }) {
  const { slug } = await params;
  let targetUrl = null;

  try {
    //const resp = await fetch(`http://localhost:5000/api/user/getClip?slug=${slug}`);
    const resp = await fetch(`https://backendurl-wt2b.onrender.com/api/user/getClip?slug=${slug}`);
    const data = await resp.json();
    
    if (resp.ok && data?.url) {
      targetUrl = data.url;
    }
  } catch (error) {
 
    console.error("Fetch error:", error);
  }

 
  if (targetUrl) {
    permanentRedirect(targetUrl);
  }

  // Fallback if the slug wasn't found or the API failed
  return (
   <div className="flex h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-200">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xl font-bold">
      !
    </div>
    <h1 className="text-xl font-semibold text-slate-100">Link Lost in Space</h1>
    <p className="mt-1 text-sm text-slate-400 max-w-sm">
      This link does not exist, has expired, or the clips were cleared out.
    </p>
    <Link 
      href="/" 
      className="mt-6 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
    >
      Create Your Own Link
    </Link>
  </div>
  );
}