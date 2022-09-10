import { trimAlpha } from '../helpers';
import { ProductDTO } from '../types';
import { Product } from '../types/app';
import { CacheService } from './cache.service';

interface ProductObject {
  [key: string]: Product;
}

const addToBasket = (
  basket: Product[],
  productDTO: ProductDTO,
  update: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  const products = basket.reduce<ProductObject>(
    (state, product) => ({
      ...state,
      [product.id]: product,
    }),
    {}
  );

  products[productDTO.title] = {
    id: productDTO.title,
    name: productDTO.title,
    price: Number(trimAlpha(productDTO.price)),
    currency: 'ZAR',
    quantity: (products[productDTO.title]?.quantity || 0) + 1,
  };

  update(Object.values(products));
};

const removeFromBasket = () => {};

const getTotalCost = (basket: Product[]): number => {
  return (
    basket.reduce<number>((prev, curr) => {
      return prev + curr.price * 100 * curr.quantity;
    }, 0) / 100
  );
};

const getCurrency = (basket: Product[]): string => {
  const [product] = basket;

  if (product) {
    return product.currency;
  }

  return '';
};

export const BasketService = {
  addToBasket,
  removeFromBasket,
  getTotalCost,
  getCurrency,
};
