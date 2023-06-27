import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Payout = () => {

 
 const [email, setEmail] = useState('');
 const [address, setAddress] = useState('');
 const [city, setCity] = useState('');
 const [zip, setZip] = useState('');
 const [pass, setPass] = useState('');


 
 const navigate = useNavigate();

//  this purchase function only triggers when form is validated correctly
 const purchase = () => {
  console.log(email, address, city, zip) 
  alert('thanks for purchase')
  navigate("/");
 }

 const clickfunc = (e) =>{
  e.preventDefault();  
  email.length < 5 ? alert('email not valid') :
  pass.length < 6 ? alert('password is atleat 8 characters long') :
  address.length < 5 ? alert('please enter correct address') :
  city < 1 ? alert('please enter city') :
  zip < 4 ? alert('please enter correct zip code') :
  (
    purchase()
  )
  


 }

 return (
 <div>

    <h1 style={{margin:"1rem"}}> Complete your purchase </h1>

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
           placeholder="Enter email"  
           value={email} 
           onChange={(e) => setEmail(e.target.value) }
           />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Password" 
          required 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" 
        value={address}
        required 
        onChange={(e) =>  setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Sign up for mailing list" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => clickfunc(e)}>
        Submit
      </Button>
    </Form>
     </div>
  );
}

export default Payout;