import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function BookCard({ bookData }) {
  

  return (
    <div className='col-md-3 my-3 lh-sm '>

      <Card>
        <Card.Header ><h5>{bookData.bookName}</h5></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {bookData.bookCity}
            </p>
            <footer className='h6'>
              Publication : <cite title="Source Title" className='fs-sm'>{bookData.bookPubliser} </cite><br />
              Original Price : <cite title="Source Title" className='' >&#x20B9;{bookData.bookPrice} </cite>
            </footer>
          <a href='/ContactList'><Button className=' mt-3 ' >{bookData.button}</Button></a>
        </blockquote>
      </Card.Body>
    </Card>
    </div >
  );
}

export default BookCard;