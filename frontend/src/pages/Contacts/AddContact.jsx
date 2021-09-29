import React, { useState } from "react";
import ContactForm from "../../components/Contacts/ContactForm";
import { addContact } from "../../services/contactServices";

const AddContact = (props) => {

  const [errors, setErrors] = useState({})

  const handleOnSubmit = (contact) => {
    addContact(contact)
    .then((response) => {
      props.history.push('/contacts')
    })
    .catch((error) => {
      setErrors(error.response.data)
    })
    

  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} errors={errors} />
    </React.Fragment>
  );
};

export default AddContact;