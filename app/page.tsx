'use client';

import logo from './v7-logo.png'
import background from './background.png'

import { Accordion } from "@/components/accordion";
import { Footer } from "@/components/footer";
import { Schedule } from "@/components/schedule";
import { CountdownTimer } from "@/components/countdown";
import Image from 'next/image';
import { Card } from '@/components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Sponsors } from '@/components/sponsors';
import { H2 } from '@/components/title';

export default function Home() {
  return (
    <main>
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
          <Image alt="Hackaway V7 Logo" src={logo} className="blur-none drop-shadow-[4px_4px_rgba(217,91,23,.75)] mx-auto lg:w-1/2 w-3/4" />
        </div>
        <div className="w-full blur-none mt-5 sm:mt-10 mb-20 lg:mb-10">
          <div className="w-fit lg:w-4/5 mx-auto py-5 sm:mt-20 bg-accent rounded-3xl">
            <CountdownTimer date={new Date(2024, 1, 3, 10)} />
          </div>
        </div>
        <div className="h-full w-full mt-32 hidden lg:block">
          <div className="mx-auto w-fit">
            <FontAwesomeIcon className="drop-shadow-[6px_9px_rgb(217,91,23)] animate-[bounce_3s_infinite]" size="10x" color="white" icon={faChevronDown} />
          </div>
        </div>
      </div>

      <div className="relative w-full h-full bg-white" id="hackaway-info">
        <div className="relative flex flex-col min-h-screen items-center py-24">
          <H2 text="Frequently asked questions!"/>
          <Accordion
            elements={[
              {
                title: "Can I go home overnight / leave early?",
                body: `The short answer is yes! If you have a hotel room booked or you need to leave for any reason,
                please make sure you check-out and check back in when you return
                This is for fire safety and accountability reasons.`
              },
              {
                title: "What is a Hackathon?",
                body: `Hackathons are programming competitions where
                people work together to make something cool over the course of a weekend!`
              },
              {
                title: "Can I start before I join?",
                body: `Absolutely not! While you can explore ideas,
                you cannot start implementing your project before the specified time`
              },
              {
                title: "Do I have to eb studying Computer Science?",
                body: `Nope! Although doing Computer Science or
                knowing how to code helps, it is not required!`
              },
              {
                title: "Do I need to come with a team?",
                body: `If you don't have a team in mind before you come,
                you can make a team when you arrive, so no pressure!
                Just note that team sizes are limited to a maximum
                of five hackers per team!`
              },
              {
                title: "Who can attend?",
                body: `Anyone who is 18+ and is a current studen or has
                graduated in the past six months!`
              },
              {
                title: "How much does it cost?",
                body: `£0 and your weekend! Royal Hackaway is free to attend,
                thanks to all the support provided by our sponsors!`
              },
              {
                title: "Who owns my project?",
                body: `All code is owned by you and your team members!
                We recommend putting your project on Github, and making it open source!`
              },
            ]}
          />

          <H2 text="Meet the team!"/>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <Card
              name='Joseph'
              position='Treasurer'
              img='joseph.jpg'
              alt='joseph'
            />

            <Card
              name='Jacob'
              position='Events'
              img='jacob.jpg'
              alt='jacob'
            />

            <Card
              name='Zak'
              position='President'
              img='zak.png'
              alt='zak'
            />

            <Card
              name='Sinan'
              position='Vice President'
              img='sinan.png'
              alt='sinan'
            />

            <Card
              name='Artem'
              position='Secretary'
              img='artem.jpg'
              alt='artem'
            />

            <Card
              name='Natan'
              position='Promotions'
              img='natan.jpg'
              alt='natan'
            />

            <Card
              name='Abdi'
              position='Competitions'
              img='abdi.png'
              alt='abdi'
            />

            <Card
              name='Charley'
              position='Charity'
              img='charley.jpg'
              alt='charley'
            />
            <Card
              name='Ole'
              position='First Year Rep'
              img='ole.jpg'
              alt='ole'
            />
          </div>

        </div>

        <div className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center justify-between">
          <H2 text="Schedule!"/>
          <Schedule
            events={[
              {
                time: "17:00",
                title: "Dinner",
                description: "Eat some food! Probably just gonna be a tonne of pizza or something like that."
              },
              {
                time: "20:00",
                title: "Carrot in a Box",
                description: "A long standing tradition! Compete to become the highly respected Carrot in a Box champion."
              },
            ]}
          />
        </div>

        <div className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center justify-between">
          <Sponsors/>
        </div>

        <Footer/>
      </div>
    </main>
  );
}
