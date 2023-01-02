import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import ROUTES from '@/constants/routes';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
