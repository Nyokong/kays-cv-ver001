import React from 'react'

export default function email() {
    return (
        <div className='md:max-w-[1000px] flex flex-col justify-center
        align-center'>
            <div className='w-full bg-black'>
                <h1 className='w-full bg-black text-white py-5 px-4'>
                    Contact Me?
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-4 bg-slate-600 w-full px-5 h-[400px]'>
                <form className='p-5 col-start-2 flex flex-col align-center justify-center w-full'>
                    <span className="block text-sm font-medium text-gray-300">
                        Email
                    </span>
                    <div className='w-full mt-5 bg-teal-400 relative z-10 flex 
                    align-items justify-center'>
                        <input type="email" placeholder='Enter your email'
                            className=" block w-full px-3 py-2 bg-white border 
                            border-slate-300 text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 transition-transform transform hover:translate-y-[-5px]
                            invalid:border-pink-500 invalid:text-pink-600 hover:translate-x-[-5px]
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                    </div>
                    <div className='w-full mt-5 bg-teal-400 relative z-10 flex 
                    align-items justify-center'>
                    <input type="text" placeholder='Your Message'
                        className=" block h-12 w-full px-3 py-2 bg-white border 
                        border-slate-300 text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 transition-transform transform hover:translate-y-[-5px]
                        invalid:border-pink-500 invalid:text-pink-600 hover:translate-x-[-5px]
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                    </div>
                    <div className='w-full mt-5 h-12 bg-teal-400 relative z-10 flex align-items justify-center'> 
                        <button className="px-6 w-full absolute hover:transition 
                        hover:duration-2000  hover:translate-x-[-5px]
                        h-12 uppercase font-semibold tracking-wider transition-transform 
                        hover:drop-shadow-lg transform hover:translate-y-[-5px]  
                        border-2 border-teal-900 bg-teal-400 text-black" type="submit">
                            Email
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
        

        
    )
}
