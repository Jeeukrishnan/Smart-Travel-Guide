import React from 'react';
import {Redirect} from 'react-router-dom';
import {Navbar} from '../navbar.js';

export class ViewTour extends React.Component {

    constructor(){
        super();

        this.state = {
            hotel : [],
        }
       
    }
    
    

  render () {
    var name = this.props.match.params.tourname;
    var dailyCost= this.props.match.params.dailyCost;
    var aviTour = this.props.match.params.aviTour;
    var bookedTour = this.props.match.params.bookedTour;



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
            <li className="list-group-item">Available Tickets: {aviTour}</li>
            <li className="list-group-item">Tickets Booked: {bookedTour}</li>
          </ul>
        </div>
      </div>
    );
  }
}
