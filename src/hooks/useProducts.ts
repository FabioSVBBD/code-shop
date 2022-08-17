import { useEffect, useState } from 'react';
import { mock } from '../data/mock';
import { ProductDTO } from '../types';

export const useProducts = (key: string) => {
  const [data, setData] = useState<ProductDTO[]>(mock[key] || []);

  useEffect(() => {
    setData(mock[key] || []);
  }, [key]);

  return data;
};
