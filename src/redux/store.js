import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import appointmentsReducer from './appointmentsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    appointments: appointmentsReducer,
  },
});
