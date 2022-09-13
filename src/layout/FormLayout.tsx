import classNames from 'classnames';
import '../index.css';

interface FormLayoutProps {
  className?: string;
  children: React.ReactFragment | JSX.Element;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  className = '',
}) => {
  const container = classNames('my-auto form-width sm:space-y-2', className);

  return <article className={container}>{children}</article>;
};
