import classNames from 'classnames';

interface Config {
  type?: 'primary' | 'secondary';
  size?: 'fit' | 'expanding';
  disabled?: boolean;
  children: any;
  onClick: () => void;
}

export const Button: React.FC<Config> = ({
  type = 'primary',
  size = 'fit',
  disabled = false,
  children,
  onClick,
}) => {
  const buttonClass = classNames(
    'border-2 border-solid rounded-lg px-6 py-1 transition-all hover:drop-shadow-md min-w-fit',
    type === 'primary'
      ? 'text-white bg-violet-700 border-violet-700 hover:bg-violet-600 hover:border-violet-600'
      : 'text-violet-700 border-violet-700 hover:text-violet-600 hover:border-violet-600',
    {
      'grayscale opacity-60': disabled,
      'flex-grow': size === 'expanding',
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
