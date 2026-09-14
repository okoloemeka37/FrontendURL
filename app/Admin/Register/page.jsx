'use client'

import HeaderComponents from '../../components/HeaderComponents'
import Link from 'next/link'
import  { useRouter } from 'next/navigation'
import RegisterController from '../../Functions/Admin/Auth.js'
import { useState } from 'react'
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const router=useRouter()
const {login}=useAuth()
  const [RegData, setRegData] = useState({name:'',email:'',password:'','terms':''});
    const[error,setError]=useState({name:'',email:'',password:'','terms':'',gen:''});
    const[succes,setSuccess]=useState('')

  const handleSubmit=async(e)=>{
      e.preventDefault();
      setError({name:'',email:'',password:'','terms':'',gen:''})
       const authCont=await RegisterController(RegData)

       console.log(authCont)
        if (authCont.status==402 || authCont.status==400 ||authCont.status ==500) {
          setError(authCont.error);
       }else{
          if (authCont.status==201) {
              setSuccess(authCont.message)
              console.log(authCont.user)
               login(authCont)
               router.push("/Dashboard")
          }
       }
  }

  
  return (
  <div  className="bg-slate-950">
     <HeaderComponents />
     <div className="min-h-screen  text-slate-100 flex flex-col justify-center items-center relative overflow-hidden px-4">
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

  <div className="w-full max-w-md z-10">
    {/* Logo Header */}
    <div className="flex flex-col items-center mb-8">
   
      <h1 className="text-2xl font-bold tracking-tight text-slate-100">Create your Zyler account</h1>
      <p className="text-sm text-slate-400 mt-1.5">Start managing and tracking your clips today</p>
    </div>

    {/* Form Card */}
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 shadow-2xl">
          <p className='text-center text-red-500'>{error['gen']}</p>
          <p className='text-blue-600'>{succes}</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* name Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            name
          </label>
          <input
            type="text"
            placeholder="zyler_dev"
            className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
          onChange={(e)=>setRegData((pre)=>({...pre, name:e.target.value}))}
          value={RegData['name']}
         />
         <p className='text-red-500'>{error['name']}</p>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
            onChange={(e)=>setRegData((pre)=>({...pre,email:e.target.value}))}   
            value={RegData['email']}       
          />
            <p className='text-red-500'>{error['email']}</p>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
          onChange={e=>setRegData((pre)=>({...pre,password:e.target.value}))}
          value={RegData['password']}
         />
           <p className='text-red-500'>{error['password']}</p>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              onChange={e=>setRegData((pre)=>({...pre, terms:e.target.checked}))}
              checked={RegData['terms']}
              className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-emerald-500 focus:ring-emerald-500/30 focus:ring-offset-slate-950"
            />
          </div>
          <label htmlFor="terms" className="ml-3 text-xs text-slate-400 leading-normal">
            I agree to the{' '}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Privacy Policy
            </a>
          </label>
            
        </div>
<p className='text-red-500'>{error['terms']}</p>
        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl text-sm font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
        >
          Create Account
        </button>
      </form>

      {/* Footer Link */}
      <div className="mt-6 pt-6 border-t border-slate-800/60 text-center">
        <p className="text-xs text-slate-400">
          Already have an account?{' '}
          <Link href="./Login" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
