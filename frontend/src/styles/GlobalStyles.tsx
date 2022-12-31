import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset};
  *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
  }
`;

function GlobalStyle() {
  return <Global styles={global} />;
}

export default GlobalStyle;
