import Button from '../Button/Button';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.heroTitle}>Hope foundation</h1>
      <p className={css.heroText}>Helping those who really need it</p>
      <Button>Check</Button>
    </div>
  );
}
