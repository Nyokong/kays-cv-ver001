"use client"

import Image from "next/image";
import Email from '@/src/app/components/email';
import Hero from '@/src/app/components/hero';

export default function Home() {
  return (
    <main className="flex flex-col md-h-screen items-center justify-between p-10">
      
      <Hero />

      <div>
        <Email />
      </div>
    </main>
  );
}
