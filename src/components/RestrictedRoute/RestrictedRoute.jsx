import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ isLogeIn, component: Component, redirectTo = '/' }) => {
  return isLogeIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
