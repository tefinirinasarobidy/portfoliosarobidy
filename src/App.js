
import './App.css';

import "jquery/dist/jquery.js";
import "popper.js/dist/popper.min.js"
import Profile from "./component/Home/Profile";
import Nav from "./component/Nav/Nav";
import AboutMe from "./component/AboutMe/AboutMe";
import Contact from "./component/ContactMe/contact";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Profile/> 
      <Contact/>
    </div>
  );
}

export default App;
