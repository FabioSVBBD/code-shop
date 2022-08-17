import { useNavigate } from 'react-router-dom';

interface Config {
  src: string;
  alt: string;
  target: string;
}

export const LanguageLogo: React.FC<Config> = ({ src, alt, target }) => {
  const navigate = useNavigate();

  return (
    <img
      src={src}
      alt={alt}
      className="h-16 hover:h-20 hover:cursor-pointer transition-all"
      onClick={() => navigate(target)}
    />
  );
};
