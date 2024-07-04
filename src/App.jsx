import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import RootRouting from '../routers/RootRouting';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <RootRouting />;
}

export default App;
