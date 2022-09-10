import { useState } from 'react';
import { NotificationStream } from './components/NotificationStream';
import { AppProvider } from './context/app-context';
import { Router } from './router';
import { Product } from './types/app';

export const App = () => {
  const [basket, setBasket] = useState<Product[]>([]);

  return (
    <>
      <NotificationStream />
      <AppProvider basket={basket} updateBasket={setBasket}>
        <Router />
      </AppProvider>
    </>
  );
};
