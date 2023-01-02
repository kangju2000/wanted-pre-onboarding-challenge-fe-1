const API_PATH = {
  LOGIN: '/user/login',
  SIGNUP: '/user/create',
  TODOS: '/todos',
  TODO_BY_ID: (id: number) => `/todos/${id}`,
  CREATE_TODO: '/todos',
  UPDATE_TODO: (id: number) => `/todos/${id}`,
  DELETE_TODO: (id: number) => `/todos/${id}`,
};

export default API_PATH;
