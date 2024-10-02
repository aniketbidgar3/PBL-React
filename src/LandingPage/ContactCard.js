import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ContactCard({ contactData, index }) {
  const [showModal, setShowModal] = useState(false);

  const [bookData, setbookData] = useState([]);

  const handlePlaceOrder = (email1, phone1) => {
    const value = {
      email: email1,
      phone: phone1,
    };

    bookData.splice(0, 1, value);
    console.log(bookData);

    setShowModal(true);
    // Perform any other actions related to placing the order here
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card text-center col-md-2 m-3" key={index}>
      <div className="card-body">
        <h5 className="card-title">{contactData.Name}</h5>
        <h6 className="card-text">{contactData.bookName}</h6>
        <p className="card-text">{contactData.Location}</p>
        <p>₹{contactData.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => handlePlaceOrder(contactData.email, contactData.phone)}
        >
          Place Order
        </button>
      </div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Order Placed Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {bookData.map((e) => (
              <div>
                {" "}
                you can confirm your order from this email <b>{e.email}</b> or
                this fone number <b>{e.phone}</b>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ContactCard;
