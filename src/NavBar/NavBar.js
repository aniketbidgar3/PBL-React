import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserPlus,
  faEnvelope,
  faSignInAlt,
  faInfoCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        {/* <Navbar.Brand href="#" className='border-right-light text-white'>BookShelf</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "90px" }}
            navbarScroll
          >
            <Nav.Link
              href="/Homepage"
              className="border border-light mx-2 rounded-2 text-white"
            >
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link
              href="/ContactList"
              className="border border-light mx-2 rounded-2 text-white"
            >
              <FontAwesomeIcon icon={faBook} className="me-2" />
              Become a seller
            </Nav.Link>
            <Nav.Link
              href="/contactus"
              className="border border-light mx-2 rounded-2 text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/uploadBook"
              className="border border-light mx-2 rounded-2 text-white"
            >
              About us
              <FontAwesomeIcon icon={faInfoCircle} className="ms-2" />
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className="border border-light mx-2 rounded-2 text-white"
            >
              <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
