import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { uiAtom } from '../../state';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import css from './Modal.module.css';

const mountElement = document.getElementById('overlays');

const Modal = ({ children, ...props }) => {
  const [ui] = useAtom(uiAtom);
  const setUi = useSetAtom(uiAtom);
  const { number, total, busy } = props;
  const [busyBeds, setBusyBeds] = useState(busy);

  const closeModal = () => setUi(prev => ({ ...prev, modal: null }));
  const minusBed = () => {
    if (busyBeds > 0) setBusyBeds(busyBeds - 1);
  };
  const plusBed = () => {
    if (busyBeds < total) setBusyBeds(busyBeds + 1);
  };
  const reset = () => setBusyBeds(0);

  return (
    ui.modal &&
    createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <button className={css.closeBtn} onClick={closeModal}>
            <AiOutlineClose size={32} />
          </button>
          <h3 className={css.title}>Room {number}</h3>
          <ul className={css.list}>
            <li className={css.listItem}>Total {total}</li>
            <li className={css.listItem}>Free {total - busyBeds}</li>
            <li className={css.listItem}>Busy {busyBeds}</li>
          </ul>

          <div className={css.children}>{children}</div>

          <div className={css.controlContainer}>
            <div className={css.plusMinus}>
              <button type="button" className={css.minus} onClick={minusBed}>
                -
              </button>
              {<div className={css.number}>{busyBeds}</div>}
              <button type="button" className={css.plus} onClick={plusBed}>
                +
              </button>
            </div>
            <button type="button" className={css.reset} onClick={reset}>
              Reset
            </button>
          </div>
          <Button type={'submit'}>Save</Button>
        </div>
      </div>,
      mountElement
    )
  );
};

export default Modal;
