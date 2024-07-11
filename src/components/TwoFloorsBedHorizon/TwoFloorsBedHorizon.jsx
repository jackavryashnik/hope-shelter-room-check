import css from './TwoFloorsBedHorizon.module.css';

const TwoFloorsBedHorizon = ({ beds, setBeds, bedKey }) => {
  const isCheckedUp = beds[bedKey] ? beds[bedKey][0] : false;
  const isCheckedDwn = beds[bedKey] ? beds[bedKey][1] : false;

  const handleCheckboxChange = level => {
    setBeds(prevBeds => ({
      ...prevBeds,
      [bedKey]:
        level === 'up'
          ? [!isCheckedUp, isCheckedDwn]
          : [isCheckedUp, !isCheckedDwn],
    }));
  };

  return (
    <div className={css.bedWrapper}>
      <label className={css.lowerBed}>
        <input
          type="checkbox"
          className={css.check}
          checked={isCheckedDwn}
          onChange={() => handleCheckboxChange('down')}
        />
        <span className={css.checkmark}></span>
      </label>
      <label className={css.upperBed}>
        <input
          type="checkbox"
          className={css.check}
          checked={isCheckedUp}
          onChange={() => handleCheckboxChange('up')}
        />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default TwoFloorsBedHorizon;
