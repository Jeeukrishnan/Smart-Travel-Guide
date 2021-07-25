import React from 'react';
import {Redirect} from 'react-router-dom';
import {Navbar} from '../navbar.js';

export class ViewHotel extends React.Component {

    constructor(){
        super();

        this.state = {
            hotel : [],
        }
       
    }
    
    

  render () {
    var name = this.props.match.params.hotelname;
    var dailyCost= this.props.match.params.dailyCost;
    var roomsAvi = this.props.match.params.roomAvi;
    var address = this.props.match.params.address;
    var noOfStar = this.props.match.params.noOfStar;


    return (
      <div>
        <Navbar
          dealLogout={() => {
            return <Redirect to="/login" />;
          }}
        />
        <br /> <br /> <br />
        <div className="form">
          <h1 className="display-5">Hotel Details</h1>
          <hr />
          <ul className="list-group w-100">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Daily Cost: {dailyCost}</li>
            <li className="list-group-item">Rating: {noOfStar}</li>
            <li className="list-group-item">Address: {address}</li>
            <li className="list-group-item">Rooms Available: {roomsAvi}</li>
          </ul>
        </div>
      </div>
    );
  }
}
