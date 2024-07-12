import { atom } from 'jotai';

export const uiAtom = atom({
  modal: null,
  room: null,
});

export const userAtom = atom({
  user: null,
});
