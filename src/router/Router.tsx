import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Store, NotFound } from '../pages';
import { StoreOutlet } from '../outlets';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="store" element={<Store />}>
          <Route path=":language" element={<StoreOutlet />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
