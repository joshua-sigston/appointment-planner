import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: localStorage.getItem('appointments')
    ? JSON.parse(localStorage.getItem('appointments'))
    : [],
};

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      const existingAppointment = state.appointments.find(
        (appointment) => appointment.name === action.payload.name,
      );

      if (!existingAppointment) {
        state.appointments.push(action.payload);
      }
      localStorage.setItem('appointments', JSON.stringify(state.appointments));
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
