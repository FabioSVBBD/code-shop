import { Toast } from './Toast';

export const NotificationStream = () => {
  return (
    <article className="fixed z-50 flex justify-center w-full h-screen pointer-events-none">
      <Toast />
    </article>
  );
};
