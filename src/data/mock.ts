import { Bjarne1, Bjarne2, CppShirt } from '../assets';

export const mock: { [key: string]: any[] } = {
  python: [],
  'c++': [
    {
      src: Bjarne1,
      alt: 'Bjarne Stroustrup T-Shirt',
      title: 'Bjarne Stroustrup T-Shirt',
      subtext: "He's the dude that made C++",
      price: 'R 499.99',
      oldPrice: 'R 699.99',
      delta: '-20%',
    },
    {
      src: Bjarne2,
      alt: 'Another Stroustrup T-Shirt',
      title: 'Another Stroustrup T-Shirt',
      subtext: "He originally wanted to run with 'C With Classes'",
      price: 'R 499.99',
      oldPrice: 'R 699.99',
      delta: '-20%',
    },
    {
      src: CppShirt,
      alt: 'No Class T-Shirt',
      title: 'No Class T-Shirt',
      subtext: 'This is funny because it is true',
      price: 'R 399.99',
      oldPrice: 'R 499.99',
      delta: '-10%',
    },
  ],
  golang: [],
  javascript: [],
  rust: [],
};
