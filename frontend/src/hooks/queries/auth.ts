import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin, postSignUp } from '@/api/auth';
import ROUTES from '@/constants/routes';
import { setToken } from '@/utils/storage';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(postLogin, {
    retry: 0,
    onSuccess: ({ token }) => {
      setToken(token);
      navigate(ROUTES.TODOS);
      queryClient.invalidateQueries('todos');
    },
    onError: () => alert('로그인에 실패했습니다.'),
  });

  return { mutate };
};

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(postSignUp, {
    retry: 0,
    onSuccess: () => {
      navigate(ROUTES.HOME);
    },
    onError: () => alert('회원가입에 실패했습니다.'),
  });

  return { mutate };
};
