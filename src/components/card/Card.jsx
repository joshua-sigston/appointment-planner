import React from 'react';
import './card.css';

const Card = (props) => {
  if (props.contact) {
    const { name, telephone, email } = props.contact;
    return (
      <div className="card flex_column">
        <h3>{name}</h3>
        <p>{telephone}</p>
        <p>{email}</p>
      </div>
    );
  }

  if (props.appointment) {
    const { name, date, time } = props.appointment;
    return (
      <div className="card flex_column">
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    );
  }
};

export default Card;
