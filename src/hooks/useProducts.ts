import { useEffect, useState } from 'react';
import { mock } from '../data/mock';

export const useProducts = (key: string) => {
  const [data, setData] = useState<any[]>(mock[key] || []);

  useEffect(() => {
    setData(mock[key] || []);
  }, [key]);

  return data;
};
