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
    <section ref={ref} {...props}>
      <div className={css.floorPlan}>
        <div className={css.leftSide}>
          <div className={css.column1}>
            <Room934 className={css.room} />
            <Room9 className={css.room} />
            <Room8 className={css.room} />
            <Room7 className={css.room} />
            <Room6 className={css.room} />
            <Room5 className={css.room} />
          </div>

          <div className={css.column2}>
            <Room10 className={css.room} />
            <div className={css.roomsGroup}>
              <Room1 className={css.room} />
              <Room2 className={css.room} />
              <Room3 className={css.room} />
              <Room4 className={css.room} />
            </div>
          </div>
        </div>

        <div className={css.rightSide}>
          <div className={css.roomsGroup2}>
            <div className={css.column3}>
              <div className={css.storage}>Storage</div>
              <Room13 className={css.room} />
              <Room15 className={css.room} />
            </div>

            <div className={css.column4}>
              <Room11 className={css.room} />
              <Room12 className={css.room} />
              <Room14 className={css.room} />
            </div>
          </div>

          <div className={css.kitchen}>Kitchen area</div>
        </div>
      </div>
    </section>
  );
});

FloorPlan.displayName = 'FloorPlan';

export default FloorPlan;
