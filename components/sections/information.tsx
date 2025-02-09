import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H2 } from '../ui/title';
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { Map } from '../ui/map';
import { BigBlink, DiscordBlink } from '../ui/blink';
import Link from 'next/link';

export const Information = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center pt-24 px-12" id="info">
      <H2 text="Looking forward to seeing you!" />
      <p className="text-center px-4">
        <FontAwesomeIcon icon={faCalendar} />
        {} <strong>[Tentative date*]</strong> Saturday 7th - Sunday 8th of February 2026
      </p>

      <p className="text-center px-4">
        <FontAwesomeIcon icon={faMap} />
        {} Windsor Building, Royal Holloway, University of London
      </p>

      <div className="mt-4 mb-4">
        <BigBlink text="Get Tickets!" href="https://forms.gle/YxL3RfYLfMbdYmgN6" target="_blank" />
      </div>

      <div className="mt-4 mb-4">
        <DiscordBlink
          text="Join our Discord!"
          href="https://discord.gg/XptvsDZwXc"
          target="_blank"
        />
      </div>

      <p className="w-3/4 text-lg tracking-tight lg:w-1/2 lg:text-xl py-10">
        Royal Hackaway is Royal Holloway&apos;s annual hackathon, open to university students from
        the UK and around the world! Spend the 24 hours as a team working together on a project,
        attend any of our workshops, talks or mini-events, and work together to create the coolest
        project!
      </p>

      <p className="mt-2 ml-2 mr-2 mb-2">
        <Link href={'https://www.instagram.com/royalhackaway/'} target="_blank" className="mt-2">
          <FontAwesomeIcon size="xl" icon={faInstagram} />
        </Link>

        <Link
          href={'https://maps.app.goo.gl/7neALzxuHu5iQEMw7'}
          target="_blank"
          className="mt-2 ml-2"
        >
          <FontAwesomeIcon size="xl" icon={faMapPin} />
        </Link>
      </p>

      <Map />
    </div>
  );
};
