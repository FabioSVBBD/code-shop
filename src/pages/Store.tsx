import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BackArrow } from '../assets';
import { Background } from '../components';
import { routes } from '../router';

export const Store = () => {
  const { language } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (language && !(language in routes)) {
      navigate('/*');
    }
  }, [language, navigate]);

  return (
    <Background>
      <section className="flex gap-4 items-center hover:gap-6 transition-all">
        <img
          src={BackArrow}
          alt="<"
          onClick={() => navigate(-1)}
          className="h-12 transition-all hover:cursor-pointer hover:h-16"
        />
        <h1>{language} Page</h1>
      </section>
    </Background>
  );
};
