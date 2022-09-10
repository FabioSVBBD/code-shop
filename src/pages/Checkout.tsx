import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('summary');
  }, []);

  return <Outlet />;
};
