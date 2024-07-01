import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room13.module.css';

const Room13 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBed />
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
      </div>
      <div className={css.roomNumber}>13</div>
      <div className={css.bottom}>
        <TwoFloorsBed />
        <TwoFloorsBedHorizon />
      </div>
    </div>
  );
};

export default Room13;
