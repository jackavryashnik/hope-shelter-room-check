import { useAtom } from 'jotai';
import css from './BedHorizon.module.css';
import { userAtom } from '../../state';

const BedHorizon = ({ beds, setBeds, bedKey }) => {
  const isChecked = beds[bedKey] ? beds[bedKey][0] : false;
  const [user] = useAtom(userAtom);
  const isUserAdmin = user.role === 'admin' || user.role === 'superadmin';
  const isCheckAllowed = user && isUserAdmin;

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
          disabled={!isCheckAllowed}
        />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default BedHorizon;
