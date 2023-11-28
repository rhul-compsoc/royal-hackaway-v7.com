import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2 } from "./title";
import { faCalendar, faMap } from "@fortawesome/free-regular-svg-icons";

interface Props {

}

export const Information: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24">
      <H2 text="Information"/>
      <span>
        <FontAwesomeIcon icon={faCalendar} />
        <p>Saturday the 3rd till Sunday the 4th of February 2024</p>
      </span>

      <span>
        <FontAwesomeIcon icon={faMap} />
        <p>Windsor Building, Royal Holloway, University of London</p>
      </span>

    </div>
  );
};