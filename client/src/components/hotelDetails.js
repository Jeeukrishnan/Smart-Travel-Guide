import React from 'react';
import {Navbar} from './navbar';
import { BookNow } from './bookNow';
require('dotenv').config();

export class HotelDetails extends React.Component {
  constructor() {
    super();
    this.state = {
        descrip:"",
        facilities:[],
        reviews:[],
        map:""
    }
  }

  componentDidMount() {
    console.log(this.props.packageResp.id);
    
    /*description*/
  
    fetch(`http://localhost:3001/hoteldetails/desc?id=${encodeURIComponent(this.props.packageResp.id)}`,{
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      },
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      this.setState({descrip:res[0].abouthotel})  
    })
    .catch(err => {
      console.log(err);
    });


    /*facilities*/
    fetch(`http://localhost:3001/hoteldetails/amenities?id=${encodeURIComponent(this.props.packageResp.id)}`, {
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      },
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      var arr=res[0].amenities.split(',');
      this.setState({facilities:arr})  
    })
    .catch(err => {
      console.log(err);
    });

    /*Reviews*/
    fetch(`http://localhost:3001/hoteldetails/reviews?name=${encodeURIComponent(this.props.packageResp.name)}`, {
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      },
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      var arr=[];
      let size= res.length;
      if(size>3)
        size=3;
      for(let i=0;i<size;i++)
      {
        arr[i]=res[i].Review;
      }
      this.setState({reviews:arr})  
    })
    .catch(err => {
      console.log(err);
    });

  
  }

  
    render() {
        return (
            <div>
            <Navbar dealLogout={this.props.dealLogout} />
<div id="h_d">
<div className="leftDiv">
    <h2>About Hotel </h2>
    <img src={this.props.packageResp.img_url} alt="Hotelimg"/>
    <p>{this.state.descrip}</p>
    <h2>Amenties</h2>
        {this.state.facilities.map((fac,id)=>(
          <div key={id}>->{fac}</div>
        ))}
        <br/>
    <h2>Reviews</h2>
        {this.state.reviews.map((rev,id)=>(
          <div key={id}>->{rev}</div>
        ))}
</div>
<div className="rightDiv"> 
    <BookNow packageResp={this.props.packageResp} confirm={this.props.confirm} />
</div>
</div>
</div>
        )
    }
}