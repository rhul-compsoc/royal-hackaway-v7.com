interface Props {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ text, onClick }): JSX.Element => {
  return (
    <button
      className="inline-block rounded border bg-primary px-12 py-3 text-sm font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none hover:opacity-75 active:text-text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const BigButton: React.FC<Props> = ({ text, onClick }): JSX.Element => {
  return (
    <button
      className="inline-block rounded border bg-primary px-24 py-6 text-xl font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none hover:opacity-75 active:text-text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
