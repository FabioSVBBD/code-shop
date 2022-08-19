import { Outlet, useOutlet } from 'react-router-dom';
import { Cpp, Golang, Javascript, Python, Rust } from '../assets';
import { Background, Header, LanguageLogo } from '../components';
import { Footer } from '../components';

export const Store = () => {
  const outlet = useOutlet();

  return (
    <Background orientation="column">
      <Header />
      {outlet ? (
        <Outlet />
      ) : (
        <section className="flex items-center w-full justify-evenly">
          <LanguageLogo src={Python} alt="python" target="/store/python" />
          <LanguageLogo src={Cpp} alt="c++" target="/store/c++" />
          <LanguageLogo src={Golang} alt="golang" target="/store/golang" />
          <LanguageLogo
            src={Javascript}
            alt="javascript"
            target="/store/javascript"
          />
          <LanguageLogo src={Rust} alt="rust" target="/store/rust" />
        </section>
      )}
      <Footer />
    </Background>
  );
};
