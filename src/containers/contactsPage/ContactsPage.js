import React, { useState, useEffect } from "react";
import { ContactForm }from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const {contacts} = props;
  const {addContact} = props;
  
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false)

  useEffect(() => {
    if (contacts.some(element => element.name === currentName) ) {
      setIsDuplicate(true);
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
     
     
      addContact(currentName, currentPhone, currentEmail);
          } else {
      alert('contact already exists')
    }
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        currentName={currentName}
        setCurrentName={setCurrentName}
        currentPhone={currentPhone}
        setCurrentPhone={setCurrentPhone}
        currentEmail={currentEmail}
        setCurrentEmail={setCurrentEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts}/>
      </section>
    </div>
  );
};
