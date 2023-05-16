import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import books from "../assets/images/book3.jpg"
// import VerticalNavbar from './VerticalNavbar';

function SignIn() {
  return (
    
    // <div className='row m-auto'style={{height:'90vh', backgroundColor:'#ddd'}}>
    
    <div className='row m-5'>
     
      <img src={books}  className='col-md-5 w-40' alt='book img '/>
        
        {/* <img src={books} style={{ height:'70vh', marginTop:'10vh' , border:'solid black' }} alt='book img '/> */}
   
    {/* <Form className=' col-md-6 mx-3' style={{paddingTop:'5vh',marginTop:'10vh',height:'70vh', backgroundColor:'white'}}> */}
    <Form className=' col-md-6 ' >
      <h1 >BookShelf.com</h1>
      <p className='mb-5'>It is for free and may take few seconds only</p>
      <Form.Group className="mb-4 mx-5" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted my-5">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-5 mx-5" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div class="row mb-4">
      <a href="#!">Forgot password?</a>
  </div>
     
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>

    </div>
    
  );
}

export default SignIn;