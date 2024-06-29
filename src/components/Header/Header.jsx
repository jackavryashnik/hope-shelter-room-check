import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import css from './Header.module.css';

const Header = ({ isLoggedIn }) => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        Hope Shelter
      </Link>

      {isLoggedIn && (
        <Link to="/rooms" className={css.link}>
          Rooms
        </Link>
      )}

      <Link to="/auth">
        <CgProfile className={css.icon} />
      </Link>
    </header>
  );
};

export default Header;
