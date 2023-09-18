import React from 'react';
// router
import { Form, redirect, useActionData } from 'react-router-dom';
// utils
import { bindContact } from '../../utils/functions';

// validate phone number function
function isValid(num) {
  // validate phone number
  let phoneNumber = num.replace(/\s/g, '');
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return regex.test(phoneNumber);
}

const AddContact = () => {
  const data = useActionData();

  return (
    <Form
      method="POST"
      action="/contacts/add-contact"
      className="form flex_column"
    >
      <input type="text" name="name" placeholder="name of contact" />
      <input type="tel" name="telephone" placeholder="telephone number" />
      <input type="email" name="email" placeholder="email" />
      <button>Submit</button>
      {data && data.error && <p>{data.error}</p>}
    </Form>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const validNumber = isValid(data.get('telephone'));
  console.log(validNumber);

  const submission = {
    name: data.get('name'),
    telephone: data.get('telephone'),
    email: data.get('email'),
  };

  if (!validNumber) {
    return {
      error: 'telephone must be valid.',
    };
  }

  bindContact(submission);

  // redirect
  return redirect('/contacts');
};

export default AddContact;
