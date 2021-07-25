import React from 'react';
import {Navbar} from './navbar';
import { Redirect } from 'react-router-dom';
export class Thankyou extends React.Component {
    constructor(){
        super();
        this.state={
            redirectToHome:false
        }
        this.dealClick=this.dealClick.bind(this);
    }
    dealClick() {
        this.setState({redirectToHome:true})
    }
    render() {  
        if(this.state.redirectToHome)
        return (
            <Redirect to="/main"/>
        ) 
        return (
            <div id="thankyou">
            <Navbar dealLogout={this.props.dealLogout} />
            <div id="intro">
                <div className="intro-textbox">
                <img src="https://yachtpon.com/wp-content/uploads/2019/03/5a142d709c.png" className="intro-icon"/>
                <div className="intro-text">
                <p>Booking Successfull!!! <br/>Thankyou:)</p>
                <button onClick={this.dealClick}>ok</button>  
                </div>
                </div>
        </div>
            </div>
        )
    }
}