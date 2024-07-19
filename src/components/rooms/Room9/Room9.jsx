import { useEffect, useState } from 'react';
import BedHorizon from '../../BedHorizon/BedHorizon';
import Bed from '../../Bed/Bed';
import css from './Room9.module.css';
import { useAtom } from 'jotai';
import { uiAtom } from '../../../state';

const initialBedsState = {
  bed1: [false],
  bed2: [false],
};

const Room9 = ({ room }) => {
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
    <div className={css.roomContainer}>
      <Bed beds={beds} setBeds={setBeds} bedKey={'bed1'} />
      <BedHorizon beds={beds} setBeds={setBeds} bedKey={'bed2'} />
      <div className={css.roomNumber}>9</div>
    </div>
  );
};

export default Room9;
