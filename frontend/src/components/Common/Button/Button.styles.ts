import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const sizeCSS = {
  small: css`
    padding: 7px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 14px;
  `,
  large: css`
    padding: 15px 30px;
    font-size: 16px;
  `,
};

const colorCSS = {
  primary: ({ colors }: Theme) => css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `,
  secondary: ({ colors }: Theme) => css`
    background-color: ${colors.secondary};
  `,
};

export const Button = styled.button<Pick<ButtonProps, 'size' | 'color' | 'fullWidth'>>`
  ${({ size = 'medium' }) => sizeCSS[size]};
  ${({ theme, color = 'primary' }) => colorCSS[color](theme)}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }
`;
