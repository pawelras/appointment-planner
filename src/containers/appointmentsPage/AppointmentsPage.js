import React , { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  
  const [title, setTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentContact);
    props.addAppointment(title, currentContact, date, time);
    setTitle('');
    setCurrentContact('');
    setDate('');
    setTime('');
      
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={props.contacts}

        title={title} 
        currentContact={currentContact}
        date={date} 
        time={time} 
        setTitle={setTitle}
        setCurrentContact={setCurrentContact}
        setDate={setDate}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={props.appointments} />
      </section>
    </div>
  );
};
