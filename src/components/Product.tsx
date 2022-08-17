import { Button } from './Button';

interface Config {
  src: string;
  title: string;
  subtext: string;
  price: string;
  oldPrice: string;
  delta: string;
  badge?: {
    text: string;
    color: 'green' | 'purple';
  };
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export const Product: React.FC<Config> = ({
  src,
  title,
  subtext,
  price,
  oldPrice,
  delta,
  badge,
  primaryCTA,
  secondaryCTA,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <article className="flex flex-col bg-black/[.1] card-width text-base sm:text-lg rounded-b-xl rounded-t-sm shadow-lg shadow-gray-800/20">
      <section className="overflow-hidden rounded-t-sm h-96">
        <img
          src={src}
          alt={title}
          className="object-cover w-full h-full transition-all bg-cover hover:scale-105"
        />
      </section>

      <section className="p-4">
        <h5>{title}</h5>
        <h6 className="mb-4 text-xs text-gray-300/90 sm:text-sm">{subtext}</h6>

        <section className="flex items-end gap-x-2">
          <p>{price}</p>
          <p className="text-sm line-through sm:text-base text-gray-300/90">
            {oldPrice}
          </p>
          <p className="text-sm text-green-300 sm:text-base drop-shadow-md">
            {delta}
          </p>
        </section>

        <footer className="flex flex-wrap mt-2 gap-x-4 gap-y-2">
          <Button type="secondary" size="expanding" onClick={onSecondaryClick}>
            {secondaryCTA}
          </Button>
          <Button size="expanding" onClick={onPrimaryClick}>
            {primaryCTA}
          </Button>
        </footer>
      </section>
    </article>
  );
};
