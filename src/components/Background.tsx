interface Config {
  orientation?: 'row' | 'column';
  children?: any;
}

export const Background: React.FC<Config> = ({
  orientation = 'row',
  children,
}) => {
  return (
    <section
      className={`min-h-screen w-full bg-gradient-to-r from-purple-400 to-red-300 flex ${
        orientation === 'column' && 'flex-col'
      } justify-evenly items-center`}
    >
      {children}
    </section>
  );
};
