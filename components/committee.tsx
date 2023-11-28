import { Card } from "./card";
import { H2 } from "./title";

export const Committee = () => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24">
      <H2 text="Meet the team!"/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
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
  );
}