import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import ROUTES from '@/constants/routes';
import useSnackBar from '@/hooks/useSnackBar';
import Login from '@/pages/Auth/Login/Login';
import SignUp from '@/pages/Auth/SignUp/SignUp';
import Home from '@/pages/Home/Home';
import Todos from '@/pages/Todos/Todos';
import ProtectedRoute from '@/routes/ProtectedRoute';
import PublicRoute from '@/routes/PublicRoute';

function App() {
  const { showSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const onError = (error: unknown) => {
    error instanceof AxiosError
      ? showSnackBar(error.response?.data.details ?? '알 수 없는 에러가 발생했습니다.')
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
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.TODOS} element={<Todos />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
