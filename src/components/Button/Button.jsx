import css from './Button.module.css';

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} className={css.btn} onClick={onClick}>
      <span className={css.text}>{children}</span>
    </button>
  );
};

export default Button;
