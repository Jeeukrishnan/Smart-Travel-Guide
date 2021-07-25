import React from 'react';
import {Navbar} from './navbar'; 

export class MyBooking extends React.Component {
  constructor() {
    super();
   this.state={
       booking_history:[],
       tour_history:[]
   }
   this.fetchBookings=this.fetchBookings.bind(this);
   this.fetchTourbookings = this.fetchTourbookings.bind(this);
  }
  async fetchBookings() {
    const res= await fetch(`http://localhost:3001/bookings/show?username=${encodeURIComponent(this.props.username)}`,{
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      }
      })
      let json=await res.json();
      this.setState({booking_history:json})
      let demo=JSON.stringify(json);
      console.log(json);
      console.log(demo);
     
    }
    async fetchTourbookings()
    {
      const res= await fetch(`http://localhost:3001/bookings/tour/show?username=${encodeURIComponent(this.props.username)}`,{
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      },
      })  
      let json=await res.json();
      this.setState({tour_history:json[0]});
 
    }
  componentDidMount() {
    this.fetchBookings();
    this.fetchTourbookings();
  }
  render() {
    var today = new Date();
    var  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return (
          <div>
            <Navbar dealLogout={this.props.dealLogout} />
            <div className="BookingsContainer">
              <h2>Booking History</h2>
              <h4>Hotels:</h4>
              <hr/>
                {this.state.booking_history.map((res,index)=> {
                    return (
                    <div key={index}>
                  
                      <ul>
                        <li><h5><div className="headin">Hotel Name: </div><div className="content"> {res.hotelname}</div></h5></li>
                        <li><h5><div className="headin">Hotel Rooms: </div><div className="content"> {res.noOfrooms}</div></h5></li>
                        <li><h5><div className="headin">Checkin: </div><div className="content"> {res.checkin.slice(0,10)}</div></h5></li>
                        <li><h5><div className="headin">Checkout: </div><div className="content"> {res.checkout.slice(0,10)}</div></h5></li>
                        <li><h5><div className="headin">Booking Date: </div><div className="content"> {date}</div></h5></li>
                      </ul>
                      <hr/>
                    </div>)
                  })
                }
                 <h4>Tours:</h4>
              <hr/>
                {this.state.tour_history.map((res,index)=> {
                    return (
                    <div key={index}>
                 
                      <ul>
                        <li><h5><div className="headin">Tour Place: </div><div className="content"> {res.region}</div></h5></li>
                    <li><h5><div className="headin">Tour Date: </div><div className="content"> {res.traveldate.slice(0,10)}</div></h5></li> 
                        <li><h5><div className="headin">Tickets Booked: </div><div className="content"> {res.noOfticket}</div></h5></li>
                        <li><h5><div className="headin">Booking Date: </div><div className="content"> {date}</div></h5></li>
                      </ul>
                      <hr/>
                    </div>)
                  })
                }
            </div>
          </div>
      )
  }
}