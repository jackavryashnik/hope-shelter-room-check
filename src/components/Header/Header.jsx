import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        Hope Shelter
      </Link>

      <Link to="/rooms" className={css.link}>
        Rooms
      </Link>

      <Link to="/login" className={css.authLink}>
        <CgProfile className={css.icon} />
      </Link>
    </header>
  );
};

export default Header;
