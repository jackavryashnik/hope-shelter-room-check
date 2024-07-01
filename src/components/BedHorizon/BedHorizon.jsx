import css from './BedHorizon.module.css';

const BedHorizon = ({ check }) => {
    const isChecked = check;
  
    return (
      <div className={css.bedWrapper}>
        <label className={css.bed}>
          <input type="checkbox" className={css.check} checked={isChecked} />
          <span className={css.checkmark}></span>
        </label>
      </div>
    );
  };

export default BedHorizon