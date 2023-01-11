import { createContext, useState } from 'react';

type SnackBarContextActions = {
  isShown: boolean;
  message: string;
  showSnackBar: (message: string) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

export const SnackBarContextProvider = ({ children }: SnackBarContextProviderProps) => {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState('');
  let timer: ReturnType<typeof setTimeout>;

  const showSnackBar = (message: string) => {
    setMessage(message);
    setIsShown(true);

    timer = setTimeout(() => {
      hideSnackBar();
    }, 2000);
  };

  const hideSnackBar = () => {
    setMessage('');
    setIsShown(false);
    clearTimeout(timer);
  };

  return (
    <SnackBarContext.Provider value={{ isShown, message, showSnackBar }}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContext;
