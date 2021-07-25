import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/headFoot.css'
import { Link } from 'react-router-dom';
export class Navbar extends React.Component {
    render() {

        console.log(this.props);
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <Link className="navbar-brand" to="/admin">Trips And Travels</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggle navbar-toggler-icon"></span>
              </button>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin" >USERS </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/hotel" >HOTELS </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/tour" >TOUR BOOK</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="navbar-brand" to="/login" onClick={this.props.dealLogout} >LOGOUT</Link>
                
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}