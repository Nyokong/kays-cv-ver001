"use client"

import Image from "next/image";
import Email from '@/src/app/components/email';
import Hero from '@/src/app/components/hero';
import Abilities from '@/src/app/components/abilities';
import Experience from '@/src/app/components/experience';

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="grid min-h-full">
        <Hero />
        <Abilities />
        <Experience /> 
        <Email />
      </div>
    </main>
  );
}
