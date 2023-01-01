import { Button } from '@/components/Button/Button.styles';
import Input from '@/components/Input/Input';
import * as S from './Login.styles';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const onLoginClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <S.Login>
      <S.LoginContainer>
        <S.LoginForm onSubmit={onLoginClick}>
          <S.LoginTitle>로그인</S.LoginTitle>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit" fullWidth={true}>
            로그인
          </Button>
        </S.LoginForm>
        <Button fullWidth={true} onClick={onSignUpClick}>
          회원가입
        </Button>
      </S.LoginContainer>
    </S.Login>
  );
}

export default Login;
