import React from 'react';
import '../styles/booknow.css';
import {Navbar} from './navbar';
import {Redirect} from 'react-router-dom';
export class BookNow extends React.Component {
  constructor(){
    super();
    this.state ={
      checkin:"",
      checkout:"",
      rooms:"",
      guest:"",
      submitted:false
    }
    this.handleContinue=this.handleContinue.bind(this);
    this.updatedate=this.updatedate.bind(this);
  }
  async handleContinue(e) {
    e.preventDefault();
    var date1 = new Date(e.target.checkin.value); 
    var date2 = new Date(e.target.checkout.value); 
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    await this.setState({checkin:e.target.checkin.value ,
    checkout:e.target.checkout.value,
    rooms:e.target.rooms.value,
    guest:e.target.guest.value})
    console.log(Difference_In_Days);
    await this.props.confirm((this.props.packageResp.Price)*(this.state.rooms)*(Difference_In_Days),
    this.state.rooms,this.state.checkin,this.state.checkout);
    this.setState({submitted:true});

  }

  async updatedate() {
    console.log('update date');
    var firstdate = document.getElementById("checkin").value;
    var newdate = new Date(firstdate);
    newdate.setDate(newdate.getDate() + 20);
    let maxdate=newdate.getFullYear() + "-" + (("0" + (newdate.getMonth() + 1)).slice(-2)) + "-" + ("0" + (newdate.getDate())).slice(-2)
    console.log(maxdate);
    document.getElementById("checkout").value = "";
    document.getElementById("checkout").setAttribute("min",firstdate);
    document.getElementById("checkout").setAttribute("max",maxdate);
    console.log(document.getElementById("checkout").getAttribute("min"));
  }
    render() {
      if(this.state.submitted===true)
      return (<Redirect to="/confirmhotel"/>)
      console.log('confirmation rendered');
      let today = new Date();
      let tommorrow = new Date();
      tommorrow.setDate(today.getDate()+1);
      let formatted_date = today.getFullYear() + "-" + (("0" + (today.getMonth() + 1)).slice(-2)) + "-" + ("0" + (today.getDate())).slice(-2)
      let next_date = tommorrow.getFullYear() + "-" + (("0" + (tommorrow.getMonth() + 1)).slice(-2)) + "-" + ("0" + (tommorrow.getDate())).slice(-2)
      console.log(formatted_date);
      console.log(next_date);  

        return (
            <div className="booking">
            <Navbar dealLogout={this.props.dealLogout}/>
            <div className="container">
            <form onSubmit={this.handleContinue}>
               <h4>{this.props.packageResp.name}</h4>
               <h6>Near {this.props.packageResp.address}, {this.props.packageResp.city}</h6>
               <p>Ratings : {this.props.packageResp.Rating}</p>
               <div className="row">
               <div className="col-25">
               <label for="checkin" >Checkin</label>
              </div>
              <div className="col-75">
              <input type="date" name="checkin" id="checkin" min={formatted_date} onChange={this.updatedate} required />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="checkout">Checkout</label>
              </div>
              <div className="col-75">
                <input type="date" name="checkout" id="checkout" min={next_date}  required />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="guest">Guest Count</label>
              </div>
              <div className="col-75">
                <input type="number" name="guest" min="1" max="10" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="rooms">Rooms Count</label>
              </div>
              <div className="col-75">
                <input type="number" name="rooms" min="1" max={this.props.packageResp.roomsAvi} required />
              </div>
            </div>
            <input type="submit" value="Click here"/> to continue booking...
            </form>
          </div>
          </div>
        )
    }
}

/*
<input type="submit" value="Click here"/> to continue...
*/
