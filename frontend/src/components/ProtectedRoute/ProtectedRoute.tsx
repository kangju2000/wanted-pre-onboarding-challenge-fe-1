import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@/constants/routes';
import { getToken } from '@/utils/storage';

const ProtectedRoute = () => {
  if (!getToken()) return <Navigate to={ROUTES.AUTH} />;

  return <Outlet />;
};

export default ProtectedRoute;
