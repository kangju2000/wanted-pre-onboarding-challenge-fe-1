import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyles';
import theme from '@/styles/theme';

const queryClient = new QueryClient();

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);
