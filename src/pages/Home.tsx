import { Cpp, Golang, Javascript, Python, Rust } from '../assets';
import { Background } from '../components';
import { LanguageLogo } from '../components/language-logo';

export const Home = () => {
  return (
    <Background>
      <LanguageLogo src={Python} alt="python" target="store/python" />
      <LanguageLogo src={Cpp} alt="c++" target="store/c++" />
      <LanguageLogo src={Golang} alt="golang" target="store/golang" />
      <LanguageLogo
        src={Javascript}
        alt="javascript"
        target="store/javascript"
      />
      <LanguageLogo src={Rust} alt="rust" target="store/rust" />
    </Background>
  );
};
