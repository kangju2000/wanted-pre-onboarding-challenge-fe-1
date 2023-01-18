import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/constants/routes';
import { getToken } from '@/utils/storage';

const PublicRoute = () => {
  if (getToken()) return <Navigate to={ROUTES.TODOS} />;

  return <Outlet />;
};

export default PublicRoute;
