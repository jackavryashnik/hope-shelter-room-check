import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room12.module.css';

const Room12 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
      </div>
      <div className={css.roomNumber}>12</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
      </div>
    </div>
  );
};

export default Room12;
