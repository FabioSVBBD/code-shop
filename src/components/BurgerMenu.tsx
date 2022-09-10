import classNames from 'classnames';
import { useRef, useState } from 'react';
import './components.css';

interface Config {
  className?: string;
  options?: JSX.Element[];
}

export const BurgerMenu: React.FC<Config> = ({ className, options }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLElement>(null);

  const burgerClass = classNames(
    'space-y-1 flex flex-col items-center cursor-pointer transition-all-children',
    className
  );

  const listClass = classNames(
    'absolute left-0 flex flex-col w-full text-center bg-black/[.6] rounded-br-md overflow-hidden transition-all',
    menuOpen ? 'w-full' : 'w-0'
  );

  const firstLine = classNames('w-10 h-1 bg-white rounded-lg sm:bg-gray-800', {
    'burger-menu-first-line-rotate': menuOpen,
  });

  const middleLine = classNames('h-1 bg-white rounded-lg sm:bg-gray-800 w-9', {
    hidden: menuOpen,
  });

  const lastLine = classNames('w-10 h-1 bg-white rounded-lg sm:bg-gray-800', {
    'burger-menu-last-line-rotate': menuOpen,
  });

  return (
    <>
      <section
        ref={burgerRef}
        className={burgerClass}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <div className={firstLine} />
        <div className={middleLine} />
        <div className={lastLine} />
      </section>

      <ul
        className={listClass}
        style={{
          // @ts-ignore TODO: remove the ignore
          top: burgerRef.current?.parentNode?.getBoundingClientRect().height,
        }}
      >
        {options?.map((option, index) => (
          <li
            key={`burger_${option.key}_${index}`}
            className="border-b-2 border-black/[.2] last:border-b-0 flex items-center py-2 justify-center"
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};
