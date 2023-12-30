import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  position: string;
  img: StaticImageData;
  alt: string;
}

export const Card: React.FC<Props> = ({ name, position, img, alt }): JSX.Element => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        alt={alt}
        src={img}
        placeholder="blur"
        className="h-56 w-full object-cover"
      />

      <div className="bg-primary p-4 sm:p-6">
        <h3 className="mt-0.5 font-extrabold text-2xl text-text-white">
          {name}
        </h3>
        <h4 className="mt-0.5 text-lg font-light text-text-white">
          {position}
        </h4>
      </div>
    </article>
  );
}
