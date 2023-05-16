import React, { useState,useEffect  } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function LiveSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const booksDetail = [
     
    
    {
        bookName:"All FE Books",
        bookPrice:2000,
        bookPubliser:"Techneo ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All FE Books",
        bookPrice:2000,
        bookPubliser:"Techknowledge ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All FE Books",
        bookPrice:2000,
        bookPubliser:"Nirali ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All SE Books",
        bookPrice:2000,
        bookPubliser:"Techneo ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All SE Books",
        bookPrice:2000,
        bookPubliser:"Techknowledge ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All SE Books",
        bookPrice:2000,
        bookPubliser:"Nirali ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All TE Books",
        bookPrice:2000,
        bookPubliser:"Techneo ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All TE Books",
        bookPrice:2000,
        bookPubliser:"Techknowledge ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All TE Books",
        bookPrice:2000,
        bookPubliser:"Nirali ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All BE Books",
        bookPrice:2000,
        bookPubliser:"Techneo ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All BE Books",
        bookPrice:2000,
        bookPubliser:"Techknowledge ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
        ,button:"Contact Owner"
    },
    {
        bookName:"All BE Books",
        bookPrice:2000,
        bookPubliser:"Nirali ",
        bookCity:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer ,posuere erat a ante"
       
    },
    {
        bookName: "Engineering Mathematics-1",
        bookPrice: 230,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mathematics-2",
        bookPrice: 245,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Physics",
        bookPrice: 265,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Chemistry",
        bookPrice: 265,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Graphics",
        bookPrice: 330,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    
    {
        bookName: "Basic Electronics Engineering",
        bookPrice: 230,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Basic Electrical Engineering",
        bookPrice: 235,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mechanics",
        bookPrice: 290,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Programming and Problem Solving",
        bookPrice: 260,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Systems in Mechanical Engineering",
        bookPrice: 280,
        bookPubliser: "Techknowledge",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mathematics-1",
        bookPrice: 230,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mathematics-2",
        bookPrice: 245,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Physics",
        bookPrice: 265,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Chemistry",
        bookPrice: 265,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Graphics",
        bookPrice: 330,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    
    {
        bookName: "Basic Electronics Engineering",
        bookPrice: 230,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Basic Electrical Engineering",
        bookPrice: 235,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mechanics",
        bookPrice: 290,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Programming and Problem Solving",
        bookPrice: 260,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Systems in Mechanical Engineering",
        bookPrice: 280,
        bookPubliser: "Technical",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mathematics-1",
        bookPrice: 230,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mathematics-2",
        bookPrice: 245,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Physics",
        bookPrice: 265,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Chemistry",
        bookPrice: 265,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Graphics",
        bookPrice: 330,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    
    {
        bookName: "Basic Electronics Engineering",
        bookPrice: 230,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Basic Electrical Engineering",
        bookPrice: 235,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Engineering Mechanics",
        bookPrice: 290,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Programming and Problem Solving",
        bookPrice: 260,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    {
        bookName: "Systems in Mechanical Engineering",
        bookPrice: 280,
        bookPubliser: "Nirali",
        bookCity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer, posuere erat a ante"
    },
    
    
    
  ];


  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredResults = booksDetail.filter((book) =>
      book.bookName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredResults);
  };

  // Show all books initially
  useEffect(() => {
    setSearchResults(booksDetail);
  }, []);

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search Books Here"
          className="m-3 "
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{  width: "400px", padding: "10px 10px 10px 10px",
          width: "400px",
          border:" 1px solid #ccc",
          outline:"none"
         
          }} 
        />
        
      </div>
      <div className='row'>
        {searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <div className="col-md-3 my-2" key={index}>
              <Card>
                <Card.Header>
                  <h5>{book.bookName}</h5>
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote">
                    <p>{book.bookCity}</p>
                    <footer className='h6'>
                      Publication : <cite title="Source Title" className='fs-sm'>{book.bookPubliser}</cite><br />
                      Original Price : <cite title="Source Title" className=''>₹{book.bookPrice}</cite>
                    </footer>
                    <a href='/ContactList'><Button className='mt-3'>contact owner</Button></a>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
            <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default LiveSearchPage;