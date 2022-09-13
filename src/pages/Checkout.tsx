import { useEffect } from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();

  useEffect(() => {
    if (!outlet) {
      navigate('summary');
    }
  }, [outlet, navigate]);

  return <Outlet />;
};
