import ReactDOM from 'react-dom';
import * as S from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
  const modalElement = document.getElementById('modal');

  const onCloseClick = (e: React.MouseEvent) => {
    console.log(e.target, e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }

    handleClose();
  };

  if (!(modalElement instanceof HTMLElement)) {
    return <></>;
  }

  const element = isOpen && <S.ModalWrapper onClick={onCloseClick}>{children}</S.ModalWrapper>;

  return ReactDOM.createPortal(element, modalElement);
};

export default Modal;
