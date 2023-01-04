import { useState } from 'react';
import { ReactComponent as CheckIcon } from '@/assets/check.svg';
import TodoModal from '@/components/TodoModal/TodoModal';
import { useUpdateTodo } from '@/hooks/queries/todos';
import { TodoType } from '@/types/todos';
import * as S from './TodoBox.styles';

export interface TodoBoxProps {
  todo: TodoType;
}

const TodoBox = ({ todo }: TodoBoxProps) => {
  const { mutate: UpdateMutate } = useUpdateTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onTodoClick = ({ id, title, content }: TodoType) => {
    UpdateMutate({ id, title, content });
  };

  return (
    <>
      <TodoModal isOpen={isModalOpen} closeModal={toggleModal} todo={todo} />
      <S.TodoBox onClick={toggleModal}>
        <CheckIcon onClick={() => onTodoClick(todo)} />
        <S.TodoTitle>{todo.title}</S.TodoTitle>
      </S.TodoBox>
    </>
  );
};

export default TodoBox;
