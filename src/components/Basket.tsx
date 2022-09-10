import classNames from 'classnames';
import { useRef, useMemo, useState } from 'react';
import { Basket as BasketImage } from '../assets';
import { Product } from '../types/app';

interface BasketProps {
  products: Product[];
}

export const Basket: React.FC<BasketProps> = ({ products }) => {
  const basketImageRef = useRef<HTMLImageElement>(null);
  const [basketOpen, setBasketOpen] = useState(false);

  const top = useMemo(
    (): number => // @ts-ignore TODO: remove the ignore
      basketImageRef.current?.parentNode?.getBoundingClientRect() || 80,
    [basketImageRef]
  );

  const basketClass = classNames(
    'absolute bg-black/[.6] right-0 transition-all overflow-hidden rounded-bl-md ',
    basketOpen ? 'w-full px-2 py-4' : 'w-0 p-0'
  );

  return (
    <>
      <img
        ref={basketImageRef}
        src={BasketImage}
        alt="basket"
        className="h-8"
        onClick={() => setBasketOpen(!basketOpen)}
      />
      {/* TODO: display grid */}
      <ul
        className={basketClass}
        style={{
          top: top,
        }}
      >
        <li className="flex justify-between text-base whitespace-nowrap">
          <p className="w-1/2">Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p className="opacity-0">X</p>
        </li>
        {products.map((product) => (
          <li
            key={`product_${product.name}`}
            className="flex justify-between text-sm whitespace-nowrap"
          >
            <p className="w-1/2">{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <p>X</p>
          </li>
        ))}
      </ul>
    </>
  );
};
