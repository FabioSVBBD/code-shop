import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Body, Product } from '../components';
import { useProducts } from '../hooks';
import { routes } from '../router';

export const StoreOutlet = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const products = useProducts(language || '');

  useEffect(() => {
    if (language && !(language in routes)) {
      navigate('/*');
    }
  }, [language, navigate]);

  return (
    <Body>
      <h1 className="capitalize">{language} Goods</h1>

      <article className="flex flex-col w-full my-8 sm:flex-row sm:w-11/12">
        <section id="filters" className="w-full py-4 sm:py-0 sm:w-56">
          <section className="py-6 text-sm text-black bg-yellow-300 vertical-text">
            TODO:filters
          </section>
        </section>

        <section className="flex flex-wrap justify-center w-11/12 mx-auto sm:w-full gap-x-6 gap-y-4">
          {products.map((product) => (
            <Product
              src={product.src}
              title={product.title}
              subtext={product.subtext}
              price={product.price}
              oldPrice={product.oldPrice}
              delta={product.delta}
              primaryCTA="Add to cart"
              secondaryCTA="Share"
              onPrimaryClick={() => {}}
              onSecondaryClick={() => {}}
            />
          ))}
        </section>
      </article>
    </Body>
  );
};
