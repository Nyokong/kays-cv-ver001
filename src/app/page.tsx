"use client"

import Image from "next/image";
import Email from '@/src/app/components/email';
import Hero from '@/src/app/components/hero';
import Abilities from '@/src/app/components/abilities';
import Experience from '@/src/app/components/experience';
import Header from '@/src/app/components/header';
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    
    <>
    <div className="">
        <motion.div className="progress-bar  
        h-[10px] bg-red-800 z-[-50px]" style={{ scaleX }} />
        
        <Header />
        
      <main className="flex items-center justify-center">
          <div className="grid min-h-full">
            <Hero />
            <Abilities />
            <Experience /> 
            <Email />
          </div>
        </main>
          
          </div>
          </>
  );
}
