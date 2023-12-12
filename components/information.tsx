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
    <div className="relative flex flex-col min-h-[50%] items-center pt-24">
      <H2 text="Information"/>
      <p>
        <FontAwesomeIcon icon={faCalendar} />
        {} Saturday 27th - Sunday 28th of January 2024
      </p>

      <p>
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

      <p className="mt-2 ml-2 mr-2 mb-2">
        <Link
          href={"https://dc.cmpsc.uk"}
          target="_blank"
          className="ml-2 mr-2"
        >
          <FontAwesomeIcon size="xl" icon={faDiscord} />
        </Link>

        <Link
          href={"https://www.instagram.com/rhulcompsoc/?hl=en"}
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