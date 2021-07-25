import React from 'react';
import '../styles/mainpage_style.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.min.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
require('dotenv').config();

export class Advertisement extends React.Component {
	constructor() {
		super();
		this.state={
            city:['Jaipur','Shimla','Pune','Manali','Banglore','Assam','Goa','Mumbai','Punjab'],

            recomms:[] , 
            
            side_recomms:[]

        }
        this.setHotel=this.setHotel.bind(this);
    }
   
    render() {
        return (
       
        <div id="adv">
            <div className="container-fluid text-center">
            <h1> The Vacation Heaven  </h1>
            </div>
        <div className="container-fluid text-center">    
        <div className="row content">
        <div className="col-sm-7 col-xs-12 text-left"> 
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr/>

            
            <h2>Recommended Infinity's For You</h2>
            <div id="recommends" className="row text-center">
            {this.state.recomms.map((recomms,index)=>
                <div className="col-sm-6 col-xs-12">
                <div className="thumbnail" >
                    <img src={recomms.main_photo_url} alt="Paris" />
                    <p><strong>{recomms.hotel_name}</strong></p>
                    <button className="btn"><Link to="/booknow" onClick={()=>this.setHotel(recomms)}>Book Now</Link></button>
                </div> 
                </div> )
            }

            </div>
     	</div>

     	
    <div className="col-sm-5 col-xs-12 sidenav">
      <h2>Infinity Hotels and Homes</h2>
      {this.state.side_recomms.map((arr)=>
            <div className="side_recommends" key={arr.hotel_id}>
                <Link to="/hoteldetails" onClick={()=>this.setHotel(arr)}><img id="i1" src={arr.main_photo_url}  /></Link>
                <h5>{arr.hotel_name} , {arr.district}</h5>
                <p>{arr.address} </p>
                <div className="hotel-label" >
                    <div className="hl_left" > Ratings: {arr.facilities_review_score.rating} </div>
                    <div className="hl_right" > Cleanliness score : {arr.cleanliness_score} </div>
                </div>
                <hr/>
            </div>
       )}
      {/*<div className="side_recommends">
        <Link to="/hoteldetails"><img id="i1" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"  /></Link>
        <h5>hotel name</h5>
        <p> Near address </p>
        <div className="hotel-label" >
            <div className="hl_left" > Ratings: {arr.facilities_review_score.rating} </div>
            <div className="hl_right" > Cleanliness score : {arr.cleanliness_score} </div>
        </div>
      </div>
      <hr/>
      <div className="side_recommends">
        <Link to="/hoteldetails"><img id="i1" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"  /></Link>
        <h5>hotel name</h5>
        <p> Near address </p>
        <div className="hotel-label" >
            <div className="hl_left" > Left </div>
            <div className="hl_right" > Right </div>
        </div>
    </div>*/}
      <br/>
    
    </div>
  </div>
</div>

    <footer className="container-fluid">
        <h3>Infinity -- Fastest Growing Hotel Chain</h3>
        <hr style={{backgroundColor:"white"}}/>
        <div id="left-div">
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/">Hotel and Homes</Link></p>
            {/*<p>Reviews</p>*/}
        </div>
        <div id="mid-div">
            <h4>Contact Us</h4>
            <a className="btn btn-social-icon btn-twitter">
                <span className="fa fa-envelope">    abc@gmail.com</span>
            </a><br/>
            <a className="btn btn-social-icon btn-phone">
                <span className="fa fa-phone"> 9988XXXXXX</span>
            </a>
        </div>

        <div id="right-div">
            <h4>Find Us</h4>
            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/">
                <span className="fa fa-twitter"></span>
            </a>
            <a className="btn btn-social-icon btn-twitter" href="https://www.facebook.com/">
                <span className="fa fa-facebook"></span>
            </a>
            <a className="btn btn-social-icon btn-twitter" href="https://www.instagram.com/">
                <span className="fa fa-instagram"></span>
            </a><br/>
            <br/>
        </div>
    </footer>
</div>
        )
    }
}
