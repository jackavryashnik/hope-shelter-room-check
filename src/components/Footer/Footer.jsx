import css from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { PiFacebookLogoBold } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <ul className={css.footerList}>
        <li>
          <a href="https://www.instagram.com/hope.shelter.pl/">
            <FaInstagram size={32} />
          </a>
        </li>
        <li>
          <a href="https://www.hope.org.pl/refugee-centre-in-przemysl">
            <FiYoutube size={32} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hopefoundationeu/">
            <PiFacebookLogoBold size={32} />
          </a>
        </li>
      </ul>
      <div>
        <a className={css.footerLink} href="mailto:info@hope.org.pl">
          info@hope.org.pl
        </a>
        <p className={css.footerText}>
          ©2022 by hope foundation registered non-profit, krs number
          0000958761,tax identification NIP 7123432172,REGON 521459011
        </p>
      </div>
    </footer>
  );
}
