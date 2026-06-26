// app/[slug]/page.tsx
import { permanentRedirect } from "next/navigation";



export default async function RedirectPage({ params }) {
  const { slug } = await params;
  let targetUrl = null;

  try {
    const resp = await fetch(`http://localhost:5000/api/user/getClip?slug=${slug}`);
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
    <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-200">
      <p>Link not found or has expired.</p>
    </div>
  );
}