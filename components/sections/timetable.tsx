import { Schedule } from "./schedule";
import { H2, H6 } from "../ui/title";

export const Timetable = (): JSX.Element => {
  const dayOneEvents = [
    {
      time: "8:30",
      title: <s>Registration</s>,
      description: (
        <>
          Open doors to hackers!
          <br />
          Bring along your tickets and laptops.
        </>
      ),
    },
    {
      time: "9:30",
      title: <s>Opening Ceremony</s>,
    },
    {
      time: "10:00",
      title: <s>💻 Hacking starts 💻</s>,
    },
    {
      title: <s>Team Building</s>,
    },
    {
      time: "12:00",
      title: (
        <s>
          Sociable Code Workshop with{" "}
          <a
            style={{ color: "blue" }}
            target="_blank"
            href="https://www.hackathons.org.uk/"
          >
            HackathonsUK
          </a>
        </s>
      ),
    },
    {
      time: "13:00",
      title: (
        <s>
          GitHub Copilot Workshop with{" "}
          <a style={{ color: "blue" }} target="_blank" href="https://mlh.io">
            MLH
          </a>
        </s>
      ),
    },
    {
      time: "14:00",
      title: <s>Lunch</s>,
    },
    {
      time: "15:00",
      title: (
        <s>
          Embedded Programming Workshop with{" "}
          <a
            href="https://linktr.ee/makerssoc"
            target="_blank"
            style={{ color: "blue" }}
          >
            RHUL Makers&apos; Society
          </a>
        </s>
      ),
      description: "Learn how to program microcontrollers with Arduino!",
    },
    {
      time: "16:00",
      title: <s>Symbolic AI: Declarative Programming with PDDL</s>,
    },
    {
      time: "17:00",
      title: (
        <s>
          Wikipedia Races (
          <a style={{ color: "blue" }} target="_blank" href="https://mlh.io">
            MLH
          </a>
          )
        </s>
      ),
    },
    {
      time: "18:00",
      title: (
        <s>
          Cup Stacking (
          <a
            href="https://www.hackathons.org.uk/"
            target="_blank"
            style={{ color: "blue" }}
          >
            HackathonsUK
          </a>
          )
        </s>
      ),
    },
    {
      time: "19:00",
      title: <>Dinner (Pizza) 🍕</>,
    },
    {
      time: "20:00",
      title: "Taskmaster (ft. Prof. Dave Cohen)",
      description: (
        <>
          Taskmaster Compete in teams to perform a series of bizzare tasks. (As
          seen on TV!)
          <br />
          This year we&apos;re featuring the legendary Dave Cohen as our
          Taskmaster!
        </>
      ),
    },
    { time: "21:00", title: "Pub Quiz 🍺" },
    {
      time: "22:00",
      title: "Carrot in a Box 🥕📦❓",
      description:
        "A game of wits and bluffing to see if you can trick the other person into getting the carrot within your box.",
    },
  ];

  const dayTwoEvents = [
    {
      time: "0:00",
      title: "PowerPoint™ Karaoke",
      description: (
        <>
          Deliver improvised Microsoft™ PowerPoint™ presentations with slides
          you&apos;ve never seen before!
        </>
      ),
    },
    { time: "5:00", title: "Delirious Debugging" },
    { time: "8:00", title: "Breakfast" },
    {
      time: "10:00",
      title: (
        <span title="compsoc table tennis social when">
          🏓 Last Minute Table Tennis 🏓
          <span style={{ color: "white" }}>hi royce</span>
        </span>
      ),
      description: "Relax and decompress with some table tennis!",
    },
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
      description: (
        <>
          Show off your project in a &quot;Science Fair&quot;-esque like display
          to all the judges and volunteers that come around!
        </>
      ),
    },
    {
      time: "15:30",
      title: "🧹 Cleanup Time 🗑️",
      description: (
        <>
          Clean up, tidy up, pack up - We&apos;re about to decide who wins Royal
          Hackaway!
        </>
      ),
    },
    { time: "16:00", title: "Closing Ceremony" },
    { title: "🏆 Winners announced 🏆" },
    {
      time: (
        <>
          18:00
          <br />
          (approx)
        </>
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
      <H6
        text={
          "Timetable for reference only, times may change slightly during event"
        }
      ></H6>
    </div>
  );
};
