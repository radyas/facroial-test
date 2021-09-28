import React from "react";
import ContactForm from "../../components/Contacts/ContactForm";

const AddContact = () => {

  const handleOnSubmit = (contact) => {
    console.log(contact);
    
    //navigate back to previous page
    window.history.back()

  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContact;