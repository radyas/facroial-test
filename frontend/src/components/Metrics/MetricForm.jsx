import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { addMetric } from '../../services/metricService';
import { useHistory } from 'react-router';

function MetricForm() {
  const history = useHistory();
  const [metric, setMetric] = useState({
    name: '',
    value: '',
    timestamp: ''
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addMetric(metric)
    .then((response) =>{
      history.push('/metrics')
    })
    .catch((error) => {
      alert('Unable to add Metric. Check console for details.')
      console.log(error.response?.data);
    })
  };

  const handleInputChange = (event) => {
    if(event instanceof Array){
      setMetric((prevState) => ({
        ...prevState,
        timestamp: event[0].toISOString()
      }));
    }
    else{
      const { name, value } = event.target;
      setMetric((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div className="main-form">
      <Form onSubmit={handleOnSubmit}>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={ metric?.name || '' }
            placeholder="Enter Name"
            onChange={handleInputChange}
            required={true}
            />
        </Form.Group>

        <Form.Group controlId="value" className='mt-3'>
          <Form.Label>Value</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="value"
            value={ metric?.value || '' }
            placeholder="Enter value"
            required={true}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="value" className='mt-3'>
          <Form.Label>Timestamp</Form.Label>
          <br />
          <Flatpickr
            className='form-control bg-light'
            data-enable-time
            value={ metric?.timestamp || ''}
            onChange={ handleInputChange }
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
}

export default MetricForm
