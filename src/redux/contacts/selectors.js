import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectContactId = state => state.contacts.contactId;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectEditContact = createSelector(
  [selectContacts, selectContactId],
  (contacts, Id) => {
    return contacts.filter(contact => contact.id.includes(Id));
  }
);
