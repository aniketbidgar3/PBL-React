import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../assets/images/corosel1.jpeg";
import Carousel2 from "../assets/images/corosel2.jpeg";
import Carousel3 from "../assets/images/corosel3.jpeg";
import Carousel4 from "../assets/images/corosel4.jpeg";
import Carousel5 from "../assets/images/corosel5.jpeg";
import wheatImg from "../assets/images/book3.jpg";

// import BookList from './BookList';
import Setting from "./setting";

function Homepage() {
  return (
    <div>
      <div className="position-relative">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={wheatImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "80%", height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={Carousel1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "80%", height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={Carousel2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "80%", height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={Carousel3}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: "80%", height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={Carousel4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: "80%", height: "60vh" }}
              className="d-block w-100 carousel-image"
              src={Carousel5}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Setting />
      </div>
    </div>
  );
}

export default Homepage;
