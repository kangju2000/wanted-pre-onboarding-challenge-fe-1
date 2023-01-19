import type { InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = ({ name, ...props }: InputProps) => {
  return <S.Input name={name} {...props} />;
};

export default Input;
