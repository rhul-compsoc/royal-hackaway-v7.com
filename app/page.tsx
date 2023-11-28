'use client';

import logo from './v7-logo.png'
import background from './background.png'

import { Accordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Link } from "@/components/link";
import { Schedule } from "@/components/schedule";
import { CountdownTimer } from "@/components/countdown";
import Image from 'next/image';
import { Card } from '@/components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
          <Accordion
            elements={[
              {
                title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
                body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!`
              },
              {
                title: "Lorem ipsum dolor sit amet consectetur?",
                body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!`
              },
            ]}
          />

          <Button
            text="Click Me!"
            on_click={ () => {
                let res = prompt("button pressed");
                console.log(res);
              }
            }
          />

          <Link
            text="Link me!"
            href="https://www.cmpsc.uk"
            target="_blank"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <Card
              name='Joseph'
              position='Treasurer'
              img='joseph.jpg'
              alt='joseph'
            />

            <Card
              name='Joseph'
              position='Treasurer'
              img='joseph.jpg'
              alt='joseph'
            />

            <Card
              name='Joseph'
              position='Treasurer'
              img='joseph.jpg'
              alt='joseph'
            />

            <Card
              name='Joseph'
              position='Treasurer'
              img='joseph.jpg'
              alt='joseph'
            />
          </div>

        </div>

        <div className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center justify-between">
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

        <Footer/>
      </div>
    </main>
  );
}
