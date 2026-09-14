

import React, { useState } from 'react'
import { EditLinkDestination } from '../Functions/Admin/dashboard';

export default function EditDestination({link,openEdit,setEdit,setLink}) {
    let downUrl='http://localhost:3000/';

    const closeModal=()=>{
        setEdit(false)
    }
    const editLink=(e)=>{
        setLink(prev=>({...prev,original:e}))
    }
    const [original, setOriginal] = useState(link['original'])
    const [isLoading,setIsLoading]=useState(false);
     const [Success,setSuccess]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async()=>{
        setIsLoading(true)
            const body={linkId:link['id'],original:original}

            const ret=await EditLinkDestination(body);
                if (ret.status==201) {
                        setSuccess(ret.data)
                        setIsLoading(false)
                        editLink(original)
                        setTimeout(() => {
                            closeModal()
                        }, 2000);
                }else{setIsLoading(false); setError("Something Went Wrong")
                     setTimeout(() => {
                            closeModal()
                        }, 2000);
                }

    }

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
  {/* Modal Container */}
  <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-emerald-500/5 p-6 space-y-6">
    <p className='text-blue-400'>{Success}</p>
    <p className='text-red-400'>{error}</p>
    {/* Header */}
    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
      <div>
        <h3 className="text-lg font-bold text-white">Update Destination</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Change where your short link redirects to.
        </p>
      </div>
      <button onClick={closeModal} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {/* Form Body */}
    <div className="space-y-4">
      {/* Short Link Readonly Preview */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          Short Link
        </label>
        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-emerald-400">
          <span>{`${downUrl}${link['short']}`}</span>
          <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            Active
          </span>
        </div>
      </div>

      {/* Destination URL Input */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
          New Destination URL
        </label>
        <input
          type="url"
          value={original}
          onChange={(e)=>setOriginal(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
        />
      </div>
    </div>

    {/* Footer Action Buttons */}
    <div className="flex items-center justify-end gap-3 pt-2">
      <button onClick={closeModal} className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all">
        Cancel
      </button>
      <button onClick={handleSubmit} className="flex px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95">
      {isLoading && <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-emerald-600"></span>}
        <span>Save Changes</span>
      </button>
    </div>

  </div>
</div>
  )
}
