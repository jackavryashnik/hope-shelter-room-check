import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room934.module.css';

const Room934 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBedHorizon />
      </div>
      <div className={css.roomNumber}>9 ¾</div>
      <div className={css.bottom}>
        <TwoFloorsBed />
        <TwoFloorsBedHorizon />
      </div>
    </div>
  );
};

export default Room934;
