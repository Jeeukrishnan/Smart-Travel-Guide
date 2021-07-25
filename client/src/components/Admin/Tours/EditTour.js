import React from "react";
import {Navbar} from  "../navbar.js";
import {Redirect} from 'react-router-dom';


export class EditTour extends React.Component {

    constructor() {
        super();

        this.state = {
            successful: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault ();
    
        const obj = { 
          tourname: e.target.tourname.value,
          dailyCost: e.target.dailyCost.value,
          aviTour: e.target.aviTour.value,
          bookedTour: e.target.bookedTour.value,
        };
        console.log(obj);
        fetch ('http://localhost:3001/admintour/edit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (obj),
        })
          .then (res => {
            console.log (res);
            if (res.ok) return res.json ();
            else throw new Error ();
          })
          .then (res => {
            alert (`Hotel edited Successfully `);
            this.setState ({successful: true});
          })
          .catch (error => {
            console.error (`Error adding user: ${error}`);
          });
    }


 render(){
    if(this.state.successful) {
        return <Redirect to="/admin/tour" />;
      }
    
    var tourname = this.props.match.params.tourname;

      return (
    <div>
      <div>
      <Navbar dealLogout={this.props.dealLogout} />
      </div>
      <br /><br /><br/>
     <div className="container" >
      <div >
        <h2 className="text-center mb-4">Edit A Tourist Place</h2>
        <form  onSubmit={e => this.onSubmit(e)}>
       
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="tourname"
              value={tourname}
              readOnly
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Ticket Cost"
              name="dailyCost"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Tours Booked"
              name="bookedTour"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Tours Available"
              name="aviTour"
            />
          </div>
          <button className="btn btn-warning btn-block">Update Hotel</button>
        </form>
      </div>
    </div>
    </div>
    );
 };
};