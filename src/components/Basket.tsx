import classNames from 'classnames';
import { useRef, useMemo, useState } from 'react';
import { Basket as BasketImage } from '../assets';

export const Basket = () => {
  const basketImageRef = useRef<HTMLImageElement>(null);
  const [basketOpen, setBasketOpen] = useState(false);

  const top = useMemo(
    (): number => // @ts-ignore TODO: remove the ignore
      basketImageRef.current?.parentNode?.getBoundingClientRect() || 80,
    [basketImageRef]
  );

  const basketClass = classNames(
    'absolute bg-black/[.6] right-0 transition-all overflow-hidden',
    basketOpen ? 'w-full' : 'w-0'
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

      <section
        className={basketClass}
        style={{
          top: top,
        }}
      >
        Basket content
      </section>
    </>
  );
};
