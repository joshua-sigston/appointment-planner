import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const existingContact = state.contacts.find(
        (contact) => contact.email === action.payload.email,
      );

      if (!existingContact) {
        state.contacts.push(action.payload);
      }
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
