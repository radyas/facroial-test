import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setContact(props.contact)
  }, [props.contact])

  useEffect(() => {
    setErrors(props.errors)
  }, [props.errors])

  const [errors, setErrors] = useState({});

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleOnSubmit(contact);
    
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
      <Form onSubmit={handleOnSubmit}>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="first_name"
            value={ contact?.first_name || '' }
            placeholder="Enter First Name"
            onChange={handleInputChange}
            required={true}
            />
        </Form.Group>

        <Form.Group controlId="lastName" className='mt-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="last_name"
            value={ contact?.last_name || '' }
            placeholder="Enter Last Name"
            required={true}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="email" className='mt-3'>
          <Form.Label>
            Email {errors.email && <span className="text-danger">{errors.email[0]}</span>}
          </Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={ contact?.email || '' }
            placeholder="Enter Email Address"
            onChange={handleInputChange}
            required={true}
          />
        </Form.Group>

        <Form.Group controlId="phone" className='mt-3'>
          <Form.Label>
            Phone Number {errors.phone && <span className="errorMsg text-danger">{errors.phone[0]}</span>}
          </Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="phone"
            value={ contact?.phone || '' }
            placeholder="Enter Phone Number"
            onChange={handleInputChange}
            required={true}
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