import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ToastService } from '../services';

export const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('Toast');

  const toastClass = classNames(
    'px-8 py-2 text-sm text-center rounded-lg bg-black/80 h-fit min-w-[75%] max-w-[98%] mt-4 transition-all',
    { 'mt-[-3rem]': !isVisible }
  );

  useEffect(() => {
    ToastService.init(setIsVisible, setMessage);
  }, []);

  return <section className={toastClass}>{message}</section>;
};
