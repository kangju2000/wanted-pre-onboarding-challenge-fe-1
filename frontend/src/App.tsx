import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { MUTATION_KEYS } from '@/constants/queries';
import ROUTES from '@/constants/routes';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home/Home';
import Todos from '@/pages/Todos/Todos';
import useSnackBar from './hooks/useSnackBar';

function App() {
  const { showSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const onError = (error: unknown) => {
    error instanceof AxiosError
      ? showSnackBar(error.response?.data.details)
      : showSnackBar('알 수 없는 에러가 발생했습니다.');
  };

  queryClient.setDefaultOptions({
    queries: {
      retry: 1,
      onError,
    },
    mutations: {
      retry: 1,
      onError,
    },
  });

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.TODOS} element={<Todos />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
