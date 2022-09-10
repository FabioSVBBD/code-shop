import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background } from '../components';
import { Button } from '../components/Button';
import { SummaryProduct } from '../components/SummaryProduct';
import { AppContext } from '../context/app-context';
import { mock } from '../data/mock';
import { BasketService } from '../services';

export const Checkout = () => {
  const { basket } = useContext(AppContext);
  // const navigate = useNavigate();

  const getSrc = (name: string) => {
    return Object.values(mock)
      .flat(1)
      .find((dto) => dto.title === name)?.src;
  };

  const total = useMemo(() => BasketService.getTotalCost(basket), [basket]);
  const currency = useMemo(() => BasketService.getCurrency(basket), [basket]);

  return (
    <Background>
      <article className="flex flex-col justify-between w-full min-h-screen p-4 text-base text-center">
        <h1 className="text-4xl font-bold uppercase text-violet-700 drop-shadow-lg">
          Checkout
        </h1>

        <section className="flex flex-col justify-between flex-grow-[0.5] shadow-md p-2 rounded-md text-right">
          <section className="flex flex-col gap-y-4">
            {basket.map((product) => (
              <SummaryProduct
                key={`product_${product.name}`}
                src={getSrc(product.name)}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
                currency={product.currency}
              />
            ))}
          </section>

          <p className="flex items-end justify-end drop-shadow-2xl">
            total
            <mark className="px-4 py-1 ml-2 text-lg font-bold text-white rounded-md bg-violet-700 w-fit">
              {currency} {total}
            </mark>
          </p>
        </section>
        <Button size="fit" onClick={() => {}}>
          Continue
        </Button>
      </article>
    </Background>
  );
};
