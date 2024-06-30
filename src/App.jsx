import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import AuthPage from './pages/AuthPage/AuthPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            <Route
              path="/rooms"
              element={<RoomsPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/:authType"
              element={
                <RestrictedRoute
                  isLoggedIn={isLoggedIn}
                  redirectTo="/"
                  component={<AuthPage setter={setIsLoggedIn} />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
