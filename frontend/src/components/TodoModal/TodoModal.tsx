import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { TodoType } from '@/types/todos';
import * as S from './TodoModal.styles';

export interface TodoModalProps {
  todo: TodoType;
  isOpen: boolean;
  closeModal: () => void;
}

const TodoModal = ({ todo, isOpen, closeModal }: TodoModalProps) => {
  return (
    <S.ModalWrapper isOpen={isOpen}>
      <S.ModalContainer>
        <CloseIcon onClick={closeModal} />
        <S.ModalHeader>
          <S.CreatedAt>{new Date(todo.createdAt).toLocaleDateString()}</S.CreatedAt>
        </S.ModalHeader>
        <S.Title>{todo.title}</S.Title>
        <S.Content>{todo.content}</S.Content>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default TodoModal;
