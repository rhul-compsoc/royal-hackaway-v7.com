import { Blink } from "./blink";
import { Sponsor } from "./sponsor";
import { H2, H3 } from "./title";
import stand_out_stickers_logo from "@/public/stand_out_stickers_logo.svg"

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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Sponsor
              name="Stand Out Stickers"
              img={stand_out_stickers_logo}
              alt="Stand Out Stickers Logo"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto w-fit">
          <Blink text="Become a sponsor!" href="" target="_blank"/>
        </div>
      </div>
    </div>
  );
};
