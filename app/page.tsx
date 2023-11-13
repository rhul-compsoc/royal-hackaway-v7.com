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

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col min-h-screen items-center justify-between p-24">
        <Image alt="Hackaway Photo"
          src={background}
          placeholder="blur"
          fill
          className="object-cover blur brightness-50" />
        <div className="w-full pt-10">
          <Image alt="Hackaway V7 Logo" src={logo} className="blur-none drop-shadow-[4px_4px_rgba(217,91,23,.75)] mx-auto lg:w-1/2 w-3/4" />
        </div>
        <div className="w-full blur-none drop-shadow-[4px_4px_rgba(217,91,23,.75)]">
          <div className="mx-auto lg:pl-20 lg:mx-0 pt-20 w-fit">
            <CountdownTimer date={new Date(2024, 1, 3, 10)} />
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen items-center justify-between p-24">
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

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
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

      <div className="flex-col min-h-screen items-center justify-between p-96">
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
    </main>
  );
}
