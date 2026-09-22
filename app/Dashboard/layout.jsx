
'use client'
import { Bell, User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const path = usePathname();
  const { userCred, logout } = useAuth();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    {
      href: "/Dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      )
    },
    {
      href: "/Dashboard/Links",
      label: "Links",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      )
    },
    {
      href: "/Dashboard/Qrcode",
      label: "QR Codes",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      )
    },
   /*  {
      href: "/Dashboard/",
      label: "Analytics",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      )
    }, */
    {
      href: "/Dashboard/",
      label: "Settings",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    }
  ];

  const navClass = (href) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
      path === href
        ? "bg-slate-800/80 text-emerald-400"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= MOBILE HEADER ================= */}
      <header className="md:hidden sticky top-0 z-50 h-16 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="h-full px-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
              Z
            </div>

            <span className="text-lg font-bold tracking-tight text-white truncate">
              Zyler.com
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            {mobileMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>
      </header>


      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-950 pt-16">

          <div className="h-full overflow-y-auto px-4 py-5">

            <nav className="space-y-1">

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={navClass(item.href)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

              {/* Logout */}
              <button
                type="button"
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800/40 font-medium text-sm transition-all"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>

            </nav>


            {/* Mobile User */}
            <div className="mt-8 pt-5 border-t border-slate-800">

              <div className="px-4">

                <div className="text-sm font-semibold text-slate-200 truncate">
                  {userCred?.name}
                </div>

                <div className="text-xs text-slate-500 truncate mt-1">
                  {userCred?.email}
                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="flex min-h-[calc(100vh-0px)]">

        {/* Sidebar */}
        <aside className="hidden md:flex w-64 lg:w-72 shrink-0 bg-slate-900/50 border-r border-slate-800 flex-col justify-between min-h-screen">

          <div className="p-5 lg:p-6">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">

              <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
                Z
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Zyler.com
              </span>

            </div>


            {/* Navigation */}
            <nav className="space-y-1">

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navClass(item.href)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}


              {/* Logout */}
              <button
                type="button"
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800/40 font-medium text-sm transition-all"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>

            </nav>

          </div>


          {/* Desktop User */}
          <div className="p-4 border-t border-slate-800/60 m-2">

            <div className="flex items-center px-3 py-2 min-w-0">

              <div className="flex flex-col min-w-0 w-full">

                <span className="text-xs font-semibold text-slate-200 truncate">
                  {userCred?.name}
                </span>

                <span className="text-[10px] text-slate-500 truncate mt-0.5">
                  {userCred?.email}
                </span>

              </div>

            </div>

          </div>

        </aside>


        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 min-w-0 overflow-x-hidden">

          {children}

        </main>

      </div>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-600 text-xs py-6">

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          <div>
            &copy; Zyler Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">

            <Link
              href="#privacy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#terms"
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </footer>

    </div>
  );
}
