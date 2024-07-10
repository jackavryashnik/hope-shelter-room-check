import { useEffect, useState } from 'react';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room14.module.css';
import { useAtom } from 'jotai';
import { uiAtom } from '../../../state';

const initialBedsState = {
  bed1: [false, false],
  bed2: [false, false],
  bed3: [false, false],
};

const Room14 = () => {
  const [ui, setUi] = useAtom(uiAtom);
  const [beds, setBeds] = useState(ui.room?.beds || initialBedsState);
  
  useEffect(() => {
    const countOccupiedBeds = () => {
      return Object.values(beds)
        .flat()
        .filter(bed => bed).length;
    };

    setUi(prevUi => ({
      ...prevUi,
      room: {
        ...prevUi.room,
        bedsTaken: countOccupiedBeds(),
      },
      beds: beds,
    }));
  }, [beds, setUi]);
  
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBed  beds={beds} setBeds={setBeds} bedKey={'bed1'} />
        <TwoFloorsBedHorizon  beds={beds} setBeds={setBeds} bedKey={'bed2'} />
      </div>
      <div className={css.roomNumber}>14</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon  beds={beds} setBeds={setBeds} bedKey={'bed3'} />
      </div>
    </div>
  );
};

export default Room14;
