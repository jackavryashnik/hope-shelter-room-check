import { useAtom } from 'jotai';
import css from './Bed.module.css';
import { userAtom } from '../../state';
import { useLocation } from 'react-router-dom';

const Bed = ({ beds, setBeds, bedKey }) => {
  const isChecked = beds[bedKey] ? beds[bedKey][0] : false;
  const [user] = useAtom(userAtom);
  const location = useLocation();
  const isUserAdmin = user.role === 'admin' || user.role === 'superadmin';
  const isCheckAllowed = user && isUserAdmin && location.pathname === '/rooms';

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

export default Bed;
