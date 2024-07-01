import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room14.module.css';

const Room14 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBed />
        <TwoFloorsBedHorizon />
      </div>
      <div className={css.roomNumber}>14</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon />
      </div>
    </div>
  );
};

export default Room14;
