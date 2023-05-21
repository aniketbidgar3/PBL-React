import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Home &amp; Kitchen</a></li>
              <li><a href="#">Books</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-light my-3" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Bookshelf2nd. All rights reserved.</p>
          <p className="mt-1">
            <FontAwesomeIcon icon={faCircle} className="me-1" />
            Made with love by Bookshelf2nd Team
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
