
import NavBar from "./NavBar/NavBar";
import "./App.css";
import { Routes,Route } from 'react-router-dom';
import Contact from "./LandingPage/Contact";
import Homepage from "./LandingPage/Homepage";
import Setting from "./LandingPage/setting";
import Inbox from "./LandingPage/inbox";
import SignIn from "./LandingPage/sign_in";
import ContactList from "./LandingPage/ContactList";
// export function App(props){
function App() {
  return (
    
    <div className=" App">
      <div className="row m-3 " id="NavBar">
        <NavBar />
      </div>
      <div className="row m-4" id="MainWindow">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contactus" element={<Contact />} />
         
          <Route path="/setting" element={<Setting/>} />
         
          
          <Route  path="/sign_in" element={<SignIn/>} />
          <Route  path="/ContactList" element={<ContactList/>} />
          
        </Routes>
      </div>
      <div className="row" id="Footer"></div>
    </div>
    

  );
}

export default App;

