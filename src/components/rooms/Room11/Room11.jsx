import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room11.module.css';

const Room11 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.left}>
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
      </div>
      <div className={css.roomNumber}>11</div>
      <div className={css.right}>
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
        <TwoFloorsBedHorizon />
      </div>
    </div>
  );
};

export default Room11;
