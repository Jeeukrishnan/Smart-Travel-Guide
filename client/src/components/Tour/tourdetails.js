import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from '.././navbar';
import {Redirect} from 'react-router-dom';

export class CityTours extends React.Component {
    constructor() {
        super();
        
    }
    
    
    setpackage(res)
    {
        this.props.setpackageResp(res);
        //console.log(res);
    }
    render() {
        return (
        <div id="c_h" className="container-fluid">
            <Navbar dealLogout={this.props.dealLogout} />
            <div className="row">
               
                </div>
                <div className="column middle ">
                  <div className="row">
                    <div className="column middleheading">
                    {this.props.cityResponse.length!==0?<h3>Tours in {this.props.city}</h3>:<h3> </h3>}
                    </div>
                  </div>
                  
            {this.props.cityResponse.length===0?<h2 style={{margin:"60px"}} align="center"> No Results Found ... </h2>:
                  this.props.cityResponse.map((res,id)=>(
                    <div className="main_row">
                    <hr/>
                        <div className="main_col"> 
                            <img src={res.img} alt="not available" />
                        </div>
                        <div className="main_col">
                            <h3>{res.tourist_place_name}</h3>
                            <p>Ratings : {res.numStars}</p>
                            <p>Review : {res.detailedReview}</p>
                            <h5 style={{color:"red" }}>Price : {res.dailyCost} INR </h5>
                            <div className="main_row">
                                <div style={{width:"50%" , float:"left"}}> 
                                    <button style={{backgroundColor:"green" , color:"white" ,border: "1 px green" , fontSize:"20px" }}><Link to="/booktour" style={{color:"white" , textDecoration:"none"}} onClick={()=>this.props.setpackageResp(res)}>Book Now</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))
            }
                </div>
            </div>
            )
        }
    }