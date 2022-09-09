import { Outlet, useOutlet } from 'react-router-dom';
import { Background, Header, LanguageLogo, Footer } from '../components';
import {
  Angular,
  Cpp,
  CSharp,
  Golang,
  Java,
  Javascript,
  Mongo,
  Python,
  Ruby,
  Rust,
  Svelte,
  TypeScript,
} from '../assets';

export const Store = () => {
  const outlet = useOutlet();

  return (
    <Background orientation="column">
      <Header />
      {outlet ? (
        <Outlet />
      ) : (
        <section className="flex flex-wrap items-center w-full justify-evenly">
          <LanguageLogo src={Python} alt="python" target="/store/python" />
          <LanguageLogo src={Cpp} alt="c++" target="/store/c++" />
          <LanguageLogo src={Golang} alt="golang" target="/store/golang" />
          <LanguageLogo
            src={Javascript}
            alt="javascript"
            target="/store/javascript"
          />
          <LanguageLogo src={Rust} alt="rust" target="/store/rust" />
          <LanguageLogo src={Angular} alt="angular" target="/store/angular" />
          <LanguageLogo src={CSharp} alt="C#" target="/store/c-sharp" />
          <LanguageLogo src={Java} alt="java" target="/store/java" />
          <LanguageLogo src={Ruby} alt="ruby" target="/store/ruby" />
          <LanguageLogo src={Svelte} alt="svelte" target="/store/svelte" />
          <LanguageLogo
            src={TypeScript}
            alt="typescript"
            target="/store/typescript"
          />
          <LanguageLogo src={Mongo} alt="mongo" target="/store/mongo" />
        </section>
      )}
      <Footer />
    </Background>
  );
};
