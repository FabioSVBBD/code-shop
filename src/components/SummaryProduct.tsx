interface SummaryProduct {
  src: string;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

export const SummaryProduct: React.FC<SummaryProduct> = ({
  src,
  name,
  quantity,
  price,
  currency,
}) => {
  return (
    <section className="flex justify-between gap-x-4 bg-black/[.1] card-width text-base sm:text-lg rounded-lg shadow-lg shadow-gray-800/20 p-2 pr-4">
      <img src={src} alt="bjarne" className="w-20 h-20 rounded-md" />

      <section className="flex flex-col items-end justify-between text-right">
        <p className="text-base">{name}</p>
        <p className="text-sm text-green-300 drop-shadow-2xl">
          {quantity} x {currency} {price}
        </p>
        <mark className="px-2 text-lg font-bold rounded-sm bg-white/80 text-violet-700 w-fit">
          {currency} {price * quantity}
        </mark>
      </section>
    </section>
  );
};
