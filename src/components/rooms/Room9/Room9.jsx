import BedHorizon from '../../BedHorizon/BedHorizon';
import Bed from '../../Bed/Bed';
import css from './Room9.module.css';

const Room9 = () => {
  return (
    <div className={css.roomContainer}>
      <Bed />
      <BedHorizon />
      <div className={css.roomNumber}>9</div>
    </div>
  );
};

export default Room9;
