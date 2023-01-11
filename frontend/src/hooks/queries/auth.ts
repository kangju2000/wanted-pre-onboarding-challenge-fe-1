import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postLogin, postSignUp } from '@/api/auth';
import { QUERY_KEYS, MUTATION_KEYS } from '@/constants/queries';
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
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
    mutationKey: MUTATION_KEYS.LOGIN,
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
    mutationKey: MUTATION_KEYS.SIGNUP,
  });

  return { mutate };
};
