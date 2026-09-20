'use client'


import Link from "next/link";
import { useAuth } from "../context/AuthContext";
export default function HeaderComponents() {
      const { userCred, logout } = useAuth();
      console.log(userCred)
  return (
    <>
         {/* NAVBAR */}
<header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
          Z
        </div>
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
          Zyler
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
       {/*  <Link href="/Features" className="hover:text-slate-100 transition-colors">
          Features
        </Link> */}
      {/*   <Link href="/pricing" className="hover:text-slate-100 transition-colors">
          Pricing
        </Link>
        <Link href="/Linkpi" className="hover:text-slate-100 transition-colors">
          API
        </Link>
        <Link href="/docs" className="hover:text-slate-100 transition-colors">
          Docs
        </Link> */}
      </nav>

      {/* Right Side User Profile / Auth Links */}
      <div className="flex items-center gap-4">
        {userCred['name'].length !== 0 ? (
          /* User Profile Pill */
          <div className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-sm">
           <Link className="flex items-center  gap-2.5 " href={"/Dashboard"}><div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-[10px] font-bold text-slate-950 uppercase shrink-0">
              {userCred['name'].charAt(0)}
            </div>
            <span className="text-xs font-semibold text-slate-200 max-w-[120px] truncate">
              {userCred['name']}
            </span>
            </Link>
          </div>
        ) : (
          /* Unauthenticated Auth Buttons */
          <>
            <Link
              href="/Admin/Login"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/Admin/Register"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95"
            >
              Get Started
            </Link>
          </>
        )}
      </div>

    </div>
  </div>
</header>

    </>
  )
}
