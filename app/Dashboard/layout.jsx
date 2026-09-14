'use client'

import { Bell, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
 const path=usePathname()

  const { userCred, logout } = useAuth();

  return (
    <div className="bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white">

<div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
   
    {/* Sidebar Navigation */}
     <aside className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col justify-between hidden md:flex">
  <div className="p-6">
    {/* Logo Header */}
    <div className="flex items-center gap-3 mb-8">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
        Z
      </div>
      <span className="text-xl font-bold tracking-tight text-white">Zyler.com</span>
    </div>

    {/* Navigation Links */}
    <nav className="space-y-1">
      <Link
        href="/Dashboard"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${path=="/Dashboard"?'bg-slate-800/80 text-emerald-400':'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'} font-medium text-sm transition-all`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Dashboard
      </Link>
      <Link
        href="/Dashboard/Links"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${path=="/Dashboard/Links"?'bg-slate-800/80 text-emerald-400':'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'} font-medium text-sm transition-all`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Links
      </Link>
      <Link
        href=""
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${path=="/Dashboard/Qrcodes"?'bg-slate-800/80 text-emerald-400':'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'} font-medium text-sm transition-all`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
        QR Codes
      </Link>
      <Link
        href=""
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${path=="/Dashboard/Analytics"?'bg-slate-800/80 text-emerald-400':'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'} font-medium text-sm transition-all`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Analytics
      </Link>
      <Link
        href=""
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${path=="/Dashboard/Settings"?'bg-slate-800/80 text-emerald-400':'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'} font-medium text-sm transition-all`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </Link>
        <p
        className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 font-medium text-sm transition-all`}
    onClick={logout}  >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
          Logout
      </p>
    </nav>
  </div>

  {/* User Badge*/}
  <div className="p-4 border-t border-slate-800/60 m-2">
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-3 min-w-0">
    
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-slate-200 truncate">{userCred['name']}</span>
          <span className="text-[10px] text-slate-500 truncate">{userCred['email']}</span>
        </div>
      </div>
    </div>
  </div>
</aside>


      {/* CONTENT */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

</div>
        {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-600 text-xs py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; Zyler Inc. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
