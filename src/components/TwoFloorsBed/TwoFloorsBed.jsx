import css from './TwoFloorsBed.module.css';

const TwoFloorsBed = () => {
  return (
    <div className={css.bedWrapper}>
      <label className={css.lowerBed}>
        <input type="checkbox" className={css.check} />
        <span className={css.checkmark}></span>
      </label>
      <label className={css.upperBed}>
        <input type="checkbox" className={css.check} />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default TwoFloorsBed;
