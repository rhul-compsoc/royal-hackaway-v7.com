interface Props {
    text: string;
    href: string;
    target?: string;
};

export const Blink: React.FC<Props> = ({ text, href, target }): JSX.Element => {
  return (
    <a
      className="inline-block rounded border bg-primary px-12 py-3 text-sm font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none hover:opacity-75 active:text-text-white mt-2"
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};

export const BigBlink: React.FC<Props> = ({ text, href, target }): JSX.Element => {
  return (
    <a
      className="inline-block rounded border bg-primary px-24 py-6 text-xl font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none hover:opacity-75 active:text-text-white mt-2"
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};