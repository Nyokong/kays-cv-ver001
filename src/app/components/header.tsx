
import React from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
    return (
    <header className="bg-gray-200 flex shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                <div className="absolute z-10 inset-0 w-full h-full object-cover">
                    <h1 className="text-[40px] font-bold text-gray-500">
                        Portfolio
                    </h1>
                    <nav>
                        <ul className="flex space-x-4">
                            {/*<li className='px-10'>
                                Space
                            </li>
                            <li>
                                makes no
                            </li>
                            <li className='px-10'>
                                sense
                            </li>*/}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
}
