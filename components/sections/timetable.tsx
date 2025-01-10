import { Schedule } from './schedule';
import { H2, H4, H6 } from '../ui/title';

export const Timetable = (): JSX.Element => {
  return (
    <div
      className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center min-h-[50%] justify-between"
      id="schedule"
    >
      <H2 text="Event Schedule" />
      <div className="overflow-x-auto rounded-lg border-gray-200 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto place-content-center">
        {/* Place Schedule components in here! */}
      </div>
      <H4 text='Cooking up events!' />
    </div>
  );
};
