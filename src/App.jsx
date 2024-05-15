import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';
import PrivateRout from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { selectIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const Login = lazy(() => import('./pages/Login'));
const RoomsPage = lazy(() => import('./pages/RoomsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {
        isRefreshing ?
        <p>Loading...</p> :
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route
              path="/rooms"
              element={<PrivateRout redirectTo="/login" component={<RoomsPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/rooms" component={<Login />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        }
      </Layout>
    </>
  );
}

export default App;