import { ReactNode } from "react";

export interface Event {
  time?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

interface Props {
  day: string;
  events: Event[];
}

export const Schedule: React.FC<Props> = ({ day, events }): JSX.Element => {
  return (
    <div className="rounded-lg h-fit border-gray-200 overflow-hidden border mb-8">
      <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right font-bold">
          <tr>
            <th
              colSpan={2}
              className="whitespace-nowrap px-4 py-2 text-gray-900"
            >
              <strong>
                <u>{day}</u>
              </strong>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {events.map((event, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                {event.time}
              </td>
              <td className="px-4 py-2 text-gray-700">
                <div className="whitespace-normal">
                  <span className="font-semibold">{event.title}</span>
                  <br />
                  <span className="">{event.description}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
