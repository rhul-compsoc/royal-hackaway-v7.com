import { Link } from "./link";
import { H2, H3 } from "./title";

interface Props {

}

export const Sponsors: React.FC<Props> = (): JSX.Element => {
  return (
    <div>
      <H2 text="Meet the Sponsors!"/>
      <div>
        <div>
          <H3 text="Platinum"></H3>
        </div>
        <div>
          <H3 text="Gold"></H3>
        </div>
        <div>
          <H3 text="Silver"></H3>
        </div>
        <div>
          <H3 text="Bronze"></H3>
        </div>
        <div>
        <H3 text="Supporter"></H3>
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto w-fit">
          <Link text="Become a sponsor!" href="" target="_blank"/>
        </div>
      </div>
    </div>
  );
};
