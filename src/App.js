import React, { useEffect, useState } from "react";

import NavBar from "./NavBar/NavBar";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./LandingPage/Contact";
import Homepage from "./LandingPage/Homepage";
import SignIn from "./LandingPage/sign_in";
import SignUp from "./LandingPage/sign_up";
import ContactList from "./LandingPage/ContactList";
import UploadBook from "./LandingPage/uploadBook";
import Footer from "./footer/footer";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("NavBar");
      if (navBar) {
        if (window.pageYOffset === 0) {
          navBar.classList.remove("sticky");
        } else {
          navBar.classList.add("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="my-5">
        <span>BOOKSHELF</span>
      </h1>

      <div className="row m-3" id="NavBar">
        <NavBar />
      </div>
      <div className="row m-4" id="MainWindow">
        <Routes>
          <Route>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/ContactList" element={<ContactList />} />
            <Route path="/uploadBook" element={<UploadBook />} />
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
