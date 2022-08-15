import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Store } from '../pages';
import { NotFound } from '../pages/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="store/:language" element={<Store />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
