import classNames from 'classnames';
import { useRef, useState } from 'react';

interface Config {
  className?: string;
  options?: JSX.Element[];
}

export const BurgerMenu: React.FC<Config> = ({ className, options }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLElement>(null);

  const burgerClass = classNames(
    'space-y-1 flex flex-col items-center cursor-pointer',
    className
  );

  return (
    <>
      <section
        ref={burgerRef}
        className={burgerClass}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <div className="w-10 h-1 bg-white rounded-lg sm:bg-gray-800" />
        <div className="h-1 bg-white rounded-lg sm:bg-gray-800 w-9" />
        <div className="w-10 h-1 bg-white rounded-lg sm:bg-gray-800" />
      </section>

      {menuOpen && (
        <ul
          className="absolute left-0 flex flex-col w-full text-center bg-black/[.6] rounded-b-md"
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
      )}
    </>
  );
};
