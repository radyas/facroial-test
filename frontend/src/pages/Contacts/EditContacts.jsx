import React, { useEffect, useState } from "react";
import ContactForm from "../../components/Contacts/ContactForm";
import { getContact, updateContact } from "../../services/contactServices";

function EditContacts(props) {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const contact_id = props.match.params.id

    useEffect(() => {
        getContact(contact_id).then((response) => {
            setData(response.data)
        })
    }, [contact_id])

 
    const handleOnSubmit = (contact) => {
      updateContact(contact)
      .then((response) => {
        props.history.push('/contacts')
      })
      .catch((error) => {
        setErrors(error.response.data)
      })
      
  
    };
  
    return (
      <React.Fragment>
        <ContactForm handleOnSubmit={handleOnSubmit} errors={errors} contact={data} />
      </React.Fragment>
    );
}

export default EditContacts
