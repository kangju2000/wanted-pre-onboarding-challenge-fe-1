import { Button } from '@/components/Button/Button.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/Input/Input';
import REGEX from '@/constants/regex';
import * as S from './Auth.styles';

function Login() {
  const [auth, setAuth] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const onLoginClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSignUpClick = () => {
    navigate('/signup');
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid((prev) => {
      return {
        ...prev,
        email: REGEX.email.test(event.target.value),
      };
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsValid((prev) => {
      return {
        ...prev,
        password: REGEX.password.test(event.target.value),
      };
    });
  };

  return (
    <S.Auth>
      <S.AuthContainer>
        <S.AuthForm onSubmit={auth === 'login' ? onLoginClick : onSignUpClick}>
          <S.AuthTitle>{auth === 'login' ? '로그인' : '회원가입'}</S.AuthTitle>
          <Input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" fullWidth={true} disabled={!(isValid.email && isValid.password)}>
            {auth === 'login' ? '로그인' : '회원가입'}
          </Button>
        </S.AuthForm>
        <Button
          fullWidth={true}
          onClick={() => setAuth((prev) => (prev === 'login' ? 'signup' : 'login'))}
        >
          {auth === 'login' ? '회원가입하기' : '로그인하기'}
        </Button>
      </S.AuthContainer>
    </S.Auth>
  );
}

export default Login;
