import { useState } from 'react';
import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import TodoBox from '@/components/TodoBox/TodoBox';
import TodoForm from '@/components/TodoForm/TodoForm';
import { useCreateTodo, useGetTodos, useUpdateTodo } from '@/hooks/queries/todos';
import type { TodoFormType } from '@/types/todos';
import type { TodoType } from '@/types/todos';
import * as S from './Todos.styles';

function Todos() {
  const [isTodoFormOpen, setTodoFormOpen] = useState(false);
  const [todoFormType, setTodoFormType] = useState<'create' | 'update'>('create');
  const [updateTodoId, setUpdateTodoId] = useState('');

  const { data: todos } = useGetTodos();
  const { mutate: CreateTodoMutate } = useCreateTodo();
  const { mutate: UpdateTodoMutate } = useUpdateTodo();

  const handleCreateTodoClick = () => {
    setTodoFormType('create');
    setUpdateTodoId('');
    setTodoFormOpen((prev) => !prev);
  };

  const handleUpdateTodoClick = (id: string) => {
    setUpdateTodoId(id);
    setTodoFormType('update');
    setTodoFormOpen(true);
  };

  const handleCancelClick = () => {
    setUpdateTodoId('');
    setTodoFormOpen(false);
  };

  const handleTodoFormSubmit = ({ title, content }: TodoFormType) => {
    if (todoFormType === 'create') {
      CreateTodoMutate({ title, content });
      setTodoFormOpen(false);
      return;
    }

    UpdateTodoMutate({ id: updateTodoId, title, content });
    setTodoFormOpen(false);
  };

  return (
    <S.Todos>
      <S.TodoList>
        {todos?.data.map((todo: TodoType) => (
          <TodoBox key={todo.id} todo={todo} onUpdateTodoClick={handleUpdateTodoClick} />
        ))}
      </S.TodoList>
      <S.CreateTodoButton isCreateFormOpen={isTodoFormOpen} onClick={handleCreateTodoClick}>
        <PlusIcon />
      </S.CreateTodoButton>
      <S.TodoFormContainer isTodoFormOpen={isTodoFormOpen}>
        <TodoForm
          type={todoFormType}
          onSubmit={handleTodoFormSubmit}
          onCancelClick={handleCancelClick}
          todo={todos?.data.find((todo: TodoType) => todo.id === updateTodoId)}
        />
      </S.TodoFormContainer>
    </S.Todos>
  );
}

export default Todos;
