import React, { createContext } from 'react';
import { Product } from '../types/app';

export interface AppContextType {
  basket: Product[];
  updateBasket: React.Dispatch<React.SetStateAction<Product[]>>;
  children?: React.ReactElement<any, any>;
}

// @ts-ignore
const initialAppState: AppContextType = {
  basket: [],
};

export const AppContext = createContext<AppContextType>(initialAppState);

export const AppProvider = ({ children, ...props }: AppContextType) => (
  <AppContext.Provider value={{ ...props }}>{children}</AppContext.Provider>
);
