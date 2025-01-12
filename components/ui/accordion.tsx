export interface Element {
  title: string;
  body: string;
}

interface Props {
  elements?: Element[];
}

export const Accordion: React.FC<Props> = ({ elements }): JSX.Element => {
  return (
    <div className="space-y-4 w-full px-5 sm:px-10 md:w-3/4 md:px-0 lg:w-2/3">
      {elements &&
        elements.map((element, index) => (
          <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-primary hover:bg-accent focus:bg-accent outline-none hover:opacity-75 p-4 text-text-white">
              <h2 className="font-medium">{element.title}</h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-text-black">{element.body}</p>
          </details>
        ))}
    </div>
  );
};
