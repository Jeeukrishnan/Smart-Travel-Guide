import React from 'react';
import {Navbar} from './navbar';
import { Link } from 'react-router-dom';

export class Adminhotel extends React.Component {
    constructor(){
        super();

        this.state = {
            hotels : [],
        }
        this.loadHotels = this.loadHotels.bind(this);
        this.deleteHotels = this.deleteHotels.bind(this);
    }
    componentDidMount() {
      this.loadHotels();
    }

    loadHotels(){

        fetch(`http://localhost:3001/admin/hotels/view`, {
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
            for(let i=0;i<size;i++)
            {
              arr[i]=res[i];
            }
            this.setState({hotels:arr})  
          })
        
    }
    deleteHotels(hotelname) {

      fetch(`http://localhost:3001/admin/hotels/delete?hotelname=${encodeURIComponent(hotelname)}`,{

        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
      })
    .then (res => {
      console.log (res);
      if (res.ok) return res.json ();
      else throw new Error ();
    })
    .then (res => {
      alert (`Hotel deleted Successfully `);
      this.loadHotels();
    })
    .catch (error => {
      console.error (`Error adding user: ${error}`);
    });

    }

        render() {
            return (
                <div>
                    <Navbar dealLogout={this.props.dealLogout} />
                    <br />
                    <br />
                    <br />
                    
                <div className="py-4">
                <table class="table border shadow">
                 <thead class="thead-dark">
                  <tr>
                  <th scope="col">#</th>
                 <th scope="col">Hotel Name</th>
                 <th scope="col">Daily Cost</th>
                 <th scope="col">Rooms Available</th>
                 <th scope="col">Address</th>
                 <th scope="col">Rating</th>
                 <th>Action</th>
                  </tr>
                 </thead>
                 <tbody>
            {this.state.hotels.map((hotel, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{hotel.name}</td>
                <td>{hotel.dailyCost}</td>
                <td>{hotel.roomAvi}</td>
                <td>{hotel.address}</td>
                <td>{hotel.noOfStar}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/admin/hotels/view/${hotel.name}/${hotel.dailyCost}/${hotel.noOfStar}/${hotel.address}/${hotel.roomAvi}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`hotels/edit/${hotel.name}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => this.deleteHotels(hotel.name)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
                </table>
                </div>
                </div>

            );
        }


    }
