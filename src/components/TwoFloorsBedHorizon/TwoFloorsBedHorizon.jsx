import css from './TwoFloorsBedHorizon.module.css';

const TwoFloorsBedHorizon = ({ checkUp, checkDwn }) => {
  const isCheckedUp = checkUp;
  const isCheckedDwn = checkDwn;

  return (
    <div className={css.bedWrapper}>
      <label className={css.lowerBed}>
        <input type="checkbox" className={css.check} checked={isCheckedDwn} />
        <span className={css.checkmark}></span>
      </label>
      <label className={css.upperBed}>
        <input type="checkbox" className={css.check} checked={isCheckedUp} />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default TwoFloorsBedHorizon;
