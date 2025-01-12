'use client';

import { Footer } from '@/components/sections/footer';
import { Sponsors } from '@/components/sections/sponsors';
import { FAQ } from '@/components/sections/faq';
import { Information } from '@/components/sections/information';
import { Timetable } from '@/components/sections/timetable';
import { Divider } from '@/components/ui/divider';
import { Header } from '@/components/sections/header';

export default function Home() {
  return (
    <main>
      <Header />

      <div className="relative w-full h-full bg-white">
        <Information />
        <FAQ />
        <Timetable />
        <Sponsors />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}
