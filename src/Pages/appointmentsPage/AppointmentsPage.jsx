import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
//actions
import { addAppointment } from '../../redux/appointmentsReducer';
// router
import { Link, Outlet, useLoaderData } from 'react-router-dom';
// components
import Card from '../../components/card/Card';
// styles
import './appointmentsPage.css';

export const loaderAppointment = () => {
  const appointment = JSON.parse(localStorage.getItem('appointment'));
  return appointment;
};

const AppointmentsPage = () => {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();
  let appointment = useLoaderData();
  console.log(appointment);

  useEffect(() => {
    if (appointment !== null) {
      dispatch(addAppointment(appointment));
    }
    // eslint-disable-next-line
  }, [appointment]);

  return (
    <section className="appointments_page flex_column">
      <h3>Your Appointments</h3>
      <div className="list_container grid">
        {appointments.appointments.map((appointment) => (
          <Card appointment={appointment} key={appointment.name} />
        ))}
      </div>
      <Link to="/appointments/add-appointment">Add Appointment</Link>
      <Outlet />
    </section>
  );
};

export default AppointmentsPage;
