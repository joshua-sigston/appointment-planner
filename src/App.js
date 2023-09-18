import './App.css';
// router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// layout
import RootLayout from './Layouts/RootLayout';
// pages
import {
  HomePage,
  ContactsPage,
  AppointmentsPage,
  AddContact,
  AddAppointment,
} from './Pages';
// actions
import { contactAction } from './Pages/addContactPage/AddContact';
import { loaderContact } from './Pages/contactsPage/ContactsPage';
import { loaderAppointment } from './Pages/appointmentsPage/AppointmentsPage';
import { appointmentAction } from './Pages/addAppointmentPage/AddAppointment';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="contacts" element={<ContactsPage />} loader={loaderContact}>
        <Route
          path="add-contact"
          element={<AddContact />}
          action={contactAction}
        />
      </Route>
      <Route
        path="appointments"
        element={<AppointmentsPage />}
        loader={loaderAppointment}
      >
        <Route
          path="add-appointment"
          element={<AddAppointment />}
          action={appointmentAction}
        />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
