export const bindContact = ({ name, telephone, email }) => {
  const newContact = {
    name,
    telephone,
    email,
  };

  return localStorage.setItem('contact', JSON.stringify(newContact));
};

export const bindAppointment = ({ name, date, time }) => {
  const newAppointment = {
    name,
    date,
    time,
  };
  console.log(newAppointment);
  return localStorage.setItem('appointment', JSON.stringify(newAppointment));
};
