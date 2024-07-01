import css from './Room7.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon />
      <TwoFloorsBed />
      <TwoFloorsBedHorizon />
      <div className={css.roomNumber}>7</div>
    </div>
  );
}
