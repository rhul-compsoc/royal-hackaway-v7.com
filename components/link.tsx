interface Props {
    text: string;
    href: string;
    target?: string;
};

export const Link: React.FC<Props> = ({ text, href, target }): JSX.Element => {
  return (
    <a
      className="inline-block rounded border bg-primary px-12 py-3 text-sm font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none hover:opacity-75 active:text-text-white"
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};
