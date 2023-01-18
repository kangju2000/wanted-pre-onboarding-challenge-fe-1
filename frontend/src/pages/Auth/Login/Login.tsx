import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm/AuthForm';
import Button from '@/components/Common/Button/Button';
import ROUTES from '@/constants/routes';
import { useLogin } from '@/hooks/queries/auth';
import type { AuthType } from '@/types/auth';
import * as S from './Login.styles';

function Login() {
  const navigate = useNavigate();
  const { mutate } = useLogin();

  const handleLoginSubmit = ({ email, password }: AuthType) => {
    mutate({ email, password });
  };

  const handleClick = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <S.Login>
      <S.LoginContainer>
        <AuthForm title="로그인" onAuthSubmit={handleLoginSubmit} />
        <Button type="button" fullWidth={true} onClick={handleClick}>
          회원가입
        </Button>
      </S.LoginContainer>
    </S.Login>
  );
}

export default Login;
