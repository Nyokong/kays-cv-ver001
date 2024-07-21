"use client"

import Image from "next/image";
import Email from '@/src/app/components/email';
import Hero from '@/src/app/components/hero';
import Abilities from '@/src/app/components/abilities';
import Experience from '@/src/app/components/experience';

import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.main className="flex items-center justify-center">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="grid min-h-full">
          <Hero />
          <Abilities />
          <Experience /> 
          <Email />
        </div>
      </motion.main>
    </>
  );
}
