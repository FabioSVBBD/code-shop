import { trimAlpha } from '../helpers';
import { ProductDTO } from '../types';
import { Product } from '../types/app';

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

export const BasketService = {
  addToBasket,
  removeFromBasket,
};
