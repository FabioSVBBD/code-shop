import { useEffect, useState } from 'react';
import { NotificationStream } from './components/NotificationStream';
import { AppProvider } from './context/app-context';
import { Router } from './router';
import { CacheService } from './services';
import { Product } from './types/app';

export const App = () => {
  const [basket, setBasket] = useState<Product[]>(
    CacheService.get<Product[]>(CacheService.basketKey) || []
  );

  useEffect(() => {
    CacheService.set(CacheService.basketKey, basket);
  }, [basket]);

  return (
    <>
      <NotificationStream />
      <AppProvider basket={basket} updateBasket={setBasket}>
        <Router />
      </AppProvider>
    </>
  );
};
