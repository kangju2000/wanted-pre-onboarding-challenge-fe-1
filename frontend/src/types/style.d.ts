import theme from '@/style/theme';
import '@emotion/react';

interface ColorsType {
  [key: string]: string;
}

declare module '@emotion/react' {
  interface Theme {
    colors: ColorsType;
  }
}
