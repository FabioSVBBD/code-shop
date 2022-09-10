import React, { useRef, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Basket as BasketImage } from '../assets';
import { Product } from '../types/app';
import { Button } from './Button';
import { ToastService } from '../services';

interface BasketProps {
  products: Product[];
}

export const Basket: React.FC<BasketProps> = ({ products }) => {
  const basketImageRef = useRef<HTMLImageElement>(null);
  const [basketOpen, setBasketOpen] = useState(false);

  useEffect(() => {
    if (products.length === 0 && basketOpen) {
      ToastService.notify({ message: 'Your basket is empty!', duration: 1500 });
    }
  }, [products, basketOpen]);

  const checkoutClicked = () => {
    // go to checkout
  };

  const top = useMemo(
    (): number => // @ts-ignore TODO: remove the ignore
      basketImageRef.current?.parentNode?.getBoundingClientRect() || 80,
    [basketImageRef]
  );

  const total = useMemo(
    (): number =>
      products.reduce<number>((prev, curr) => {
        return prev + curr.price * 100 * curr.quantity;
      }, 0) / 100,
    [products]
  );

  const currency = useMemo((): string => {
    const [product] = products;

    if (product) {
      return product.currency;
    }

    return '';
  }, [products]);

  const container = classNames(
    'absolute bg-black/[.6] right-0 transition-all overflow-hidden rounded-bl-md py-4 text-sm',
    basketOpen ? 'w-full pl-2' : 'w-0 p-0'
  );

  const basketClass = classNames(
    'grid grid-cols-[0.6fr_0.3fr_0.3fr_0.1fr] text-xs',
    '[&>:nth-child(4n)]:text-right [&>:nth-child(2n)]:text-center [&>:nth-child(4n+3)]:text-right [&>*]:whitespace-nowrap'
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

      {products.length > 0 && (
        <section
          className={container}
          style={{
            top: top,
          }}
        >
          <ul className={basketClass}>
            <p className="text-base">Product</p>
            <p className="text-base">Quantity</p>
            <p className="text-base">Price</p>
            <p className="opacity-0">X</p>
            {products.map((product) => (
              <React.Fragment key={`product_${product.name}`}>
                <p>{product.name}</p>
                <p>{product.quantity}</p>
                <p>
                  {product.currency} {product.price}
                </p>
                <p>X</p>
              </React.Fragment>
            ))}
          </ul>

          <footer className="flex items-center justify-between w-full px-4 pt-4 whitespace-nowrap">
            <p className="text-xs">
              Total
              <mark className="px-2 py-1 ml-2 text-base text-white rounded-sm bg-violet-700">
                {currency} {total}
              </mark>
            </p>

            <Button
              type="secondary"
              size="fit"
              onClick={() => checkoutClicked()}
            >
              Checkout
            </Button>
          </footer>
        </section>
      )}
    </>
  );
};
