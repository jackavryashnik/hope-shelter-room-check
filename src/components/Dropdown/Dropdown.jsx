import css from './Dropdown.module.css';
import { userAtom } from '../../state';
import { useAtom } from 'jotai';
import { NavLink } from 'react-router-dom';
import { logout } from '../../api/services/auth';

const Dropdown = ({ setter }) => {
  const [user, setUser] = useAtom(userAtom);
  const token = localStorage.getItem('token');
  console.log(user);

  const handleLogout = async () => {
    await logout({ token });
    setUser(prev => ({ ...prev, user: null }));
    localStorage.removeItem('token');
  };

  return (
    <div className={css.wrapper} onClick={() => setter(prev => !prev)}>
      <div className={css.dropdown}>
        {user.user === null && (
          <div className={css.container}>
            <NavLink to="/login" className={css.link}>
              Login
            </NavLink>
            <NavLink to="/register" className={css.link}>
              Register
            </NavLink>
          </div>
        )}

        {user.user && token && (
          <div className={css.container}>
            <p className={css.user}>{user.user.email}</p>
            <button type="button" className={css.btn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
