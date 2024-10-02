import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Modal, Button, Form } from "react-bootstrap";

const ContactList = () => {
  const [contactDetail, setContactDetail] = useState([
    {
      Name: "Seller 1",
      bookName: "Book 1",
      Location: "Adress 1",
      price: "Rs.120/-",
      email: "example123@gmail.com",
      phone: "1234567890",
    },
    {
      Name: "Seller 2",
      bookName: "Book 2",
      Location: "Adress 2",
      price: "Rs.120/-",
      email: "example123@gmail.com",
      phone: "1234567890",
    },
    {
      Name: "Seller 3",
      bookName: "Book 3",
      Location: "Adress 3",
      price: "Rs.120/-",
      email: "example123@gmail.com",
      phone: "1234567890",
    },
    {
      Name: "Seller 4",
      bookName: "Book 4",
      Location: "Adress 4",
      price: "Rs.120/-",
      email: "example123@gmail.com",
      phone: "1234567890",
    },
    {
      Name: "Seller 5",
      bookName: "Book 5",
      Location: "Adress 5",
      price: "Rs.120/-",
      email: "example123@gmail.com",
      phone: "1234567890",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({
    Name: "",
    bookName: "",
    Location: "",
    price: "",
    email: "",
    phone: "",
  });

  const handleAddContact = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // ...
  // ...

  const handleSaveContact = () => {
    // Phone number validation

    if (!newContact.Name || !newContact.bookName || !newContact.Location) {
      alert("Please fill the remaining fields.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(newContact.phone)) {
      alert("Please enter a 10-digit phone number.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newContact.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Price validation
    const priceRegex = /^\d+$/;
    if (!priceRegex.test(newContact.price)) {
      alert("Please enter the price in digits only.");
      return;
    }

    // All validations passed, save the contact
    setContactDetail((prevState) => [...prevState, newContact]);
    setNewContact({
      Name: "",
      bookName: "",
      Location: "",
      price: "",
      email: "",
      phone: "",
    });
    setShowModal(false);
  };

  // ...

  // ...

  return (
    <div>
      <div
        className=" d-flex align-items-center justify-content-center"
        onClick={handleAddContact}
        style={{ cursor: "pointer" }}
      >
        <div className="card ">
          <div className="card-body ">
            <h5 className="card-title">Add Contact</h5>
          </div>
        </div>
      </div>
      <div className="row mx-4">
        {contactDetail.map((data, index) => (
          <ContactCard contactData={data} key={index} />
        ))}

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={newContact.Name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bookName"
                  value={newContact.bookName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="Location"
                  value={newContact.Location}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={newContact.price}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={newContact.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={newContact.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSaveContact}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ContactList;
