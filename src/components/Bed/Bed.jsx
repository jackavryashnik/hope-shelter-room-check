import css from './Bed.module.css';

const Bed = () => {
  return (
    <div className={css.bedWrapper}>
      <label className={css.bed}>
      <input type="checkbox" className={css.check} />
      <span className={css.checkmark}></span>
    </label>
    </div>
  );
};

export default Bed;
