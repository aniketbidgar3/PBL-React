

import books from "../assets/images/signup.jpeg"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {  useState } from 'react';

// import SignUp from './sign_up1';
// import VerticalNavbar from './VerticalNavbar';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Example: Send data to server or perform client-side validation

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  function signup(){
 
    let item={name,email,password,mobileNumber}
    console.warn(item)

  }

  return (

    // <div className='row m-auto'style={{height:'90vh', backgroundColor:'#ddd'}}>

    <div className='row m-5'>
     

      <img src={books} className='col-md-5 w-40' alt='book img ' />

      {/* <img src={books} style={{ height:'70vh', marginTop:'10vh' , border:'solid black' }} alt='book img '/> */}

      {/* <Form className=' col-md-6 mx-3' style={{paddingTop:'5vh',marginTop:'10vh',height:'70vh', backgroundColor:'white'}}> */}
      <div className=' col-md-6  text-center' >
      
      <h2 >Sign Up</h2>
      <Form onSubmit={handleSubmit} className="mx-5">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="mobileNumber">
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control
    type="tel"
    placeholder="Enter your mobile number"
    value={mobileNumber}
    onChange={(e) => setMobileNumber(e.target.value)}
  />
</Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        

        <div className="mt-3  ">
          <Button  onClick={signup}    variant="primary" type="submit"href="/">
          Register
          </Button>
        </div>

        <p className="mt-4">
          Already have an account? <a href="/sign_in">Login</a>
        </p>
      </Form>
      </div>
      

    </div>

  );
}

export default SignIn;
