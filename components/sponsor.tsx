import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  img: StaticImageData;
  alt: string;
}

export const Sponsor: React.FC<Props> = ({ name, img, alt }): JSX.Element => {
  return (
    <div>
      <Image
        alt={alt}
        src={img}
        className="h-32 w-auto object-fit"
      />
    </div>
  );
};