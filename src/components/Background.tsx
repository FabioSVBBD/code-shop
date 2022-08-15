interface Config {
  children?: any;
}

export const Background: React.FC<Config> = ({ children }) => {
  return (
    <section className="h-screen w-full bg-gradient-to-r from-purple-400 to-red-300 fixed flex justify-evenly items-center">
      {children}
    </section>
  );
};
