import { Accordion } from "./accordion";
import { H2 } from "./title";

interface Props {

}

export const FAQ: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="faq">
      <H2 text="Frequently Asked Questions"/>
      <Accordion
        elements={[
          {
            title: "What is a Hackathon?",
            body: `Hackathons are programming competitions where
            people work in teams to make a project over a 24 hour event. The overall
            winner will be the &apos;coolest project&apos;, but keep an eye out for sub-categories
            your team could compete in too, or just make a project for fun!`
          },
          {
            title: "Who can attend?",
            body: `Anyone who is 18+ and is a current student or has
            graduated in the past six months.`
          },
          {
            title: "How much does it cost?",
            body: `£0 and your weekend. Royal Hackaway is free to attend,
            thanks to all the support provided by our sponsors!`
          },
          {
            title: "Can I start before I join?",
            body: `Absolutely not! While you can explore ideas,
            you cannot start implementing your project before the specified time.`
          },
          {
            title: "Can I go home overnight / leave early?",
            body: `The short answer is yes! If you have a hotel room booked or you need to leave for any reason,
            please make sure you check-out and check back in when you return.
            This is for fire safety and accountability reasons.`
          },
          {
            title: "Do I have to be studying Computer Science?",
            body: `Nope! Although doing Computer Science or
            knowing how to code helps, it is not required.`
          },
          {
            title: "Do I need to come with a team?",
            body: `If you don't have a team in mind before you come,
            you can make a team when you arrive, so no pressure!
            Just note that team sizes are limited to a maximum
            of five hackers per team.`
          },
          {
            title: "Who owns my project?",
            body: `All code is owned by you and your team members!
            We recommend putting your project on GitHub, and making it open source.`
          },
        ]}
      />
    </div>
  );
};
