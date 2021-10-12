import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  currentContact,
  setCurrentContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = ({target}) => {
    setTitle(target.value);
  }

  const handleDateChange = ({target}) => {
    setDate(target.value);
  }

  const handleTimeChange = ({target}) => {
    setTime(target.value);
  }

  const handleContactChange = ({target}) => {
    console.log(target)
    setCurrentContact('aaa');
    
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>Title:
          <input id="title" onChange={handleTitleChange} value={title} type="text" />
      </label>

      <label>Date:
          <input id="date" onChange={handleDateChange} value={date} type="date" min={getTodayString()}/>
      </label>

      <label> Time
          <input id="time" onChange={handleTimeChange} value={time} type="time" />
      </label>

      <ContactPicker contacts={contacts} handleContactChange={handleContactChange} value={currentContact} />

      <input type="submit" value="Submit" />

     </form>
  );
};
