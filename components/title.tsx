interface Props {
  text: string;
}

export const H2: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <h2
      className="text-center mb-8 mt-8 text-4xl font-bold tracking-tight text-text-black sm:text-5xl"
    >
      {text}
    </h2>
  );
};

export const H3: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <h3
      className="text-center mb-6 mt-6 text-3xl font-bold tracking-tight text-text-black sm:text-5xl"
    >
      {text}
    </h3>
  );
};

export const H4: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <h4
      className="text-center mb-4 mt-4 text-xl font-medium tracking-tight text-text-black sm:text-4xl"
    >
      {text}
    </h4>
  );
};