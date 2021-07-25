import React from 'react';
import { CityHotels } from './cityHotels';
import { Redirect } from 'react-router-dom';
export class SearchDiv extends React.Component {
    
    constructor() {
        super();
        this.state={
            report:"no"
        }
        this.getResponse1=this.getResponse1.bind(this);
        this.updatedate=this.updatedate.bind(this);
        this.handleInvalid=this.handleInvalid.bind(this);
    }

    handleInvalid(e) {
        if(e.target==='checkout')
        e.target.setCustomValidity("Checkout Date must be greater than Checkin Date");
        else if(e.target==='rooms')
        e.target.setCustomValidity("no. of rooms must be in btw 1 to 3 ");
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

    async getResponse1(event) {
        event.preventDefault();
        var city=event.target.city.value;
        var checkin=event.target.checkin.value;
        var checkout=event.target.checkout.value;
        var rooms=event.target.rooms.value;
        
        console.log(event.target.city.value);
        
         this.props.getResponse2(city,checkin,checkout,rooms)
        this.setState({report:"yes"})

      }


    render() {
        if(this.state.report === 'yes')
        return (
            <Redirect to='/cityhotels' />
        )
        let today = new Date();
        let tommorrow = new Date();
        tommorrow.setDate(today.getDate()+1);
        let formatted_date = today.getFullYear() + "-" + (("0" + (today.getMonth() + 1)).slice(-2)) + "-" + ("0" + (today.getDate())).slice(-2)
        let next_date = tommorrow.getFullYear() + "-" + (("0" + (tommorrow.getMonth() + 1)).slice(-2)) + "-" + ("0" + (tommorrow.getDate())).slice(-2)
        console.log(formatted_date);
        console.log(next_date);
        return (
            <div id="search_div1">
            <h1>Book Hotel Of Your Choice</h1>
            <form id="flex-container" onSubmit={(event)=>this.getResponse1(event)}>
                <div>
                    <input type="text" name="city" placeholder="City_name"  />
                    <h6 align='center'>City</h6> 
                </div>
                <div>
                    <input type="date" name="checkin" id="checkin" onChange={this.updatedate} min={formatted_date} />
                    <h6 align='center'>Checkin</h6>
                </div>
                <div>
                    <input type="date" name="checkout" id="checkout" min={next_date} onInvalid={this.handleInvalid}/>
                    <h6 align='center'>Checkout</h6>
                </div>
                <div>
                    <input type="text" min="1" max="3" placeholder="No. of rooms" name="rooms" maxlength="1"/>
                    <h6 align='center'>Rooms</h6>
                </div>
                <input id="submit" type="submit" value="search" />
            </form>
            </div>

        )
    }
}