import { forwardRef } from 'react';
import Room1 from '../rooms/Room1/Room1';
import Room2 from '../rooms/Room2/Room2';
import Room3 from '../rooms/Room3/Room3';
import Room4 from '../rooms/Room4/Room4';
import Room5 from '../rooms/Room5/Room5';
import Room6 from '../rooms/Room6/Room6';
import Room7 from '../rooms/Room7/Room7';
import Room8 from '../rooms/Room8/Room8';
import Room9 from '../rooms/Room9/Room9';
import Room934 from '../rooms/Room934/Room934';
import Room10 from '../rooms/Room10/Room10';
import Room11 from '../rooms/Room11/Room11';
import Room12 from '../rooms/Room12/Room12';
import Room13 from '../rooms/Room13/Room13';
import Room14 from '../rooms/Room14/Room14';
import Room15 from '../rooms/Room15/Room15';
import css from './FloorPlan.module.css';

const FloorPlan = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={css.floorPlan} {...props}>
      <Room1 />
      <Room2 />
      <Room3 />
      <Room4 />
      <Room5 />
      <Room6 />
      <Room7 />
      <Room8 />
      <Room9 />
      <Room934 />
      <Room10 />
      <Room11 />
      <Room12 />
      <Room13 />
      <Room14 />
      <Room15 />
    </div>
  );
});

FloorPlan.displayName = 'FloorPlan';

export default FloorPlan;
