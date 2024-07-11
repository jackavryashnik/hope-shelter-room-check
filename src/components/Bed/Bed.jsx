import css from './Bed.module.css';

const Bed = ({ beds, setBeds, bedKey }) => {
  const isChecked = beds[bedKey] ? beds[bedKey][0] : false;

  const handleCheckboxChange = () => {
    setBeds(prevBeds => ({
      ...prevBeds,
      [bedKey]: [!isChecked],
    }));
  };

  return (
    <div className={css.bedWrapper}>
      <label className={css.bed}>
        <input
          type="checkbox"
          className={css.check}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default Bed;
