import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Button from './pages/Button';
import Card from './pages/Card';
import Alert from './pages/Alert';
import Auth from './pages/Auth';
import Utilities from './pages/Utilities';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Button />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </Layout>
  );
}

export default App;
