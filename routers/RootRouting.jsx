import RestrictedRoute from '../src/components/RestrictedRoute/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AuthPage from '../src/pages/AuthPage/AuthPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const RoomsPage = lazy(() => import('../src/pages/RoomsPage/RoomsPage'));

const RootRouting = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route
          path="/:authType"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RootRouting;
