import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "./title";
import { faCalendar, faMap } from "@fortawesome/free-regular-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Map } from "./map";
import { Button } from "./button";
import { Bink } from "./bink";
import Link from "next/link";

interface Props {

}

export const Information: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24">
      <H2 text="Information"/>
      <p>
        <FontAwesomeIcon icon={faCalendar} />
        {} Saturday the 3rd till Sunday the 4th of February 2024
      </p>

      <p>
        <FontAwesomeIcon icon={faMap} />
        {} Windsor Building, Royal Holloway, University of London
      </p>

      <Map></Map>

      <Bink
        text="Get Tickets!"
        href=""
        target="_blank"
      >
      </Bink>

      <p className="mt-2 ml-2 mr-2 mb-2">
        <Link
          href={"https://dc.cmpsc.uk"}
          target="_blank"
          className="ml-2 mr-2"
        >
          <FontAwesomeIcon size="xl" icon={faDiscord} />
        </Link>

        <Link
          href={"https://dc.cmpsc.uk"}
          target="_blank"
          className="mt-2"
        >
          <FontAwesomeIcon size="xl" icon={faDiscord} />
        </Link>
      </p>
    </div>
  );
};