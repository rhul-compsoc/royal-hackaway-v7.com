import { Schedule } from "./schedule";
import { H2, H6 } from "../ui/title";

export const Timetable = (): JSX.Element => {
  const dayOneEvents = [
    {
      time: "8:30",
      title: "Registration",
      description: (
        <span>
          Open doors to hackers!
          <br />
          Bring along your tickets and laptops.
        </span>
      ),
    },
    {
      time: "9:30",
      title: "Opening Ceremony",
    },
    {
      time: "10:00",
      title: "💻 Hacking starts 💻",
    },
    {
      title: "Team Building",
    },
    {
      time: "13:00",
      title: "Lunch",
    },
    {
      title: "*Mini events TBC*",
    },
    {
      time: "19:30",
      title: "Dinner (Pizza) 🍕",
    },
  ];

  const dayTwoEvents = [
    { time: "8:00", title: "Breakfast" },
    { time: "12:30", title: "🛑 Hacking ends 🛑" },
    {
      title: "Start presentations",
      description:
        "Spend the hour uploading your work onto DevPost and setting up your desk for people to see/judge your work at the Project Fair.",
    },
    { time: "13:00", title: "Lunch" },
    {
      time: "14:00",
      title: "🎪 Project Fair 🎪",
      description:
        "Show off your project in a 'Science Fair'-esque like display to all the judges and volunteers that come around!",
    },
    {
      time: "15:30",
      title: "🧹 Cleanup Time 🗑️",
      description:
        "Clean up, tidy up, pack up - We're about to decide who wins Royal Hackaway!",
    },
    { time: "16:00", title: "Closing Ceremony" },
    { title: "🏆 Winners announced 🏆" },
    {
      time: (
        <span>
          18:00
          <br />
          (approx)
        </span>
      ),
      title: "End of Hackathon",
    },
  ];

  return (
    <div
      className="relative w-full sm:w-3/4 md:w-2/3 mx-auto mt-20 mb-44 flex-col items-center min-h-[50%] justify-between"
      id="schedule"
    >
      <H2 text="Event Schedule" />
      {
        <div className="overflow-x-auto rounded-lg border-gray-200 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto place-content-center">
          <Schedule day="Saturday 27th - Day 1" events={dayOneEvents} />
          <Schedule day="Sunday 28th - Day 2" events={dayTwoEvents} />
        </div>
      }
      <H6 text={"Mini events TBC soon!"}></H6>
    </div>
  );
};
