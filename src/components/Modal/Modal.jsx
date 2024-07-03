import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useAtom, useSetAtom } from 'jotai';
import { uiAtom } from '../../state';
import { AiOutlineClose } from "react-icons/ai";
import Button from '../Button/Button';

const mountElement = document.getElementById('overlays');

const Modal = ({ children, ...props }) => {
  const [ui] = useAtom(uiAtom);
  const setUi = useSetAtom(uiAtom);

  const { number, total, free } = props;
  const busy = total - free;

  const closeModal = () => setUi(prev => ({ ...prev, modal: null }));

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
            <li className={css.listItem}>Free {free}</li>
            <li className={css.listItem}>Busy {busy}</li>
          </ul>

          <div className={css.children}>{children}</div>

          <div className={css.controlContainer}>
            <div className={css.plusMinus}>
              <button type="button" className={css.minus}>
                -
              </button>
              {<div className={css.number}>{busy || 0}</div>}
              <button type="button" className={css.plus}>
                +
              </button>
            </div>
            <button type="button" className={css.reset}>
              Reset
            </button>
          </div>
          <Button>Save</Button>
        </div>
      </div>,
      mountElement
    )
  );
};

export default Modal;
