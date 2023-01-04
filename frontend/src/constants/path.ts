const API_PATH = {
  LOGIN: '/users/login',
  SIGNUP: '/users/create',
  TODOS: '/todos',
  TODO_BY_ID: (id: string) => `/todos/${id}`,
  CREATE_TODO: '/todos',
  UPDATE_TODO: (id: string) => `/todos/${id}`,
  DELETE_TODO: (id: string) => `/todos/${id}`,
};

export default API_PATH;
