import css from './Room1.module.css';
import TwoFloorsBed from '../../TwoFloorsBed/TwoFloorsBed';
import TwoFloorsBedHorizon from '../../TwoFloorsBedHorizon/TwoFloorsBedHorizon';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { uiAtom } from '../../../state';

const initialBedsState = {
  bed1: [false, false],
  bed2: [false, false],
  bed3: [false, false],
};

const Room1 = ({ room }) => {
  const [ui, setUi] = useAtom(uiAtom);
  const [beds, setBeds] = useState(
    room?.beds || ui.room?.beds || initialBedsState
  );

  useEffect(() => {
    if (room !== undefined) {
      setBeds(room.beds);
    }
  }, [room]);

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
    <div className={css.roomWrap}>
      <TwoFloorsBedHorizon beds={beds} setBeds={setBeds} bedKey={'bed1'} />
      <TwoFloorsBed beds={beds} setBeds={setBeds} bedKey={'bed2'} />
      <TwoFloorsBedHorizon beds={beds} setBeds={setBeds} bedKey={'bed3'} />
      <div className={css.roomNumber}>1</div>
    </div>
  );
};

export default Room1;
