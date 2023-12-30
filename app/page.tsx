'use client';

import logo from '@/public/full-logo.png'
import background from '@/public/hackaway.png'

import { Footer } from "@/components/ui/footer";
import { CountdownTimer } from "@/components/ui/countdown";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Sponsors } from '@/components/ui/sponsors';
import { Committee } from '@/components/ui/committee';
import { FAQ } from '@/components/ui/faq';
import { Information } from '@/components/ui/information';
import { Timetable } from '@/components/ui/timetable';
import Divider from '@/components/ui/divider';
import { MLHBadge } from '@/components/ui/mlh-badge';

export default function Home() {
  return (
    <main>
      <MLHBadge />
      <div className="absolute h-screen w-full [clip-path:inset(0,0,0,0)] bg-black">
        <div className="fixed w-full h-full left-0 top-0">
          <Image alt="Hackaway Photo"
            src={background}
            placeholder="blur"
            fill
            className="object-cover blur brightness-[.35]" />
        </div>
      </div>
      <div className="min-h-screen items-center">
        <div className="w-full pt-10">
          <Image alt="Hackaway V7 Logo" src={logo} className="blur-none drop-shadow-[3px_3px_rgba(217,91,23,.75)] mx-auto lg:w-1/2 w-3/4" />
        </div>
        <div className="w-full blur-none mt-5 sm:mt-10 mb-20 lg:mb-10">
          <div className="w-fit lg:w-4/5 mx-auto py-5 sm:mt-20 bg-accent rounded-3xl">
            <CountdownTimer date={new Date(2024, 0, 27, 10)} />
          </div>
        </div>
        <div className="h-full w-full mt-5 sm:mt-10 lg:mt-32 block md:hidden lg:block text-sm lg:text-3xl">
          <div className="mx-auto w-fit">
            <a href="/#info">
              <FontAwesomeIcon className="drop-shadow-[6px_9px_rgb(217,91,23)] animate-[bounce_3s_infinite]" size="5x" color="white" icon={faChevronDown} />
            </a>
          </div>
        </div>
      </div>

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
};
