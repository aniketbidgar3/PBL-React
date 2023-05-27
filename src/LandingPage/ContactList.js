
// import ContactCard from "./ContactCard";

// const contactDetail=[



//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },
//     {
//         Name:"Harshvardhan Gaikwad",
//         bookName:"Engineering Chemistry",
//         Location:"Juna Bajar,pune ",
//         price:"Rs.120/-",
//         email:"harshBhadav@123Gmail.com",
//         phone:"932297276",

//     },



// ]
//     function ContactList() {
//     return (
//         <div className="row mx-4">

//             {
//                 contactDetail.map((data)=><ContactCard contactData={data}/>)


//             }
//         </div>
//     );
// }

// export default ContactList;

import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { Modal, Button, Form } from "react-bootstrap";

const ContactList = () => {
    const [contactDetail, setContactDetail] = useState([
        
           
        {
            Name: "Harshvardhan Gaikwad 0",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"aniketbidgar2@gmail.com",
            phone: "9322978772",
        },
        {
            Name: "Harshvardhan Gaikwad 1",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"vedant@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad 2",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"swati@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad 3",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"tirtha@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        {
            Name: "Harshvardhan Gaikwad",
            bookName: "Engineering Chemistry",
            Location: "Juna Bajar, Pune",
            price: "Rs.120/-",
            email:"harsh@123Gmail.com",
            phone: "932297276",
        },
        // ...other contact details
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

        if (
            !newContact.Name ||
            !newContact.bookName ||
            !newContact.Location 
           
          ) {
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
        <div >
            <div className=" d-flex align-items-center justify-content-center" onClick={handleAddContact}  style={{ cursor: "pointer" }} >
                <div className="card " >
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
