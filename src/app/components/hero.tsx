import React from 'react'
import Image from 'next/image';

export default function hero() {
    return (
        <div className="grid grid-cols-3 gap-8 p-5 md:max-w-[1000px]">
            <div className=''>
                <Image
                    src="/corp.png"
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                    alt="Profile Image - Author"
                />
            </div>
            
            <div className='bg-gray-200 col-span-2'>
                <div className="flex-auto w-full">
                    <div className="bg-black p-7 w-full">
                        <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                            Khotso Nyokong
                        </h1>
                        <div className="relative uppercase text-teal-400">
                            Junior Software Engineer
                        </div>
                    </div>

                    <div className="flex items-baseline my-6">
                        <div className="space-x-3 px-5 flex text-sm font-medium">
                        <p>
                            I am a passionate and dedicated junior software engineer with a strong foundation in software development principles and practices. Proficient in languages such as JavaScript, Python, and Java, I have hands-on experience with frameworks like React, Node.js, and Django. My recent projects include developing web applications and contributing to open-source projects, showcasing my ability to learn quickly and adapt to new technologies.
                        </p>
                        </div>
                    </div>

                    <div className="flex space-x-2 text-sm font-medium">
                        <div className="flex space-x-4 px-6 py-4">
                            <button className="hover:underline px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
                                Email
                            </button>
                            <button className="hover:underline px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-slate-900" type="button">
                                download my cv
                            </button>
                            <button className="hover:underline px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-blue-400 text-white" type="submit">
                                Linked In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
