import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import AuthPage from './pages/AuthPage/AuthPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage/RoomsPage'));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route
            path="/:authType"
            element={
              <RestrictedRoute redirectTo="/" component={<AuthPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
