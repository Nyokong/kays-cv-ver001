import React from 'react'
import { workExperiences } from '@/lib/data'; // Adjust the path as necessary


    

{/*

export default function experience() {
    return (
        <div className='grid grid-cols-3 gap-4 p-5 h-[250px] md:max-w-[1000px]'>
            <div className='bg-gray-200 col-span-3'>
                <h1 className='w-full bg-black text-white py-5 px-4'>
                    Experience
                </h1>

                <div className='w-full bg-gray-400 p-4 opacity-sm'>
                    like me
                </div>
            </div>
        </div>
        
    )
}
 */}

const WorkExperience: React.FC = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-5 md:max-w-[1000px]'>
            <div className='bg-gray-200 col-span-3'>
                <h1 className='w-full bg-black text-white py-5 px-4'>
                    Work Experience
                </h1>

                <div className='w-full bg-gray-700 text-teal-200 p-8 opacity-sm'>
                    {workExperiences.map((experience, index) => (
                        <div key={index} className='mt-6'>
                            <h2>{experience.company}</h2>
                            <h3>{experience.role}</h3>
                            <p>{experience.duration}</p>
                            <ul>
                                {experience.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default WorkExperience;