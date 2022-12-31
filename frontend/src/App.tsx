import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Layout from '@/components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
