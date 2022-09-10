import { useContext } from 'react';
import { Golang } from '../assets';
import { AppContext } from '../context/app-context';
import { Anchor } from './Anchor';
import { Basket } from './Basket';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  const { basket } = useContext(AppContext);

  return (
    <header className="bg-black/[.6] sm:bg-black/[.2] shadow-md w-full flex px-4 py-2 sm:px-8 items-center justify-between relative">
      <BurgerMenu
        className="sm:hidden"
        options={[
          <Anchor to="/store" className="text-white">
            Store
          </Anchor>,
          <Anchor to="/" className="text-white">
            Home
          </Anchor>,
        ]}
      />

      <img src={Golang} alt="Golang" className="h-16" />

      <ul className="hidden sm:flex gap-x-8">
        <Anchor to="/store">Store</Anchor>
        <Anchor to="/">Home</Anchor>
      </ul>

      <Basket products={basket} />
    </header>
  );
};
