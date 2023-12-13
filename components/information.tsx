import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "./title";
import { faCalendar, faMap } from "@fortawesome/free-regular-svg-icons";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Map } from "./map";
import { BigBlink } from "./blink";
import Link from "next/link";

interface Props {

}

export const Information: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center pt-24 px-12" id="info">
      <H2 text="Royal Holloway's Annual Hackathon is Back!"/>
      <p className="text-center px-4">
        <FontAwesomeIcon icon={faCalendar} />
        {} Saturday 27th - Sunday 28th of January 2024
      </p>

      <p className="text-center px-4">
        <FontAwesomeIcon icon={faMap} />
        {} Windsor Building, Royal Holloway, University of London
      </p>

      <div className="mt-4 mb-4">
        <BigBlink
          text="Get Tickets!"
          href=""
          target="_blank"
        />
      </div>

      <p className="w-3/4 text-lg tracking-tight lg:w-1/2 lg:text-xl py-10">
        Royal Hackaway is Royal Holloway&apos;s annual hackathon, open to university students from the UK and around the world! Spend the 24 hours as a team working together on a project, attend any of our workshops, talks or events, and work together to create the coolest project!
      </p>

      <p className="mt-2 ml-2 mr-2 mb-2">
        <Link
          href={"https://discord.gg/XptvsDZwXc"}
          target="_blank"
          className="ml-2 mr-2"
        >
          <FontAwesomeIcon size="xl" icon={faDiscord} />
        </Link>

        <Link
          href={"https://www.instagram.com/royalhackaway/"}
          target="_blank"
          className="mt-2"
        >
          <FontAwesomeIcon size="xl" icon={faInstagram} />
        </Link>

        <Link
          href={"https://maps.app.goo.gl/7neALzxuHu5iQEMw7"}
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