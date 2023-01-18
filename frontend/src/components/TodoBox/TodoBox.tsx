import { useState } from 'react';
import { ReactComponent as CheckIcon } from '@/assets/check.svg';
import { ReactComponent as DeleteIcon } from '@/assets/delete.svg';
import { ReactComponent as UpdateIcon } from '@/assets/pen.svg';
import TodoDetailModal from '@/components/TodoDetailModal/TodoDetailModal';
import { useUpdateTodo } from '@/hooks/queries/todos';
import { useDeleteTodo } from '@/hooks/queries/todos';
import type { TodoType } from '@/types/todos';
import * as S from './TodoBox.styles';

export interface TodoBoxProps {
  todo: TodoType;
  onUpdateTodoClick: (id: string) => void;
}

const TodoBox = ({ todo, onUpdateTodoClick }: TodoBoxProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: UpdateTodoMutate } = useUpdateTodo();
  const { mutate: DeleteTodoMutate } = useDeleteTodo();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onTodoClick = ({ id, title, content }: TodoType) => {
    UpdateTodoMutate({ id, title, content });
  };

  const handleUpdateTodoClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();

    onUpdateTodoClick(todo.id);
  };

  const handleDeleteTodoClick = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();

    confirm('정말 삭제하시겠습니까?') && DeleteTodoMutate(todo.id);
  };

  return (
    <>
      <TodoDetailModal isOpen={isModalOpen} handleClose={toggleModal} todo={todo} />
      <S.TodoBox onClick={toggleModal}>
        <CheckIcon onClick={() => onTodoClick(todo)} />
        <S.TodoTitle>{todo.title}</S.TodoTitle>
        <UpdateIcon onClick={handleUpdateTodoClick} />
        <DeleteIcon onClick={handleDeleteTodoClick} />
      </S.TodoBox>
    </>
  );
};

export default TodoBox;
