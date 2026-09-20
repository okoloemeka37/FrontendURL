'use client'

import HeaderComponents from '../../components/HeaderComponents'
import Link from 'next/link'

import  { useRouter } from 'next/navigation'
import {LoginController} from '../../Functions/Admin/Auth.js'
import { useState } from 'react'
import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const router=useRouter()
const {login}=useAuth()
  const [RegData, setRegData] = useState({email:'',password:''});
    const[error,setError]=useState({email:'',password:'',gen:''});
    const[succes,setSuccess]=useState('');

    const [Onload, setOnload] = useState(false)

     const handleSubmit=async(e)=>{
      e.preventDefault();
      setOnload(true)
      setError({name:'',email:'',password:'','terms':'',gen:''})
       const authCont=await LoginController(RegData)

       console.log(authCont)
        if (authCont.status==402 || authCont.status==400 ||authCont.status ==500) {
          setError(authCont.error);
         setOnload(false)
       }else{
          if (authCont.status==201) {
              setSuccess(authCont.message)
              console.log(authCont.user)
              
               login(authCont)
              setOnload(false)
               router.push("/Dashboard")
          }
       }
  }

  return (
    <div  className="bg-slate-950">
    <HeaderComponents />
    <div className="min-h-screen  text-slate-100 flex flex-col justify-center items-center relative overflow-hidden px-4">
        
  {/* Subtle Background Glows */}
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

  <div className="w-full max-w-md z-10">
  
    <div className="flex flex-col items-center mb-8">
     
      <h1 className="text-2xl font-bold tracking-tight text-slate-100">Welcome back to Zyler URL Shortener</h1>
      <p className="text-sm text-slate-400 mt-1.5">Signin to manage your links</p>
    </div>

    {/* Form Card */}
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl">
          <p className='text-center text-red-500'>{error['gen']}</p>
          <p className='text-blue-600'>{succes}</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={e=>(setRegData((prev)=>({...RegData, email:e.target.value})))}
            value={RegData['email']}
            className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
          />
            <p className='text-red-500'>{error['email']}</p>
        </div>
          
        {/* Password Field with Forgot Link */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Password
            </label>
           {/*  <a href="#" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
              Forgot password?
            </a> */}
          </div>
          <input
            type="password"
            placeholder="••••••••"
            onChange={e=>(setRegData((prev)=>({...RegData,password:e.target.value})))}
            value={RegData['password']}
            className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
          />
          <p className='text-red-500'>{error['password']}</p>
        </div>
        
        {/* Remember Me Checkbox */}
       {/*  <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-emerald-500 focus:ring-emerald-500/30 focus:ring-offset-slate-950"
          />
          <label htmlFor="remember" className="ml-3 text-xs text-slate-400 select-none">
            Keep me signed in for 30 days
          </label>
        </div> */}

        {/* Login Button */}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all text-sm shrink-0 flex items-center justify-center gap-2 cursor-pointer w-full"
        >
          {Onload && (<span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>)}
          <span>Sign In</span>
        </button>
      </form>

      {/* Social Login Divider */}
   {/*    <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-800"></div>
        </div>
        <span className="relative px-3 bg-slate-900/60 text-xs text-slate-500 uppercase tracking-wider">
          Or continue with
        </span>
      </div> */}

      {/* Social Buttons */}
     {/*  <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/50 hover:bg-slate-950/80 border border-slate-850 hover:border-slate-800 rounded-xl text-xs font-medium text-slate-300 transition-all cursor-pointer">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.73 0 3.3.63 4.52 1.68l2.42-2.42C17.44 1.83 14.97 1 12.24 1 6.58 1 2 5.58 2 11.24s4.58 10.24 10.24 10.24c5.9 0 9.8-4.15 9.8-10 0-.67-.06-1.32-.16-1.94H12.24z"/>
          </svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/50 hover:bg-slate-950/80 border border-slate-850 hover:border-slate-800 rounded-xl text-xs font-medium text-slate-300 transition-all cursor-pointer">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </button>
      </div> */}

      {/* Footer Link */}
      <div className="mt-6 pt-6 border-t border-slate-800/60 text-center">
        <p className="text-xs text-slate-400">
          Don't have an account?{' '}
          <Link href="./Register" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"> Sign up</Link>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
