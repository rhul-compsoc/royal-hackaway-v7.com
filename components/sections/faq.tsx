import { Accordion } from '../ui/accordion';
import { BigDiscordBlink } from '../ui/blink';
import { H2, H4 } from '../ui/title';

export const FAQ = (): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-[50%] items-center py-24" id="faq">
      <H2 text="Frequently Asked Questions" />
      <Accordion
        elements={[
          {
            title: 'What is a Hackathon?',
            body: `Hackathons are programming competitions where
            people work in teams to make a project over a 24 hour event. The overall
            winner will be the 'coolest project', but keep an eye out for sub-categories
            your team could compete in too, or just make a project for fun!`,
          },
          {
            title: 'Who can attend?',
            body: `Anyone who is 18+ and is a current student or has
            graduated in the past six months.`,
          },
          {
            title: 'How much does it cost?',
            body: `£0 and your weekend. Royal Hackaway is free to attend,
            thanks to all the support provided by our sponsors!`,
          },
          {
            title: 'Can I start before I join?',
            body: `Absolutely not! While you can explore ideas,
            you cannot start implementing your project before the specified time.`,
          },
          {
            title: 'Can I go home overnight / leave early?',
            body: `The short answer is yes! If you have a hotel room booked or you need to leave for any reason,
            please make sure you check-out and check back in when you return.
            This is for fire safety and accountability reasons.`,
          },
          {
            title:
              'I have additional requirements or accessibility needs, is the event suitable for me?',
            body: `The venue is wheelchair accessible and has disabled toilets.
            There are gender neutral toilets in the library which is next door.
            There will be a quieter hacking room available for individuals or teams who require a calmer space to work,
            where noise must be kept low,
            and you're welcome to skip any events in the main auditorium or workshops if you don't feel comfortable in large or busy spaces.
            If you have any questions, feel free to message any hackaway staff on our discord server!
            You can also find out more information about the Windsor building here: https://www.accessable.co.uk/venues/windsor-building`,
          },
          {
            title: 'Do I have to be studying Computer Science?',
            body: `Nope! Although doing Computer Science or
            knowing how to code helps, it is not required.`,
          },
          {
            title: 'Do I need to come with a team?',
            body: `If you don't have a team in mind before you come,
            you can make a team when you arrive, so no pressure!
            Just note that team sizes are limited to a maximum
            of four hackers per team.`,
          },
          {
            title: 'Who owns my project?',
            body: `All code is owned by you and your team members!
            We recommend putting your project on GitHub, and making it open source.`,
          },
        ]}
      />
      <div className="pt-10">
        <H4 text="Got another question?" />
        <BigDiscordBlink
          text="Join our Discord!"
          href="https://discord.gg/XptvsDZwXc"
          target="_blank"
        />
      </div>
    </div>
  );
};
