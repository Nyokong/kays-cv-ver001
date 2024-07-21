import React from 'react'

export default function email() {
    return (
        <div className='grid grid-cols-3 gap-4 bg-slate-600 w-full px-5 h-[500px] md:max-w-[1000px]'>
            <form className='p-5 flex align-center justify-center w-full'>
                <label className="block">
                    <span className="block text-sm font-medium text-gray-300">
                        Email
                    </span>
                    <input type="email" placeholder='Enter your email'
                    className="mt-1 block w-full px-3 py-2 bg-white border 
                    border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                    <div className='w-full flex align-items justify-center'> 
                        <button className="px-6 mt-4
                        h-12 uppercase font-semibold tracking-wider 
                        border-2 border-black bg-teal-400 text-black" type="submit">
                            Email
                        </button>
                    </div>
                </label>
            </form>
        </div>
        

        
    )
}
