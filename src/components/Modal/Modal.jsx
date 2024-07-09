import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { uiAtom } from '../../state';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './Modal.module.css';
import { socket } from '../../api/services/rooms';

const mountElement = document.getElementById('overlays');

const Modal = ({ children }) => {
  const [ui] = useAtom(uiAtom);
  const setUi = useSetAtom(uiAtom);

  const [busyBeds, setBusyBeds] = useState(0);

  useEffect(() => {
    if (ui.room) {
      setBusyBeds(ui.room.bedsTaken);
    }
  }, [ui.room]);

  if (!ui.room) return null;

  const { roomNumber, totalBeds } = ui.room;

  const closeModal = () =>
    setUi(prev => ({ ...prev, modal: false, room: null }));

  const minusBed = () => {
    if (busyBeds > 0) setBusyBeds(busyBeds - 1);
  };

  const plusBed = () => {
    if (busyBeds < totalBeds) setBusyBeds(busyBeds + 1);
  };

  const reset = () => setBusyBeds(0);

  const onSave = () => {
    socket.emit('updateBedsTaken', {
      roomId: ui.room._id,
      bedsTaken: busyBeds,
    });

    closeModal();
  };

  return (
    ui.modal &&
    createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <button className={css.closeBtn} onClick={closeModal}>
            <AiOutlineClose size={32} />
          </button>
          <h3 className={css.title}>Room {roomNumber}</h3>
          <ul className={css.list}>
            <li className={css.listItem}>Total {totalBeds}</li>
            <li className={css.listItem}>Free {totalBeds - busyBeds}</li>
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
