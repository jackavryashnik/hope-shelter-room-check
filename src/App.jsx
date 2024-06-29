import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import PrivateRout from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const Login = lazy(() => import('./pages/Login'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Layout>
        <Header isLoggedIn={isLoggedIn} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route
              path="/rooms"
              element={
                <PrivateRout
                  isLoggedIn={isLoggedIn}
                  redirectTo="/login"
                  component={<RoomsPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  isLoggedIn={isLoggedIn}
                  redirectTo="/rooms"
                  component={<Login setter={setIsLoggedIn} />}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
