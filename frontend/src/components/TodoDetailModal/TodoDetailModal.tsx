import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import type { TodoType } from '@/types/todos';
import Modal from '../Common/Modal/Modal';
import * as S from './TodoDetailModal.styles';

export interface TodoDetailModalProps {
  todo: TodoType;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoDetailModal = ({ todo, isOpen, handleClose }: TodoDetailModalProps) => {
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

export default TodoDetailModal;
