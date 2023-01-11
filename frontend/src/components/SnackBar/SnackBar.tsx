import ReactDOM from 'react-dom';
import * as S from './SnackBar.styles';

export interface SnackBarProps {
  isShown: boolean;
  message: string;
}

const SnackBar = ({ isShown, message }: SnackBarProps) => {
  const snackBarElement = document.getElementById('snackbar');

  if (!(snackBarElement instanceof HTMLElement)) {
    return <></>;
  }

  const element = isShown && <S.SnackBar>{message}</S.SnackBar>;

  return ReactDOM.createPortal(element, snackBarElement);
};

export default SnackBar;
