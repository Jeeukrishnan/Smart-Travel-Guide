import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/headFoot.css'
import { Link } from 'react-router-dom';
export class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <Link className="navbar-brand" to="/main">Trips And Travels</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggle navbar-toggler-icon"></span>
              </button>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/main" >HOME </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" >HOTELS </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tours" >TOUR BOOK </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/mybookings" >BOOKINGS_HISTORY </Link>
                </li>
                <li className="nav-item">
                  <a className="navbar-brand" onClick={this.props.dealLogout} id="logout-nav">LOGOUT </a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}