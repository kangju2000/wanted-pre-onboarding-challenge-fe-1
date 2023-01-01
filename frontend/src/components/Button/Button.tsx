import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = ({ children, size, color, ...props }: ButtonProps) => {
  return (
    <S.Button size={size} color={color} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
