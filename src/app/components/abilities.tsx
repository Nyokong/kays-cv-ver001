import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { xp } from '@/lib/data'; // Adjust the path as necessary


export default function abilities() {
  return (
    <div className='grid grid-cols-3 gap-4 p-5 md:max-w-[1000px]'>
        <div className='group bg-gray-200 relative'>
            <div className='absolute top-0 right-0 bg-black text-white py-5 px-4'>bee</div>
            <h1 className='w-full bg-black text-white py-5 px-4'>
                Software
            </h1>
            <div className='grid grid-gap-4'>
                <div className='px-4 py-4 hover:cursor-pointer transition-transform transform hover:translate-y-1 
                hover:drop-shadow-lg drop-shadow-xl md:filter-none shadow-teal-900
                bg-teal-400 rounded-sm hover:text-gray-200'>Adobe Animator</div>
                <div className='px-4 py-4 hover:cursor-pointer transition-transform transform hover:translate-y-1 
                hover:drop-shadow-lg drop-shadow-xl md:filter-none shadow-teal-900
                bg-teal-400 rounded-sm hover:text-gray-200'>Visual Studio Code</div>
                <div className='px-4 py-4 hover:cursor-pointer transition-transform transform hover:translate-y-1 
                hover:drop-shadow-lg drop-shadow-xl md:filter-none shadow-teal-900
                bg-teal-400 rounded-sm hover:text-gray-200'>Capcut Desktop</div>
                <div className='px-4 py-4 hover:cursor-pointer transition-transform transform hover:translate-y-1 
                hover:drop-shadow-lg drop-shadow-xl md:filter-none shadow-teal-900
                bg-teal-400 rounded-sm hover:text-gray-200'>Clip Studio Paint</div>
            </div>
        </div>

        <div className='bg-gray-200 col-span-2'>
            <div className='bg-gray-200 relative'>
                <div className='absolute top-0 right-0 bg-black text-white py-5 px-4'>bee</div>
                <h1 className='w-full bg-black text-white py-5 px-4'>
                    Abilities/Skills
                </h1>
                <div className='grid grid-cols-4 grid-gap-4'>
                    {xp.map((exp, index) => (
                        <div key={index} className='grid grid-cols-4 gap-4 items-center'>
                            <React.Fragment key={index}>
                                <Exp {...exp}/>
                            </React.Fragment>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
{/**
<h2 >{exp.name}</h2>
                            <h3 className='text-gray-200'>{exp.role}</h3>
 */}


 interface ProjectProps {
    img: string | StaticImageData;
    name: string;
    role: string;
  }

function Exp({img,name,role}: ProjectProps) {
    return (
        <div className="grid grid-flow-row auto-rows-max hover:auto-rows-min p-3 px-2">
            <div className='flex justify-center '>
                <Image 
                    className="" 
                    src={img} 
                    alt={name} 
                />
            </div>
            <div className='text-lg bg-teal-300 w-full'>{name}</div>
            <div className='text-[10px] flex flex-row items-center w-full'>{role}</div>
        </div>
        
    );
};
