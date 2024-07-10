import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { uiAtom } from '../../state';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './Modal.module.css';
import { socket } from '../../api/services/rooms';

const mountElement = document.getElementById('overlays');

const Modal = ({ children }) => {
  const [ui, setUi] = useAtom(uiAtom);
  const [busyBeds, setBusyBeds] = useState(ui.room?.bedsTaken || 0);

  if (!ui.room) return null;

  const closeModal = () =>
    setUi(prev => ({ ...prev, modal: false, room: null }));

  const fillTheRoom = () => {
    const newBeds = { ...ui.room.beds };
    let bedsToChange = ui.room.bedsTaken;

    for (const key in newBeds) {
      for (let i = 0; i < newBeds[key].length; i++) {
        if (bedsToChange > 0) {
          newBeds[key][i] = true;
          bedsToChange--;
        } else {
          newBeds[key][i] = false;
        }
      }
    }
    return newBeds;
  };

  const minusBed = () => {
    if (ui.room.bedsTaken > 0 && busyBeds > 0) {
      setUi(prev => ({
        ...prev,
        modal: false,
        room: {
          ...prev.room,
          bedsTaken: prev.bedsTaken - 1,
          beds: fillTheRoom(),
        },
      }));
      setBusyBeds(busyBeds - 1);
    }
  };

  const plusBed = () => {
    if (ui.room.bedsTaken < ui.room.totalBeds) {
      setUi(prev => ({
        ...prev,
        modal: false,
        room: {
          ...prev.room,
          bedsTaken: prev.bedsTaken + 1,
          beds: fillTheRoom(),
        },
      }));
      setBusyBeds(busyBeds + 1);
    }
  };

  const reset = () => {
    setUi(prev => ({
      ...prev,
      modal: false,
      room: { ...prev.room, bedsTaken: 0 },
    }));
    setBusyBeds(0);
  };

  const onSave = () => {
    socket.emit('updateRoom', {
      roomId: ui.room._id,
      bedsTaken: ui.room.bedsTaken,
      beds: ui.room.beds,
    });

    closeModal();
  };

  return (
    ui.modal &&
    createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          <button className={css.closeBtn} onClick={closeModal}>
            <AiOutlineClose size={32} />
          </button>
          <h3 className={css.title}>
            Room {ui.room.roomNumber === '934' ? '9 ¾' : ui.room.roomNumber}
          </h3>
          <ul className={css.list}>
            <li className={css.listItem}>Total {ui.room.totalBeds}</li>
            <li className={css.listItem}>
              Free {ui.room.totalBeds - busyBeds}
            </li>
            <li className={css.listItem}>Busy {busyBeds}</li>
          </ul>

          <div className={css.children}>{children}</div>

          <div className={css.controlContainer}>
            <div className={css.plusMinus}>
              <button type="button" className={css.minus} onClick={minusBed}>
                -
              </button>
              <div className={css.number}>{busyBeds}</div>
              <button type="button" className={css.plus} onClick={plusBed}>
                +
              </button>
            </div>
            <button type="button" className={css.reset} onClick={reset}>
              Reset
            </button>
          </div>
          <Button type={'submit'} onClick={onSave}>
            Save
          </Button>
        </div>
      </div>,
      mountElement
    )
  );
};

export default Modal;
