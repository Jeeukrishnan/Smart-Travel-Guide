import React from "react";
import {Navbar} from  "../navbar.js";
import {Redirect} from 'react-router-dom';

export class AddHotel extends React.Component {
    constructor(){
        super();

        this.state = {
            successful: false,
        }   
        this.onSubmit = this.onSubmit.bind(this);
    }

   
    onSubmit(e){
        e.preventDefault ();
        console.log ('Adding');
    
        const obj = {
          hotelname: e.target.hotelname.value,
          dailyCost: e.target.dailyCost.value,
          address: e.target.address.value,
          roomAvi: e.target.roomAvi.value,
          roomBook: e.target.roomBook.value,
          noOfStar: e.target.noOfStar.value,
          img_url: e.target.img_url.value,
          amenities: e.target.amenities.value,
          abouthotel: e.target.abouthotel.value,
        };
        fetch ('http://localhost:3001/adminhotel/add', {
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
            alert (`Hotel added Successfully `);
            this.setState ({successful: true});
          })
          .catch (error => {
            alert (`That Hotelname has been taken`);
            console.error (`Error adding user: ${error}`);
          });
    }

  render() {

    if(this.state.successful) {
        return <Redirect to="/admin" />;
      }


    return (  
    <div className="container">
      <Navbar dealLogout={this.props.dealLogout} />
      <br />
      <br />
      <br />
      <div>
        <h2 className="text-center mb-4">Add A Hotel</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="hotelname"
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter DailyCost"
              name="dailyCost"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Address of Hotel"
              name="address"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Rooms Available"
              name="roomAvi"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Rooms booked"
              name="roomBook"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter No. of Stars"
              name="noOfStar"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter URL of Image"
              name="img_url"
            />
          </div>       
           <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Amenities"
              name="amenities"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description of hotel"
              name="abouthotel"
            />
          </div>
        
          <button className="btn btn-primary btn-block">Add Hotel</button>
        </form>
        </div>
    </div>
        

     );
    }
};