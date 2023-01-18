import { useState } from 'react';
import Button from '@/components/Common/Button/Button';
import Input from '@/components/Common/Input/Input';
import REGEX from '@/constants/regex';
import type { AuthType } from '@/types/auth';
import * as S from './AuthForm.styles';

export interface AuthFormProps {
  title: string;
  onAuthSubmit: ({ email, password }: AuthType) => void;
}

const AuthForm = ({ title, onAuthSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid((prev) => {
      return {
        ...prev,
        email: REGEX.EMAIL.test(event.target.value),
      };
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsValid((prev) => {
      return {
        ...prev,
        password: REGEX.PASSWORD.test(event.target.value),
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAuthSubmit({ email, password });
  };

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      <S.AuthTitle>{title}</S.AuthTitle>
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
        {title}
      </Button>
    </S.AuthForm>
  );
};

export default AuthForm;
