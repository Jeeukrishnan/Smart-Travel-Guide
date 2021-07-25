import React, {Component} from 'react';
import {Link , Redirect } from 'react-router-dom';
import '../styles/homepage.css';
import {Navbar} from './navbarhomepg';

export class Homepage extends React.Component{



    render() {
    return (
        <div >
                 <div className="wrapper">
            {this.props.isauth ? null : <Navbar/>}
            <div className="cover-img">
        	    <div className="cover-content">
        		    <h1>TRAVELS</h1>
        		    <p>Get the best travel experience with us </p>
        		    <button >EXPLORE</button>
        	    </div>
            </div>
           

	    <div id="About">
		    <div className="about-section">
			    <h2>About Us</h2>
        	<p className="para">We are here from NITK to provide you with best travelling experience</p>
                <div className="features">
                    <div className="new1">
     		            <div className="feature">
                            <div className="feature_content">
     				             <h3>Flights</h3>
     				             <p>Details of available flights and prices</p>
     			             </div>
     			            <i className="fas fa-plane icon"></i>
     		             </div>
                         <div className="feature">
     			            <div className="feature_content">
     				            <h3>Train</h3>
     				            <p>Details of available trains and prices</p>
     			            </div>
     			            <i className="fas fa-bus icon"></i>
     		             </div>
     		    </div>
                <div className="new2">
     		        <div className="feature">
     			        <i className="fas fa-bed icon"></i>
     			        <div className="feature_content">
     				       <h3>Hotels</h3>
     				       <p>Details of avaialble hotels,rooms and prices</p>
     			        </div>
     		        </div>
                    <div className="feature">
     			        <i className="fas fa-camera icon"></i>
     			        <div className="feature_content">
     				       <h3>Destination</h3>
     				       <p>Details of Destination</p>
     			        </div>
     		        </div>
                </div>
     	    </div>
		</div>
        </div>

	
	
        </div>
        </div>
    )}
}