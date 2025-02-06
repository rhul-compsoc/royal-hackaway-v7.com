import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  img: StaticImageData;
  alt: string;
  href: string;
  className?: string;
}

export const Sponsor: React.FC<Props> = ({ name, img, alt, href, className }): JSX.Element => {
  return (
    <div className={className}>
      <Link href={href} target="_blank">
        <Image alt={alt} src={img} className="h-32 w-auto object-fit" />
      </Link>
    </div>
  );
};
