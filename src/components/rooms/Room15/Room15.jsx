import Bed from '../../Bed/Bed';
import BedHorizon from '../../BedHorizon/BedHorizon';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room15.module.css';

const Room15 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <Bed className={css.bed1} />
        <TwoFloorsBedHorizon className={css.bed3} />
        <TwoFloorsBed className={css.bed4} />
      </div>
      <div className={css.roomNumber}>15</div>
      <div className={css.bottom}>
        <BedHorizon className={css.bed2} />
      </div>
    </div>
  );
};

export default Room15;
