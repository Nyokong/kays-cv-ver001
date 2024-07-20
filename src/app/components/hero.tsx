import React from 'react'
import myImage from "public/ing 09.png";

export default function hero() {
  return (
    <div className="bg-gray-200 flex p-6 h-96">
        <div className="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
          {/*<img
            src={myImage}
            className="absolute z-10 inset-0 w-full h-full object-cover"
            width={200}
            height={200}
            alt="Profile Image - Author"
          />*/}
        </div>
        <div className="flex-auto pl-6">
          <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
            <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
              Khotso Nyokong
            </h1>
            <div className="relative uppercase text-teal-400 ml-3">
              Junior Software Engineer
            </div>
          </div>

          <div className="flex items-baseline my-6">
            <div className="space-x-3 flex text-sm font-medium">
              <p>
              I am a passionate and dedicated junior software engineer with a strong foundation in software development principles and practices. Proficient in languages such as JavaScript, Python, and Java, I have hands-on experience with frameworks like React, Node.js, and Django. My recent projects include developing web applications and contributing to open-source projects, showcasing my ability to learn quickly and adapt to new technologies.
              </p>
            </div>
          </div>

          <div className="flex space-x-2 mb-4 text-sm font-medium">
            <div className="flex space-x-4">
              <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
                Email
              </button>
              <button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
                Set An Appoinment
              </button>
            </div>
            <button className="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
        
        </div>
      </div>
  )
}
