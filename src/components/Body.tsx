interface Config {
  children: any;
}

export const Body: React.FC<Config> = ({ children }) => (
  <article className="flex flex-col items-center justify-center flex-grow w-full my-4">
    {children}
  </article>
);
