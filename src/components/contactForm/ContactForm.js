import React from "react";

export const ContactForm = (props


) => {
  const handleNameChange = ({target}) => {
    props.setCurrentName(target.value)
  }

  const handlePhoneChange = ({target}) => {
    props.setCurrentPhone(target.value)
  }

  const handleEmailChange = ({target}) => {
    props.setCurrentEmail(target.value)
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <label> Full Name
      <input type="text" id="name" onChange={handleNameChange} value={props.currentName}/>
      </label>
      <label>Phone Number
      <input type="tel" pattern="^\+?(?:\d\s?){10,12}$" id="tel" onChange={handlePhoneChange} value={props.currentPhone} />
      </label> 
      <label>Email
      <input type="email" id="email" onChange={handleEmailChange} value={props.currentEmail} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
