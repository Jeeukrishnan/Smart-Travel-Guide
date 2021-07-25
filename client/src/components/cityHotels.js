import React from 'react';
import '../styles/citiesStyling.css';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from './loadingIndicator';
import {Navbar} from './navbar';
export class CityHotels extends React.Component {
constructor() {
    super();
    this.state={ 
        arr:["Air conditioning",
        "Shared Kitchen",
        "24-hour front desk",
        "Key card access",
        "Shared lounge/TV area",
        "Board games/Puzzles",
        "Accessible parking",
        "Airport drop-off (additional charge)"],
        priceRadio:"All",
        reviewRadio:"All"
    }
    this.orderSelection=this.orderSelection.bind(this);
    this.priceChange=this.priceChange.bind(this);
    this.reviewsChange=this.reviewsChange.bind(this);
    this.setpackage=this.setpackage.bind(this);
}
orderSelection(event)
{
    console.log("called",event.target.value);
    this.props.orderFun(event.target.value);
    event.preventDefault();
}
priceChange(e)
{
    this.setState({priceRadio:e.target.value})
    console.log(e.target.value);
    this.props.handlePriceChange(e.target.value);
}
reviewsChange(e)
{
    this.setState({reviewRadio:e.target.value})
    console.log(e.target.value);
    this.props.handleReviewChange(e.target.value);
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
            <div className="column left">
            <h3 style={{marginTop:"20px"}}>Customise your Search</h3>
                <hr/>
            <form>
                <h4>Price</h4>
                <div>
                <input type="radio" value="All" onChange={this.priceChange} checked={this.state.priceRadio==="All"} /> All Prices <br/>
                <input type="radio" value="2000" onChange={this.priceChange} checked={this.state.priceRadio==="2000"} /> below or equal to 2000 INR <br/>
                <input type="radio" value="4000" onChange={this.priceChange} checked={this.state.priceRadio==="4000"} /> between 2000 INR and 4000 INR <br/>
                <input type="radio" value="6000" onChange={this.priceChange} checked={this.state.priceRadio==="6000"} /> between 4000 INR and 6000 INR <br/>
                <input type="radio" value="8000" onChange={this.priceChange} checked={this.state.priceRadio==="8000"} /> between 6000 INR and 8000 INR <br/>
                <input type="radio" value="10000" onChange={this.priceChange} checked={this.state.priceRadio==="10000"} /> above 8000 INR <br/>
                </div>
            </form><br/>
          {/*  <form>
                <h4>Ratings Reviews</h4>
                <div>
                <input type="radio" value="Good" onChange={this.reviewsChange} checked={this.state.reviewRadio==="Good"} /> Good <br/>
                <input type="radio" value="Very Good" onChange={this.reviewsChange} checked={this.state.reviewRadio==="Very Good"}/> Very Good <br/>
                <input type="radio" value="Excellent" onChange={this.reviewsChange} checked={this.state.reviewRadio==="Excellent"}/> Excellent <br/>
                <input type="radio" value="All" onChange={this.reviewsChange} checked={this.state.reviewRadio==="All"}/> All <br/>
                </div>
            </form><br/>*/}
            {/*<form>
            <h4>Facilities</h4>
                {this.state.arr.map((item,index)=>
                    <div>
                    <input type="checkbox"/>{item}<br/>
                    </div>
                    )}
                </form>*/}
            </div>
            <div className="column middle ">
              <div className="row">
                <div className="column middleheading">
                {this.props.cityResponse.length!==0?<h3>Hotels in {this.props.city}</h3>:<h3> </h3>}
                </div>
                <div className="column leftdropdown">
                Sort By:<select id="lang" onChange={this.orderSelection} >
                            <option value="name">Hotel Name</option>
                            <option value="ratings">Ratings</option>
                            <option value="price_ascending">Price(Low to High)</option>
                            <option value="price_descending">Price(High to Low)</option>    
                        </select>    
                </div>     
              </div>
              
              
             {/* <div className="main_row">
              <div className="main_col"> 
                  <img src="http://r-ec.bstatic.com/xdata/images/hotel/square60/222615525.jpg?k=db6eaff274fad597f01f42a2b8f22b4def3490df7cce39ee923cfa2a322332ea&o=" alt="not available" />
              </div>
              <div className="main_col">
                  <h3>hotle name</h3>
                  <h6>Near </h6>
                  <p>Ratings : </p>
                  <p>Available rooms : </p>
                        <h5 style={{color:"red" }}>Price : $1090 </h5>
                        <div className="main_row">
                            <div style={{width:"50%" , float:"left"}}> 
                                <button style={{backgroundColor:"white" , borderColor: "#bbbbfb6b" , fontSize:"20px" }}><Link to="/hoteldetails" style={{color:"blue" , textDecoration:"none"}}>View Details</Link></button>
                            </div>
                            <div style={{width:"50%" , float:"left"}}> 
                                <button style={{backgroundColor:"#4CAF50", borderColor: "#4CAF50" , fontSize:"20px"  }}><Link to="/" style={{color:"white" , textDecoration:"none"}}>Book Now</Link></button>
                            </div>
                        </div>
              </div>
    </div>*/}
        {this.props.cityResponse.length===0?<h2 style={{margin:"60px"}} align="center"> No Results Found ... </h2>:
            this.props.loading?<LoadingIndicator/>:
              this.props.cityResponse.map((res,id)=>(
                <div className="main_row">
                <hr/>
                    <div className="main_col"> 
                        <img src={res.img_url} alt="not available" />
                    </div>
                    <div className="main_col">
                        <h3>{res.name}</h3>
                        <h6>Near {res.address}</h6>
                        <p>Ratings : {res.Rating}</p>
                        <p>Available rooms : {res.roomAvi}</p>
                        <h5 style={{color:"red" }}>Price : {res.Price} INR </h5>
                        <div className="main_row">
                            <div style={{width:"50%" , float:"left"}}> 
                                <button style={{backgroundColor:"white" , color:"white" ,border: "1 px blue" , fontSize:"20px" }}><Link to="/hoteldetails" style={{color:"blue" , textDecoration:"none"}} onClick={()=>this.setpackage(res)}>View Details</Link></button>
                            </div>
                            <div style={{width:"50%" , float:"left"}}> 
                                <button style={{backgroundColor:"green" , color:"white" ,border: "1 px green" , fontSize:"20px" }}><Link to="/booknow" style={{color:"white" , textDecoration:"none"}} onClick={()=>this.setpackage(res)}>Book Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
              ))
        }
            </div>
        </div>
    </div>
        )
    }
}