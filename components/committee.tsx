import { Card } from "./card";
import { H2 } from "./title";
import zak from "@/public/zak.png"
import sinan from "@/public/sinan.png"
import joseph from "@/public/joseph.jpg"
import jacob from "@/public/jacob.jpg"
import artem from "@/public/artem.jpg"
import natan from "@/public/natan.jpg"
import abdi from "@/public/abdi.png"
import charley from "@/public/charley.jpg"
import ole from "@/public/ole.jpg"

export const Committee = () => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="team">
      <H2 text="Meet the Team!"/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <Card
          name='Zak'
          position='President'
          img={zak}
          alt='zak'
        />

        <Card
          name='Sinan'
          position='Vice President'
          img={sinan}
          alt='sinan'
        />

        <Card
          name='Joseph'
          position='Treasurer'
          img={joseph}
          alt='joseph'
        />

        <Card
          name='Jacob'
          position='Events Director'
          img={jacob}
          alt='jacob'
        />

        <Card
          name='Artem'
          position='Secretary'
          img={artem}
          alt='artem'
        />

        <Card
          name='Natan'
          position='Promotions Director'
          img={natan}
          alt='natan'
        />

        <Card
          name='Abdi'
          position='Competitions Director'
          img={abdi}
          alt='abdi'
        />

        <Card
          name='Charley'
          position='Charity and Welfare Director'
          img={charley}
          alt='charley'
        />

        <Card
          name='Ole'
          position='First Year Rep'
          img={ole}
          alt='ole'
        />
      </div>
    </div>
  );
}