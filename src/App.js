
import React, { useEffect, useState } from 'react';

import NavBar from './NavBar/NavBar';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contact from './LandingPage/Contact';
import Homepage from './LandingPage/Homepage';

import SignIn from './LandingPage/sign_in';
import SignUp from './LandingPage/sign_up'
import ContactList from './LandingPage/ContactList';
import UploadBook from './LandingPage/uploadBook';
import Footer from './footer/footer';
import BookList from './LandingPage/BookList';

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {

    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById('NavBar');
      if (navBar) {
        if (window.pageYOffset === 0) {
          navBar.classList.remove('sticky');
        } else {
          navBar.classList.add('sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">


      <h1 className='my-5'><span>BOOKSHELF</span></h1>

      {/* {(typeof backendData.users==='undefined') ?(
  <p>Loading....</p>
):(
  backendData.users.map((user,i)=>(
    <p key={i}>{user}</p>
  ))
)} */}

      <div className="row m-3" id="NavBar">
        <NavBar />
      </div>
      <div className="row m-4" id="MainWindow">
        <Routes>
          <Route>
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/setting" element={<BookList />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/ContactList" element={<ContactList />} />
            <Route path="/uploadBook" element={<UploadBook />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Route>

        </Routes>
      </div>
      <div className="row" id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
