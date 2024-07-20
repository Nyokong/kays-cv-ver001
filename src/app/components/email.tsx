import React from 'react'

export default function email() {
    return (
        <div className='flex w-[400px] h-[230px] justify-center 
        bg-gray-200'>

            <form className='grid
            place-content-center '>
                <span className="p-2 block text-sm font-medium text-slate-700">
                    Email
                </span>

                <input type="text" value="email@email.com" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>

                <button className="px-6
                h-12 uppercase font-semibold tracking-wider 
                border-2 border-black bg-teal-400 text-black" type="submit">
                    Email
                </button>
            </form>
        </div>
    )
}
