import css from './Room1.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon />
      <TwoFloorsBed />
      <TwoFloorsBedHorizon />
      <div className={css.roomNumber}>1</div>
    </div>
  );
}
