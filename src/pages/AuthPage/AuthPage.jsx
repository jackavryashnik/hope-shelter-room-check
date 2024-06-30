import { NavLink, Navigate, useParams } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import css from './AuthPage.module.css';
import clsx from 'clsx';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const AuthPage = ({ isLoggedIn }) => {
  const { authType } = useParams();

  if (authType !== 'login' && authType !== 'register') {
    return <NotFoundPage />;
  }

  return (
    <div className={css.authPage}>
      <Header/>
      <div className={css.authPageContainer}>
        <div className={css.authNavigation}>
          <NavLink
            to="/login"
            className={clsx(
              css.authNavLink,
              authType === 'login' && css.activeLink
            )}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={clsx(
              css.authNavLink,
              authType === 'register' && css.activeLink
            )}
          >
            Register
          </NavLink>
        </div>
        {isLoggedIn && <Navigate to="/" />}
        {authType === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
