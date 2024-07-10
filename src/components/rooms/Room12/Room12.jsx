import { useEffect, useState } from 'react';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room12.module.css';
import { useAtom } from 'jotai';
import { uiAtom } from '../../../state';

const initialBedsState = {
  bed1: [false, false],
  bed2: [false, false],
  bed3: [false, false],
  bed4: [false, false],
};

const Room12 = () => {
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
        beds: beds,
      },
    }));
  }, [beds, setUi]);
  
  return (
    <div className={css.roomContainer}>
      <div className={css.top}>
        <TwoFloorsBedHorizon  beds={beds} setBeds={setBeds} bedKey={'bed1'} />
        <TwoFloorsBed  beds={beds} setBeds={setBeds} bedKey={'bed2'} />
      </div>
      <div className={css.roomNumber}>12</div>
      <div className={css.bottom}>
        <TwoFloorsBedHorizon  beds={beds} setBeds={setBeds} bedKey={'bed3'} />
        <TwoFloorsBed  beds={beds} setBeds={setBeds} bedKey={'bed4'} />
      </div>
    </div>
  );
};

export default Room12;
