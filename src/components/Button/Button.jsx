import css from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={css.btn}>
      <span className={css.text}>{children}</span>
    </button>
  );
};

export default Button;
