import { useState } from 'react';
import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import Button from '@/components/Common/Button/Button';
import Input from '@/components/Common/Input/Input';
import TodoBox from '@/components/TodoBox/TodoBox';
import { useCreateTodo, useGetTodos, useUpdateTodo } from '@/hooks/queries/todos';
import { TodoType } from '@/types/todos';
import * as S from './Todos.styles';

function Todos() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState<string>('');

  const { data: todos } = useGetTodos();
  const { mutate: CreateTodoMutate } = useCreateTodo();
  const { mutate: UpdateTodoMutate } = useUpdateTodo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    isUpdating
      ? UpdateTodoMutate({ id: updateTodoId, title, content })
      : CreateTodoMutate({ title, content });

    setTitle('');
    setContent('');
    setIsAdding(false);
    setIsUpdating(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const onOpenTodoFormClick = () => {
    setIsAdding((prev) => !prev);
  };

  const onTodoUpdateClick = (event: React.MouseEvent<SVGSVGElement>, todo: TodoType) => {
    event.stopPropagation();
    setIsUpdating(true);
    setIsAdding(true);
    setUpdateTodoId(todo.id);
    setTitle(todo.title);
    setContent(todo.content);
  };

  const onCancelClick = () => {
    setIsUpdating(false);
    setIsAdding(false);
    setTitle('');
    setContent('');
  };

  return (
    <S.Todos>
      <S.TodoList>
        {todos?.data.map((todo: TodoType) => (
          <TodoBox
            key={todo.id}
            todo={todo}
            onTodoUpdateClick={(event) => onTodoUpdateClick(event, todo)}
          />
        ))}
      </S.TodoList>
      <S.TodoAddButton isAdding={isAdding} onClick={onOpenTodoFormClick}>
        <PlusIcon />
      </S.TodoAddButton>
      <S.TodoForm isOpen={isAdding} onSubmit={handleSubmit}>
        <S.TodoFormTitle>{isUpdating ? '할 일 수정' : '할 일 추가'}</S.TodoFormTitle>
        <Input
          name="title"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={handleTitleChange}
        />
        <S.TodoFormTextarea
          name="content"
          value={content}
          placeholder="내용을 입력하세요."
          onChange={handleContentChange}
        />
        <Button type="submit">{isUpdating ? '수정' : '추가'}</Button>
        <Button type="button" onClick={onCancelClick}>
          취소
        </Button>
      </S.TodoForm>
    </S.Todos>
  );
}

export default Todos;
