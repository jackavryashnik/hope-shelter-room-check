import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room10.module.css';

const Room10 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBedHorizon />
        <TwoFloorsBed />
      </div>
      <div className={css.roomNumber}>10</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon />
      </div>
    </div>
  );
};

export default Room10;
