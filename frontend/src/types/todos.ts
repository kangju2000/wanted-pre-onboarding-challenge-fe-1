export type TodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoFormType = Pick<TodoType, 'title' | 'content'>;

export type CreateTodoType = TodoFormType;

export type UpdateTodoType = Pick<TodoType, 'id' | 'title' | 'content'>;
