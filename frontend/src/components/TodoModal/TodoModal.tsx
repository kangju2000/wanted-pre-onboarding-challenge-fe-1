import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { TodoType } from '@/types/todos';
import Modal from '../Common/Modal/Modal';
import * as S from './TodoModal.styles';

export interface TodoModalProps {
  todo: TodoType;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoModal = ({ todo, isOpen, handleClose }: TodoModalProps) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <S.ModalContainer>
        <S.IconContainer>
          <CloseIcon onClick={handleClose} />
        </S.IconContainer>
        <S.ModalHeader>
          <S.CreatedAt>{new Date(todo.createdAt).toLocaleDateString()}</S.CreatedAt>
        </S.ModalHeader>
        <S.Title>{todo.title}</S.Title>
        <S.Content>{todo.content}</S.Content>
      </S.ModalContainer>
    </Modal>
  );
};

export default TodoModal;
