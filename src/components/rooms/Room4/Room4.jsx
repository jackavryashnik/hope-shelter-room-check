import css from './Room4.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';

export default function Room1() {
  return (
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon />
      <TwoFloorsBedHorizon />
      <TwoFloorsBed />
      <div className={css.roomNumber}>4</div>
    </div>
  );
}
