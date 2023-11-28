import { H2 } from "./title";

interface Props {

}

export const Information: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24">
      <H2 text="Information"/>
    </div>
  );
};