import React from "react";
import ContactForm from "../../components/Contacts/ContactForm";
import { getContact } from "../../services/contactServices";

function EditContacts(props) {

    const contact_id = props.match.params.id
    const contact = getContact(contact_id)

    const handleOnSubmit = (contact) => {
        console.log(contact);

        //navigate back to previous page
        window.history.back()

    };

    return (
        <React.Fragment>
            <ContactForm handleOnSubmit={handleOnSubmit} contact={contact}/>
        </React.Fragment>
    );

}

export default EditContacts
