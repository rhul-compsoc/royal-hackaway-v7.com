'use client';

import { Footer } from '@/components/sections/footer';
import { Sponsors } from '@/components/sections/sponsors';
import { Committee } from '@/components/sections/committee';
import { FAQ } from '@/components/sections/faq';
import { Information } from '@/components/sections/information';
import { Timetable } from '@/components/sections/timetable';
import { Divider } from '@/components/ui/divider';
import { MLHBadge } from '@/components/ui/mlh-badge';

import { Header } from '@/components/ui/header';

export default function Home() {
  return (
    <main>
      <MLHBadge />
      <Header />

      <div className="relative w-full h-full bg-white">
        <Information />
        <FAQ />
        <Committee />
        <Timetable />
        <Sponsors />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}
