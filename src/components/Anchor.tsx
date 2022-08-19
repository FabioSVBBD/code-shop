import { Link } from 'react-router-dom';

interface Config {
  to: string;
  children: any;
}

export const Anchor: React.FC<Config> = ({ to, children }) => (
  <Link
    to={to}
    className="text-2xl transition-all text-violet-700 drop-shadow-xl hover:text-violet-600 hover:underline"
  >
    {children}
  </Link>
);
