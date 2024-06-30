import css from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={css.btn} disabled>
      <span className={css.text}>{children}</span>
    </button>
  );
};

export default Button;
