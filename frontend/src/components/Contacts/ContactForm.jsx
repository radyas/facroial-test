import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    firstName: props.contact ? props.contact.firstName : '',
    lastName: props.contact ? props.contact.lastName : '',
    email: props.contact ? props.contact.email : '',
    phone: props.contact ? props.contact.phone : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { firstName, lastName, email, phone } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstName, lastName, email, phone];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contact = {
        firstName,
        lastName,
        email,
        phone
      };
      props.handleOnSubmit(contact);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter First Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName" className='mt-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className='mt-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone" className='mt-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="phone"
            value={phone}
            placeholder="Enter Phone Number"
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <Button variant="outline-primary" type="submit" className="submit-btn mt-4">
                Submit
                </Button>
            </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;