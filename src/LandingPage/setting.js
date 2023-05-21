import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaTimes } from 'react-icons/fa';

function Setting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [newBook, setNewBook] = useState({
    bookName: '',
    bookPrice: 0,
    bookPubliser: '',
    bookCity: '',
  });
  const [userBooks, setUserBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const booksDetail = [
    // Existing books data...
     
    {
      bookName:"1.All FE Books",
      bookPrice:2000,
      bookPubliser:"Techneo ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"2.All FE Books",
      bookPrice:2000,
      bookPubliser:"Techknowledge ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"3.All FE Books",
      bookPrice:2000,
      bookPubliser:"Nirali ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"4.All SE Books",
      bookPrice:2000,
      bookPubliser:"Techneo ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"5.All SE Books",
      bookPrice:2000,
      bookPubliser:"Techknowledge ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"6.All SE Books",
      bookPrice:2000,
      bookPubliser:"Nirali ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"7.All TE Books",
      bookPrice:2000,
      bookPubliser:"Techneo ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"8.All TE Books",
      bookPrice:2000,
      bookPubliser:"Techknowledge ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"9.All TE Books",
      bookPrice:2000,
      bookPubliser:"Nirali ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"10.All BE Books",
      bookPrice:2000,
      bookPubliser:"Techneo ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
  },
  {
      bookName:"11.All BE Books",
      bookPrice:2000,
      bookPubliser:"Techknowledge ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
      ,button:"Contact Owner"
  },
  {
      bookName:"12.All BE Books",
      bookPrice:2000,
      bookPubliser:"Nirali ",
      bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
     
  },
  {
      bookName: "13.Engineering Mathematics-1",
      bookPrice: 230,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "14.Engineering Mathematics-2",
      bookPrice: 245,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "15.Engineering Physics",
      bookPrice: 265,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "16.Engineering Chemistry",
      bookPrice: 265,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "17.Engineering Graphics",
      bookPrice: 330,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  
  {
      bookName: "18.Basic Electronics Engineering",
      bookPrice: 230,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "19.Basic Electrical Engineering",
      bookPrice: 235,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "20.Engineering Mechanics",
      bookPrice: 290,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "21.Programming and Problem Solving",
      bookPrice: 260,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "22.Systems in Mechanical Engineering",
      bookPrice: 280,
      bookPubliser: "Techknowledge",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "23.Engineering Mathematics-1",
      bookPrice: 230,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "24.Engineering Mathematics-2",
      bookPrice: 245,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "25.Engineering Physics",
      bookPrice: 265,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "26.Engineering Chemistry",
      bookPrice: 265,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "27.Engineering Graphics",
      bookPrice: 330,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  
  {
      bookName: "28.Basic Electronics Engineering",
      bookPrice: 230,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "29.Basic Electrical Engineering",
      bookPrice: 235,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "30.Engineering Mechanics",
      bookPrice: 290,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "31.Programming and Problem Solving",
      bookPrice: 260,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "32.Systems in Mechanical Engineering",
      bookPrice: 280,
      bookPubliser: "Technical",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "33.Engineering Mathematics-1",
      bookPrice: 230,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "34.Engineering Mathematics-2",
      bookPrice: 245,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "35.Engineering Physics",
      bookPrice: 265,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "36.Engineering Chemistry",
      bookPrice: 265,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "37.Engineering Graphics",
      bookPrice: 330,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  
  {
      bookName: "38.Basic Electronics Engineering",
      bookPrice: 230,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "39.Basic Electrical Engineering",
      bookPrice: 235,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "40.Engineering Mechanics",
      bookPrice: 290,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "41.Programming and Problem Solving",
      bookPrice: 260,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  {
      bookName: "42.Systems in Mechanical Engineering",
      bookPrice: 280,
      bookPubliser: "Nirali",
      bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
  },
  


  ];

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    let filteredResults = booksDetail.filter((book) =>
      book.bookName.toLowerCase().includes(searchTerm)
    );

    if (sortOrder === 'asc') {
      filteredResults = filteredResults.sort((a, b) => a.bookPrice - b.bookPrice);
    } else if (sortOrder === 'desc') {
      filteredResults = filteredResults.sort((a, b) => b.bookPrice - a.bookPrice);
    }

    setSearchResults(filteredResults);
  };

  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);

    let sortedResults = [...searchResults];

    if (newSortOrder === 'asc') {
      sortedResults = sortedResults.sort((a, b) => a.bookPrice - b.bookPrice);
    } else if (newSortOrder === 'desc') {
      sortedResults = sortedResults.sort((a, b) => b.bookPrice - a.bookPrice);
    }

    setSearchResults(sortedResults);
  };

  const handleBookSelection = (book) => {
    const isSelected = selectedBooks.some(
      (selectedBook) => selectedBook.bookName === book.bookName
    );

    if (isSelected) {
      setSelectedBooks(
        selectedBooks.filter((selectedBook) => selectedBook.bookName !== book.bookName)
      );
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleRemoveBook = (book) => {
    if (userBooks.some((userBook) => userBook.bookName === book.bookName)) {
      setUserBooks(userBooks.filter((userBook) => userBook.bookName !== book.bookName));
    }

    setSearchResults(searchResults.filter((resultBook) => resultBook.bookName !== book.bookName));

    setSelectedBooks(selectedBooks.filter((selectedBook) => selectedBook.bookName !== book.bookName));
  };

  const handlePlaceOrder = () => {
    console.log('Placing order:', selectedBooks);
  };

  const handleAddBook = () => {
    setShowAddBookModal(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setUserBooks([...userBooks, newBook]);

    setSearchResults([...searchResults, newBook]);

    setNewBook({
      bookName: '',
      bookPrice: 0,
      bookPubliser: '',
      bookCity: '',
    });

    setShowAddBookModal(false);
  };

  useEffect(() => {
    setSearchResults(booksDetail);
  }, []);

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
  <input
    type="search"
    placeholder="Search Books Here"
    className="m-3"
    aria-label="Search"
    value={searchTerm}
    onChange={handleSearchChange}
    style={{
      width: "400px",
      padding: "10px",
      border: "1px solid #ccc",
      outline: "none"
    }}
  />
  
  <Form.Select
    value={sortOrder}
    onChange={handleSortChange}
    style={{ width: '200px' }}
  >
    <option value="asc">Sort by Price (Low to High)</option>
    <option value="desc">Sort by Price (High to Low)</option>
  </Form.Select>
  
  <Button variant="primary" onClick={handleAddBook} style={{ marginLeft: '10px' }}>
    Add Book
  </Button>
</div>


      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <div className="col-md-3 my-2" key={index}>
              <Card>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <h5>{book.bookName}</h5>
                    {userBooks.some((userBook) => userBook.bookName === book.bookName) && (
                      <Button variant="link" onClick={() => handleRemoveBook(book)} style={{ color: 'red' }}>
                        <FaTimes />
                      </Button>
                    )}
                  </div>
                </Card.Header>

                <Card.Body>
                  <blockquote className="blockquote">
                    <p>{book.bookCity}</p>
                    <footer className="h6">
                      Publication:{' '}
                      <cite title="Source Title" className="fs-sm">
                        {book.bookPubliser}
                      </cite>
                      <br />
                      Original Price:{' '}
                      <cite title="Source Title" className="">
                        ₹{book.bookPrice}
                      </cite>
                    </footer>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectedBooks.some((selectedBook) => selectedBook.bookName === book.bookName)}
                        onChange={() => handleBookSelection(book)}
                      />
                      <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                        {selectedBooks.some((selectedBook) => selectedBook.bookName === book.bookName)
                          ? 'Selected'
                          : 'Select'}
                      </label>
                    </div>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>

      {selectedBooks.length > 0 && (
        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" onClick={handlePlaceOrder} href='/ContactList'>
            Place Order
          </Button>
        </div>
      )}

      {/* Add Book Modal */}
      <Modal show={showAddBookModal} onHide={() => setShowAddBookModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="bookName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                value={newBook.bookName}
                onChange={(e) => setNewBook({ ...newBook, bookName: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="bookPrice">
              <Form.Label>Book Price</Form.Label>
              <Form.Control
                type="number"
                value={newBook.bookPrice}
                onChange={(e) => setNewBook({ ...newBook, bookPrice: parseInt(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="bookPublisher">
              <Form.Label>Book Publisher</Form.Label>
              <Form.Control
                type="text"
                value={newBook.bookPubliser}
                onChange={(e) => setNewBook({ ...newBook, bookPubliser: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="bookCity">
              <Form.Label>Book Details</Form.Label>
              <Form.Control
                type="text"
                value={newBook.bookCity}
                onChange={(e) => setNewBook({ ...newBook, bookCity: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Setting;
