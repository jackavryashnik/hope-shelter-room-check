import { useAtom } from 'jotai';
import { userAtom } from '../../state';
import css from './TwoFloorsBedHorizon.module.css';
import { useLocation } from 'react-router-dom';

const TwoFloorsBedHorizon = ({ beds, setBeds, bedKey }) => {
  const isCheckedUp = beds[bedKey] ? beds[bedKey][0] : false;
  const isCheckedDwn = beds[bedKey] ? beds[bedKey][1] : false;
  const [user] = useAtom(userAtom);
  const location = useLocation();
  const isUserAdmin = user.role === 'admin' || user.role === 'superadmin';
  const isCheckAllowed = user && isUserAdmin && location.pathname === '/rooms';

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
          disabled={!isCheckAllowed}
        />
        <span className={css.checkmark}></span>
      </label>
      <label className={css.upperBed}>
        <input
          type="checkbox"
          className={css.check}
          checked={isCheckedUp}
          onChange={() => handleCheckboxChange('up')}
          disabled={!isCheckAllowed}
        />
        <span className={css.checkmark}></span>
      </label>
    </div>
  );
};

export default TwoFloorsBedHorizon;
