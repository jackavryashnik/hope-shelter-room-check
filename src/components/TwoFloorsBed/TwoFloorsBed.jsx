import clsx from 'clsx';
import css from './TwoFloorsBed.module.css';

const TwoFloorsBed = ({ checkUp, checkDwn, rotate }) => {
  const isCheckedUp = checkUp;
  const isCheckedDwn = checkDwn;

  return (
    <div className={clsx(css.bedWrapper, rotate && css.rotate)}>
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

export default TwoFloorsBed;
