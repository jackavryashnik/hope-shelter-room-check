import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectItems = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (contacts, filter) => {
    if (contacts.length > 0) return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
