import { NavLink, Navigate, useParams } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import css from './AuthPage.module.css';

const AuthPage = ({ isLoggedIn }) => {
  const { authType } = useParams();

  if (authType !== 'login' && authType !== 'register') {
    return <NotFoundPage />;
  }

  return (
    <div className={css.authPageContainer}>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      {isLoggedIn && <Navigate to="/" />}
      {authType === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
