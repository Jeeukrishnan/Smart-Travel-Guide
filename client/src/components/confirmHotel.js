import React, {Component} from 'react';
import {StripeProvider, injectStripe} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';
import {Navbar} from './navbar';
import {Redirect } from 'react-router-dom';
import "../styles/confirmBooking.css";


const randomInt = require('random-int');

const path = require('path');
require('dotenv').config();





export class ConfirmHotel extends Component{
    constructor() {
        super();
        this.state={
            redirectToThankyou:false,
        }
        this.handleToken=this.handleToken.bind(this);
    
    }
   
    async handleToken(token)
    {
        let obj={
            id: randomInt(100000),
            username: this.props.user,
            hotelname:this.props.packageResp.name,
            rooms:this.props.rooms,
            checkin:this.props.checkin,
            checkout:this.props.checkout,
        }

        const response=await fetch("http://localhost:3001/bookings/add",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json" ,
        },
        body: JSON.stringify(obj)
        })
        console.log(response)
        if(response.ok) {
            this.setState({redirectToThankyou:true})
        }
        else
        {
            alert("Error");
        }

     
    }
    render() {
        if(this.state.redirectToThankyou===true)
        {
            return (<Redirect to="/thankyou"/>)
        }

        console.log(__dirname  );

        console.log(process.env)
        return (
            <div className="confirmBooking">
            <Navbar dealLogout={this.props.dealLogout}/>
            <div className="outsideContainer">
            <div style={{textAlign:"center"}}>
            <label align="center">Booking Details</label>
            </div>
            <div className="insideContainer">
            <h4>{this.props.packageResp.name}</h4>
            <h5>Near {this.props.packageResp.address}, {this.props.packageResp.cityname}</h5>
            <p>Ratings : {this.props.packageResp.Rating}</p>
            <p>Rooms Booked : {this.props.rooms}</p>
            <p>Dated : {this.props.checkin} to {this.props.checkout}</p>
            <h4 style={{color:"red"}}>Total Amount : {this.props.prc} INR</h4>
            <div style={{textAlign:"center"}} >
            <StripeCheckout stripeKey='pk_test_zF4GJwVfckTpEQQO0fBqChkK00UpAlA4Lv' token={this.handleToken} 
             amount={this.props.prc*100}
             currency='INR' 
             name='TRAVELS'
             description= 'Make Your Payment'
        label= 'Make Payment' /> 
            </div>
            </div>
            
            </div>
            </div>
            
        )
    }
}

//process.env.REACT_APP_APIKEY



















































