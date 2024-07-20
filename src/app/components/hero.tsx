import React from 'react'
import Image from 'next/image';

export default function hero() {
    return (
        <div className="grid grid-cols-3 gap-8 p-5 md:max-w-[1500px]">
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

            </div>
        </div>
    )
}
