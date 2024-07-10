import { useEffect, useState } from 'react';
import Bed from '../../Bed/Bed';
import BedHorizon from '../../BedHorizon/BedHorizon';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import css from './Room15.module.css';
import { useAtom } from 'jotai';
import { uiAtom } from '../../../state';

const initialBedsState = {
  bed1: [false],
  bed2: [false, false],
  bed3: [false, false],
  bed4: [false],
};

const Room15 = () => {
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
        <Bed beds={beds} setBeds={setBeds} bedKey={'bed1'} />
        <TwoFloorsBedHorizon beds={beds} setBeds={setBeds} bedKey={'bed2'} />
        <TwoFloorsBed beds={beds} setBeds={setBeds} bedKey={'bed3'} />
      </div>
      <div className={css.roomNumber}>15</div>
      <div className={css.bottom}>
        <BedHorizon beds={beds} setBeds={setBeds} bedKey={'bed4'} />
      </div>
    </div>
  );
};

export default Room15;
