import clsx from 'clsx';
import css from './Bed.module.css';

const Bed = ({ check, rotate }) => {
  const isChecked = check;

  return (
    <div className={clsx(css.bedWrapper, rotate && css.rotate)}>
      <label className={css.bed}>
        <input type="checkbox" className={css.check} checked={isChecked} />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default Bed;
