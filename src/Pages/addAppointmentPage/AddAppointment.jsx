import React from 'react';
// router
import { Form, NavLink, redirect, useActionData } from 'react-router-dom';
// utils
import { bindAppointment } from '../../utils/functions';

const AddAppointment = () => {
  const data = useActionData();

  return (
    <Form
      method="POST"
      action="/appointments/add-appointment"
      className="form flex_column"
    >
      <input type="text" name="name" placeholder="name" />
      <input type="date" name="date" placeholder="date" />
      <input type="time" name="time" placeholder="time" />
      <button>Submit</button>
      {data && data.error && <p>{data.error}</p>}
    </Form>
  );
};

export const appointmentAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);
  const submission = {
    name: data.get('name'),
    date: data.get('date'),
    time: data.get('time'),
  };
  console.log('tst');
  // send post request
  bindAppointment(submission);

  return redirect('/appointments');
};

export default AddAppointment;
