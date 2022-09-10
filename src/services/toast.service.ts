interface ToastConfig {
  toggle?: React.Dispatch<React.SetStateAction<boolean>>;
  updateMessage?: React.Dispatch<React.SetStateAction<string>>;
  timeoutId?: NodeJS.Timeout;
}

interface NotificationProps {
  message: string;
  duration: number;
}

const toastObject: ToastConfig = { toggle: undefined };

const init = (
  toggler: React.Dispatch<React.SetStateAction<boolean>>,
  updateMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  toastObject.toggle = toggler;
  toastObject.updateMessage = updateMessage;
};

const notify = ({ message, duration }: NotificationProps) => {
  if (!toastObject.toggle || !toastObject.updateMessage) {
    throw new Error('Failed to init toast service');
  }

  toastObject.toggle(true);
  toastObject.updateMessage(message);

  if (toastObject.timeoutId) {
    clearTimeout(toastObject.timeoutId);
  }

  toastObject.timeoutId = setTimeout(() => {
    if (!toastObject.toggle) {
      throw new Error('Failed to init toast service');
    }
    toastObject.toggle(false);
    toastObject.timeoutId = undefined;
  }, duration);
};

export const ToastService = {
  init,
  notify,
};
