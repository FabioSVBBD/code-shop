import { Link } from 'react-router-dom';
import { Golang } from '../assets';
import { Anchor } from './Anchor';

export const Header = () => {
  return (
    <header className="bg-black/[.2] shadow-md w-full flex py-2 px-8 items-center justify-between">
      <aside className="w-32">
        <img src={Golang} alt="Golang" className="h-16" />
      </aside>

      <ul className="flex gap-x-8">
        <Anchor to="/store">Store</Anchor>
        <Anchor to="/">Home</Anchor>
      </ul>

      <aside className="w-32 text-xs text-center text-black bg-yellow-300 drop-shadow-md">
        TODO:Basket
      </aside>
    </header>
  );
};
