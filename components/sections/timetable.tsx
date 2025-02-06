import { Schedule } from './schedule';
import { H2, H4, H6 } from '../ui/title';

export const Timetable = (): JSX.Element => {
  const dayOne = [
    {
      time: '8:30',
      title: <>Registration</>,
      description: (
        <>
          Open doors to hackers!
          <br />
          Bring along your tickets and laptops.
        </>
      ),
    },
    {
      time: '9:30',
      title: <>Opening Ceremony</>,
    },
    {
      time: '10:00',
      title: <>💻 Hacking starts 💻</>,
    },
    {
      title: <>Team Building</>,
    },
    {
      time: '12:00',
      title: (
        <>
          How to win a Hackathon with{' '}
          <a style={{ color: 'blue' }} target="_blank" href="https://verdn.com/">
            Verdn
          </a>
        </>
      ),
    },
    {
      time: '13:00',
      title: (
        <>
          Embedded Programming Workshop with{' '}
          <a href="https://linktr.ee/makerssoc" target="_blank" style={{ color: 'blue' }}>
            RHUL Makers&apos; Society
          </a>
        </>
      ),
    },
    {
      time: '14:00',
      title: <>Lunch</>,
    },
    {
      time: '15:00',
      title: (
        <>
          GitHub Copilot Workshop with{' '}
          <a style={{ color: 'blue' }} target="_blank" href="https://mlh.io">
            MLH
          </a>
        </>
      ),
    },
    {
      time: '16:00',
      title: (
        <>
          Geogeuessr with{' '}
          <a style={{ color: 'blue' }}>
            CyberSoc
          </a>
        </>
      ),
    },
    {
      time: '17:00',
      title: <>Dinner (Pizza) 🍕</>,
    },
    {
      time: '18:00',
      title: <>
        Cup Stacking with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://www.hackathons.org.uk/">
          HUK
        </a>
      </>,
    },
    {
      time: '19:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    {
      time: '20:00',
      title: <>
        Taskmaster and Carrot in a Box with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    {
      time: '21:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    {
      time: '23:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
  ];

  const dayTwo = [
    {
      time: '01:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    {
      time: '03:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    {
      time: '05:00',
      title: <>
        Mini-Missions with{' '}
        <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
          Pilksoft
        </a>
      </>,
    },
    { time: '8:00', title: 'Breakfast' },
    {
      time: '11:00',
      title: (
        <>
          Geogeuessr with{' '}
          <a style={{ color: 'blue' }} target="_blank" href="https://pilk.uk/">
            Pilksoft
          </a>
        </>
      ),
    },
    { time: '12:30', title: '🛑 Hacking ends 🛑' },
    {
      title: 'Start presentations',
      description:
        'Spend the hour uploading your work onto DevPost and setting up your desk for people to see/judge your work at the Project Fair.',
    },
    { time: '13:30', title: 'Lunch' },
    {
      time: '14:00',
      title: '🎪 Project Fair 🎪',
      description: (
        <>
          Show off your project in a &quot;Science Fair&quot;-esque like display to all the judges
          and volunteers that come around!
        </>
      ),
    },
    {
      time: '15:30',
      title: '🧹 Cleanup Time 🗑️',
      description: (
        <>Clean up, tidy up, pack up - We&apos;re about to decide who wins Royal Hackaway!</>
      ),
    },
    { time: '16:00', title: 'Closing Ceremony' },
    { title: '🏆 Winners announced 🏆' },
    {
      time: (
        <>
          18:00
          <br />
          (approx)
        </>
      ),
      title: 'End of Hackathon',
    },
  ];

  return (
    <div
      className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center min-h-[50%] justify-between"
      id="schedule"
    >
      <H2 text="Event Schedule" />
      <div className="overflow-x-auto rounded-lg border-gray-200 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto place-content-center">
        <Schedule day="February 8th - Day 1" events={dayOne} />
        <Schedule day="February 9th - Day 2" events={dayTwo} />
      </div>
    </div>
  );
};
