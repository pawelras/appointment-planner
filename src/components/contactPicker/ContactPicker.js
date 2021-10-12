import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  

  return (
    <select>
        <option defaultValue >No contact chosen</option>
    {contacts.map(contact => (
        <option onChange={props.handleContactChange} value={contact.name} key={contact.name} > {contact.name} </option>
    )
    )}
  </select>

  );
};
