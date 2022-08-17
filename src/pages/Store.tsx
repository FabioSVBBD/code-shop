import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BackArrow } from '../assets';
import { Background, Product } from '../components';
import { useProducts } from '../hooks';
import { routes } from '../router';

export const Store = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const products = useProducts(language || '');

  useEffect(() => {
    if (language && !(language in routes)) {
      navigate('/*');
    }
  }, [language, navigate]);

  console.log('products', products);

  return (
    <Background orientation="column">
      <section className="flex items-center gap-4 transition-all hover:gap-6">
        <img
          src={BackArrow}
          alt="<"
          onClick={() => navigate(-1)}
          className="h-12 transition-all hover:cursor-pointer hover:h-16"
        />
        <h1>{language} Page</h1>
      </section>

      {products.map((product) => (
        <h2>{product}</h2>
      ))}

      <section className="flex flex-wrap w-[90%] py-8 mx-auto gap-x-8 gap-y-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </Background>
  );
};
