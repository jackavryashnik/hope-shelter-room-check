import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room14.module.css';

const Room14 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBed className={css.bed4} />
        <TwoFloorsBedHorizon className={css.bed3} />
      </div>
      <div className={css.roomNumber}>14</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon className={css.bed3} />
      </div>
    </div>
  );
};

export default Room14;
