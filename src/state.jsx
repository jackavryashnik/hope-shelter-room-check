import { atom } from 'jotai';

export const uiAtom = atom({
  modal: null,
  room: null,
});

export const userAtom = atom({
  user: null,
});

export const statsAtom = atom({
  totalGuests: null,
  currentGuests: null,
});
