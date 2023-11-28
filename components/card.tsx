interface Props {
  name: string;
  position: string;
  img: string;
  alt: string;
}

export const Card: React.FC<Props> = ({ name, position, img, alt }): JSX.Element => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt={alt}
        src={img}
        className="h-56 w-full object-cover"
      />

      <div className="bg-primary p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg text-text-white">
          {name}
        </h3>
        <h4 className="mt-0.5 text-lg font-light text-text-white">
          {position}
        </h4>
      </div>
    </article>
  );
}
