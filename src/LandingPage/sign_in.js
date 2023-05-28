
import books from "../assets/images/signIn.jpg"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
// import NavBar from './NavBar';

// import SignUp from './sign_up1';
// import VerticalNavbar from './VerticalNavbar';

function SignUp() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Example: Send data to server or perform client-side validation

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };



  return (

    // <div className='row m-auto'style={{height:'90vh', backgroundColor:'#ddd'}}>

    <div className='row m-5'>
     

      <img src={books} className='col-md-5 w-40' alt='book img ' />

      {/* <img src={books} style={{ height:'70vh', marginTop:'10vh' , border:'solid black' }} alt='book img '/> */}

      {/* <Form className=' col-md-6 mx-3' style={{paddingTop:'5vh',marginTop:'10vh',height:'70vh', backgroundColor:'white'}}> */}
      <div className=' col-md-6  text-center'>
      
      <Form  >
      
      <h1 >Login</h1>
      <p className='mb-3'>It is for free and may take few seconds only</p>
      <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted my-5">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4 mx-5" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

     
      <Button variant="primary" type="submit" href="/" >
      Login
      </Button>

      <div className="row mt-4">
        
        <a className='col-sm' href="#sign up">Forgot password?</a>
      
    </div>
       
    </Form>
      </div>
      

    </div>

  );
}

export default SignUp;