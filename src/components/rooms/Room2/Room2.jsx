import css from './Room2.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon />
      <TwoFloorsBedHorizon />
      <TwoFloorsBed />
      <div className={css.roomNumber}>2</div>
    </div>
  );
}
