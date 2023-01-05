import { useState } from 'react';
import { ReactComponent as CheckIcon } from '@/assets/check.svg';
import { ReactComponent as UpdateIcon } from '@/assets/pen.svg';
import { ReactComponent as RemoveIcon } from '@/assets/remove.svg';
import TodoModal from '@/components/TodoModal/TodoModal';
import { useUpdateTodo } from '@/hooks/queries/todos';
import { TodoType } from '@/types/todos';
import { useDeleteTodo } from './../../hooks/queries/todos';
import * as S from './TodoBox.styles';

export interface TodoBoxProps {
  todo: TodoType;
  onTodoUpdateClick: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const TodoBox = ({ todo, onTodoUpdateClick }: TodoBoxProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: UpdateTodoMutate } = useUpdateTodo();
  const { mutate: DeleteTodoMutate } = useDeleteTodo();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onTodoClick = ({ id, title, content }: TodoType) => {
    UpdateTodoMutate({ id, title, content });
  };

  const onTodoRemoveClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    DeleteTodoMutate(todo.id);
  };

  return (
    <>
      <TodoModal isOpen={isModalOpen} closeModal={toggleModal} todo={todo} />
      <S.TodoBox onClick={toggleModal}>
        <CheckIcon onClick={() => onTodoClick(todo)} />
        <S.TodoTitle>{todo.title}</S.TodoTitle>
        <UpdateIcon onClick={onTodoUpdateClick} />
        <RemoveIcon onClick={onTodoRemoveClick} />
      </S.TodoBox>
    </>
  );
};

export default TodoBox;
