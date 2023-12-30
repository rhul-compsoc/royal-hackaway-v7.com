import { Schedule } from "./schedule";
import { H2, H4 } from "./title";

interface Props {

}

export const Timetable: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center min-h-[50%] justify-between" id="schedule">
      <H2 text="Event Schedule"/>
      {/* dead code smell ew
      <Schedule
        events={[
          {
            time: "17:00",
            title: "Dinner",
            description: "Eat some food! Probably just gonna be a tonne of pizza or something like that."
          },
          {
            time: "20:00",
            title: "Carrot in a Box",
            description: "A long standing tradition! Compete to become the highly respected Carrot in a Box champion."
          },
        ]}
      /> */}
      <H4 text="Coming Soon..."></H4>
    </div>
  );
}