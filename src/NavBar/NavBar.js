import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Model from 'react-modal'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  return (
    <Navbar expand="lg" className='bg-secondary '>
      <Container fluid>
        <Navbar.Brand href="#" className='border-right-light text-white'>BookShelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '90px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='border border-light mx-2 rounded-2 text-white' >Home </Nav.Link>

            <Nav.Link href="/setting" className='border border-light mx-2 rounded-2 text-white'>
              Setting

            </Nav.Link>
            <Nav.Link href="/uploadBook" className='border border-light mx-2 rounded-2 text-white'>
              Sell Books

            </Nav.Link>
            <Nav.Link href="/contactus" className='border border-light mx-2 rounded-2 text-white'>Contact Us</Nav.Link>
            {/*<NavDropdown title="SignIn" id="navbarScrollingDropdown" className='border border-light mx-2 rounded-2 text-white' >
              <NavDropdown.Item href="#action3" >
                Sign in as  Admin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" >
                Sign in as Buyer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Sign in as Seller
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>


          <Form className="d-flex ">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            {/* <Button variant="outline-light">SignIn</Button> */}
            <div>
              {/* <a href='/sign_in'><Button variant="outline-light" onClick={()=>setvisible(true)}>SignIn</Button></a> */}
              <a href='/sign_in'><Button variant="outline-light">SignIn</Button></a>


              {/* <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{height:'100px',width:'20px'}}>
                  <div className=''>
                      <h1>hello world</h1>
                      <button onClick={()=>setvisible(false)}>close</button>
                  </div>
                 </Model> */}
            </div>

            {/* <Button variant="outline-light">Sign Up</Button> */}

          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;