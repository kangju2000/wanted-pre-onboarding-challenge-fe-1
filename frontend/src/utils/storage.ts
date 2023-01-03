export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  return localStorage.setItem('token', token);
};
