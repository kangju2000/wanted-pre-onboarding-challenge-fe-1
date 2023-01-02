import { Button } from '@/components/Button/Button.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/Input/Input';
import REGEX from '@/constants/regex';
import * as S from './Login.styles';

function Login() {
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
    <S.Login>
      <S.LoginContainer>
        <S.LoginForm onSubmit={onLoginClick}>
          <S.LoginTitle>로그인</S.LoginTitle>
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
