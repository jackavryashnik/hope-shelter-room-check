import css from './Room5.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBed />
      <TwoFloorsBedHorizon />
      <TwoFloorsBedHorizon />
      <div className={css.roomNumber}>5</div>
    </div>
  );
}
