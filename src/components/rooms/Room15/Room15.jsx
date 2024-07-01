import Bed from '../../Bed/Bed';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import css from './Room15.module.css';

const Room15 = () => {
  return (
    <div className={css.roomContainer}>
      <div className={css.leftSide}>
        <Bed className={css.bed1} />
        <Bed className={css.bed2} rotate={true} />
      </div>
      <div className={css.rightSide}>
        <TwoFloorsBed className={css.bed3} rotate={true} />
        <TwoFloorsBed className={css.bed4} />
      </div>
    </div>
  );
};

export default Room15;
