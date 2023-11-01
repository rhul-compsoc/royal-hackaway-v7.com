import logo from './v7-logo.png'
import background from './background.png'

import Image from 'next/image'
import CountdownTimer from '@/components/countdown'

export default function Home() {
  return (
    <main>
      <Image alt="Hackaway Photo"
        src={background}
        placeholder="blur"
        fill
        className="object-cover blur brightness-50" />
      <div className="w-full pt-10">
        <Image alt="Hackaway V7 Logo" src={logo} className="blur-none drop-shadow-md mx-auto lg:w-1/2 w-3/4" />
      </div>
      <div className="w-full blur-none">
        <div className="mx-auto lg:pl-20 lg:mx-0 pt-20 w-fit">
          <CountdownTimer date={new Date(2024, 1, 3, 10)} />
        </div>
      </div>
    </main>
  )
}
