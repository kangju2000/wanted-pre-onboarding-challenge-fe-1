import { useContext } from 'react';
import SnackBarContext from '@/context/SnackBar';

const useSnackBar = () => {
  const context = useContext(SnackBarContext);

  return context;
};

export default useSnackBar;
