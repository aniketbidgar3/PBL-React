import Carousel from 'react-bootstrap/Carousel';
import cornImg from "../assets/images/book1.jpg";
import treeImg from "../assets/images/book2.jpeg";
import wheatImg from "../assets/images/book3.jpg";
import BookList from './BookList';

function Homepage() {
  return (
    <div className='position-relative'>
      <Carousel style={{backgroundColor:'#999'}}>
        <Carousel.Item>
         <a href="/"><img style={{width:'80%' ,height: '50vh' ,opacity:'0.6'}}
            className="d-block w-55 mx-auto my-5"
            src={cornImg}
            alt="First slide"
          /></a> 
          <Carousel.Caption>
            <h3>Buy Books From Here</h3>
            <p>Books can be second hand but knowledge can't</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="/uploadBook"><img style={{width:'80%' ,height: '50vh',opacity:'0.8'}}
            className="d-block  w-55 mx-auto my-5"
            src={treeImg}
            alt="Second slide"
          /></a>
        
          <Carousel.Caption>
            <h3>Sell Books Here</h3>
            <p>You can Sell Your Books Here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="/donateBook"><img style={{width:'80%' ,height: '50vh' ,opacity:'0.8'}}
            className="d-block w-55 mx-auto my-5"
            src={wheatImg}
            alt="Third slide"
          /></a>

          <Carousel.Caption>
            <h3>Donate Books Here</h3>
            <p>Your Books Can Change Lives of Many Students</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className='mt-2 mb-2 text-white'style={{backgroundColor:'#999'}}>Book List</h1>
      <BookList/>
      
      
    </div>
  );
}

export default Homepage;