import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset};
  *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  html,
  body {
    height: 100%;
  }
  body > div {
    height: 100%;
  }
`;

function GlobalStyle() {
  return <Global styles={global} />;
}

export default GlobalStyle;
