import React from "react";
import ContactForm from "../../components/Contacts/ContactForm";

const AddContact = () => {
  const handleOnSubmit = (contact) => {
    console.log(contact);
  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContact;