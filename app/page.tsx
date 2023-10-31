'use client'

import { Accordion, Element } from '@/components/accordion'
import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  );
}
