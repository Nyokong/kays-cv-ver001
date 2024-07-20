import React from 'react'

export default function abilities() {
  return (
    <div className='grid grid-cols-3 gap-4 p-5 md:max-w-[1000px]'>
        <div className='bg-gray-200 relative'>
            <div className='absolute top-0 right-0 bg-black text-white py-5 px-4'>bee</div>
            <h1 className='w-full bg-black text-white py-5 px-4'>
                Software
            </h1>
            <div className='grid grid-gap-4'>
                <div className='px-4 py-4 bg-teal-600 rounded-sm'>Adobe Animator</div>
                <div className='px-4 py-4 bg-teal-400 rounded-sm'>Visual Studio Code</div>
                <div className='px-4 py-4 bg-teal-500 rounded-sm'>Capcut Desktop</div>
                <div className='px-4 py-4 bg-teal-400 rounded-sm'>Clip Studio Paint</div>
            </div>
        </div>

        <div className='bg-gray-200 col-span-2'>
        <div className='bg-gray-200 relative'>
            <div className='absolute top-0 right-0 bg-black text-white py-5 px-4'>bee</div>
            <h1 className='w-full bg-black text-white py-5 px-4'>
                Abilities/Skills
            </h1>
            <div className='grid grid-cols-4 grid-gap-4 grid-rows-4'>
                <div className='px-4 py-4 bg-teal-600 rounded-sm row-span-4 grid-col-1 h-full'>01</div>
                <div className='px-4 py-4 bg-teal-400 rounded-sm row-span-4 grid-col-2'>02</div>
                <div className='px-4 py-4 bg-teal-500 rounded-sm grid-col-3'>03</div>
                <div className='px-4 py-4 bg-teal-400 rounded-sm grid-col-4'>04</div>
            </div>
        </div>
        </div>
    </div>
  )
}
