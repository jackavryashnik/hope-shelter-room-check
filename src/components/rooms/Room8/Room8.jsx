import css from './Room8.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon />
      <TwoFloorsBed />
      <TwoFloorsBedHorizon />
      <div className={css.roomNumber}>8</div>
    </div>
  );
}
