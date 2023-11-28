import { Link } from "./link";
import { H2, H3 } from "./title";

interface Props {

}

export const Sponsors: React.FC<Props> = (): JSX.Element => {
  return (
    <div>
      <H2 text="Meet the Sponsors!"/>
      <div>
        {/* Platinum */}
        <div>
          <H3 text="Platinum"></H3>
        </div>
        {/* Gold */}
        <div>
          <H3 text="Gold"></H3>
        </div>
        {/* Silver */}
        <div>
          <H3 text="Silver"></H3>
        </div>
        {/* Bronze */}
        <div>
          <H3 text="Bronze"></H3>
        </div>
        {/* Supporter */}
        <div>
        <H3 text="Supporter"></H3>
        </div>
        {/* Become a Sponsor Button */}
      </div>

      <div>
        <Link text="Become a sponsor!" href="" target="_blank"/>
      </div>
    </div>
  );
};
