import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import css from './Header.module.css';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        Hope Shelter
      </Link>

      <Link to="/rooms" className={css.link}>
        Rooms
      </Link>

      <CgProfile className={css.icon} onClick={handleDropdown} />
      {isOpen && <Dropdown setter={setIsOpen} />}
    </header>
  );
};

export default Header;
