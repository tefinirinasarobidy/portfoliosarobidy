import React from 'react';
import "./Nav.css";

export default function Nav() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a 
        className="navbar-brand" href="#">Navbar
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(Current)</span>
            </a>
 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
    
   </nav>


    )
}