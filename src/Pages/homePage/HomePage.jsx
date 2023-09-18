import React from 'react';
// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';
// components
import Card from '../../components/card/Card';
// styles
import './homePage.css';

const HomePage = () => {
  const contacts = useSelector((state) => state.contacts);
  const appointments = useSelector((state) => state.appointments);
  console.log(contacts);
  console.log(appointments);

  return (
    <section className="home_page">
      <div className="contacts">
        <h2>Your Contacts</h2>
        {contacts.contacts.length === 0 && <p>You have no contacts</p>}
        <div className="list_container grid">
          {contacts.contacts.map((contact) => (
            <Card contact={contact} key={contact.name} />
          ))}
        </div>
      </div>
      <div className="appointments">
        <h2>Your Appointments</h2>
        {appointments.appointments.length === 0 && (
          <p>You have no appointments</p>
        )}
        <div className="list_container grid">
          {appointments.appointments.map((appointment) => (
            <Card appointment={appointment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
