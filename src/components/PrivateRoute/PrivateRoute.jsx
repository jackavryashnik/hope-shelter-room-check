import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, component: Component, redirectTo = '/' }) => {
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
