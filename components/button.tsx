interface Props {
  text: string;
  on_click: () => void;
}

export const Button: React.FC<Props> = ({ text, on_click }): JSX.Element => {
  return (
    <button
      className="inline-block rounded border bg-primary px-12 py-3 text-sm font-medium text-text-white hover:bg-accent focus:bg-accent focus:outline-none active:text-text-white"
      onClick={on_click}
    >
      {text}
    </button>
  );
};
