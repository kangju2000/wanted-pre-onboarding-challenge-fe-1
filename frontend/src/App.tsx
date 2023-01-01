import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import SignUp from '@/pages/SignUp/SignUp';
import Layout from '@/components/Layout/Layout';
import ROUTES from '@/constants/routes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
