import { Bjarne1 } from '../assets';
import { Button } from './Button';

// Badge
// title
// sub title
// price
// old price
// delta
// primary cta (add to cart / buy now)
// secondary cta (like / save for later / share / compare)

export const Product = () => {
  return (
    <article className="flex flex-col bg-black/[.1] card-width text-base sm:text-lg rounded-b-xl rounded-t-sm shadow-lg shadow-gray-800/20">
      <section className="overflow-hidden rounded-t-sm">
        <img
          src={Bjarne1}
          alt="Bjarne"
          className="transition-all bg-cover hover:scale-105"
        />
      </section>

      <section className="p-4">
        <h5>Bjarne Stroustrup T-Shirt</h5>
        <h6 className="mb-4 text-xs text-gray-300/90 sm:text-sm">
          He's the dude that made C++
        </h6>

        <section className="flex items-end gap-x-2">
          <p>R499.99</p>
          <p className="text-sm line-through sm:text-base text-gray-300/90">
            R899.99
          </p>
          <p className="text-sm text-green-300 sm:text-base drop-shadow-md">
            -R400.00
          </p>
        </section>

        <footer className="flex flex-wrap mt-2 gap-x-4 gap-y-2">
          <Button type="secondary" size="expanding">
            Share
          </Button>
          <Button size="expanding">Add to Cart</Button>
        </footer>
      </section>
    </article>
  );
};
