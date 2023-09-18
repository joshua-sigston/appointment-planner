import React, { useEffect, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
// actions
import { addContact } from '../../redux/contactsReducer';
// components
import Card from '../../components/card/Card';
// styles
import './contactsPage.css';

export const loaderContact = () => {
  const contact = JSON.parse(localStorage.getItem('contact'));
  return contact;
};

const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts);
  const [selection, setSelection] = useState('');
  const dispatch = useDispatch();
  let contact = useLoaderData();

  useEffect(() => {
    if (contact !== null) {
      dispatch(addContact(contact));
    }
    // eslint-disable-next-line
  }, [contact]);

  const selectionHandler = (e) => {
    setSelection(e.target.value);
  };

  return (
    <section className="contacts_page flex_column">
      <h3>Your Contacts</h3>
      <select name="contacts" onChange={selectionHandler}>
        <option value=""></option>
        {contacts.contacts.map((contact) => (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
      {contacts.contacts.length === 0 && <p>You have no contacts</p>}
      <div className="list_container grid">
        {contacts.contacts
          .filter((contact) => {
            return selection.toLowerCase() === ''
              ? contact
              : contact.name.toLowerCase().includes(selection);
          })
          .map((contact) => (
            <Card contact={contact} key={contact.name} />
          ))}
      </div>
      <Link to="/contacts/add-contact" className="add">
        Add Contact
      </Link>
      <Outlet />
    </section>
  );
};

export default ContactsPage;
