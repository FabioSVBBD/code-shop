import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Config {
  to: string;
  children: any;
  className?: string;
}

export const Anchor: React.FC<Config> = ({ to, children, className }) => {
  const anchorClass = classNames(
    'text-2xl transition-all text-violet-700 drop-shadow-xl hover:text-violet-600 hover:underline',
    className
  );

  return (
    <Link to={to} className={anchorClass}>
      {children}
    </Link>
  );
};
