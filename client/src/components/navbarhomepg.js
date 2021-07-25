import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/headFoot.css'
import { Link } from 'react-router-dom';
import { HashLink as Link2 } from 'react-router-hash-link';
export class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <Link className="navbar-brand" to="/">Trips And Travels</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggle navbar-toggler-icon"></span>
              </button>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/" >HOME </Link>
                </li>
                <li className="nav-item">
                  <Link2 className="nav-link" to="/#About" >ABOUT US</Link2>
                </li>
              </ul>
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/login" >LOGIN </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/signup" >SIGNUP </Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}