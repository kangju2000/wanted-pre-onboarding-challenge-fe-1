import { useEffect, useState } from 'react';
import Button from '@/components/Common/Button/Button';
import Input from '@/components/Common/Input/Input';
import { TodoFormType, TodoType } from '@/types/todos';
import * as S from './TodoForm.styles';

export interface TodoFormProps {
  type: 'create' | 'update';
  onSubmit: ({ title, content }: TodoFormType) => void;
  onCancelClick: () => void;
  todo?: TodoType;
}

const TodoForm = ({ type, onSubmit, onCancelClick, todo }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const textObject = {
    create: '추가',
    update: '수정',
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  const handleCancelClick = () => {
    onCancelClick();
    setTitle('');
    setContent('');
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
      return;
    }

    setTitle('');
    setContent('');
  }, [todo]);

  return (
    <S.TodoForm onSubmit={handleSubmit}>
      <S.TodoFormTitle>할 일 {textObject[type]}</S.TodoFormTitle>
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
      <Button type="submit">{textObject[type]}</Button>
      <Button type="reset" onClick={handleCancelClick}>
        취소
      </Button>
    </S.TodoForm>
  );
};

export default TodoForm;
