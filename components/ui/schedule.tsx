export interface Event {
  time: string;
  title: string;
  description: string;
}

interface Props {
  events: Event[];
}

export const Schedule: React.FC<Props> = ({ events }): JSX.Element => {
 return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right font-bold">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-gray-900">
              Time
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-gray-900">
              Event
            </th>
          </tr>
        </thead>

        <tbody className="divide-y text-center divide-gray-200">
          {events.map((event, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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
}
