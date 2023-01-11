import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { TodoType } from '@/types/todos';
import Modal from '../Common/Modal/Modal';
import * as S from './TodoModal.styles';

export interface TodoModalProps {
  todo: TodoType;
  isOpen: boolean;
  onClick: () => void;
}

const TodoModal = ({ todo, isOpen, onClick }: TodoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClick={onClick}>
      <S.IconContainer>
        <CloseIcon onClick={onClick} />
      </S.IconContainer>
      <S.ModalHeader>
        <S.CreatedAt>{new Date(todo.createdAt).toLocaleDateString()}</S.CreatedAt>
      </S.ModalHeader>
      <S.Title>{todo.title}</S.Title>
      <S.Content>{todo.content}</S.Content>
    </Modal>
  );
};

export default TodoModal;
