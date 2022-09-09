import { useNavigate } from 'react-router-dom';

interface Config {
  src: string;
  alt: string;
  target: string;
}

export const LanguageLogo: React.FC<Config> = ({ src, alt, target }) => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center w-28 h-28">
      <img
        src={src}
        alt={alt}
        className="h-16 transition-all hover:h-20 hover:cursor-pointer"
        onClick={() => navigate(target)}
      />
    </section>
  );
};
