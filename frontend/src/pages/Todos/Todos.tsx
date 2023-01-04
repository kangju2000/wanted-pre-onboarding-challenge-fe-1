import { useState } from 'react';
import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import TodoBox from '@/components/TodoBox/TodoBox';
import { useCreateTodo, useGetTodos } from '@/hooks/queries/todos';
import { TodoType } from '@/types/todos';
import * as S from './Todos.styles';

function Todos() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { data: todos } = useGetTodos();
  const { mutate } = useCreateTodo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ title, content });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <S.Todos>
      <S.TodoList>
        {todos?.data.map((todo: TodoType) => (
          <TodoBox key={todo.id} todo={todo} />
        ))}
      </S.TodoList>
      <S.TodoAddButton>
        <PlusIcon />
      </S.TodoAddButton>
      <form onSubmit={handleSubmit}>
        <Input name="title" value={title} onChange={handleTitleChange} />
        <Input name="content" value={content} onChange={handleContentChange} />
        <Button type="submit">할 일 추가</Button>
      </form>
    </S.Todos>
  );
}

export default Todos;
