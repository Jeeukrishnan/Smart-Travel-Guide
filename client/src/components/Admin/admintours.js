import React from 'react';
import {Navbar} from './navbar';
import { Link } from 'react-router-dom';

export class Admintour extends React.Component {
    constructor(){
        super();

        this.state = {
            tours : [],
        }
        this.loadtours = this.loadtours.bind(this);
        this.deletetours = this.deletetours.bind(this);
    }
    componentDidMount() {
      this.loadtours();
    }

    loadtours(){

        fetch(`http://localhost:3001/admin/tours/view`, {
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
            this.setState({tours:arr})  
          })
        
    }
    deletetours(tourname) {

      fetch(`http://localhost:3001/admin/tours/delete?tourname=${encodeURIComponent(tourname)}`,{

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
      alert (`Tour deleted Successfully `);
      this.loadtours();
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
                 <th scope="col">Place Name</th>
                 <th scope="col">Cost</th>
                 <th scope="col">Tickets Available</th>
                 <th scope="col">Booked Tickets</th>
                 <th>Action</th>
                  </tr>
                 </thead>
                 <tbody>
            {this.state.tours.map((tour, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{tour.region}</td>
                <td>{tour.dailyCost}</td>
                <td>{tour.aviTour}</td>
                <td>{tour.bookedTour}</td>

                <td>
                  <Link class="btn btn-primary mr-2"
                  to={`/admin/tours/view/${tour.region}/${tour.dailyCost}/${tour.aviTour}/${tour.bookedTour}` }>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2" 
                    to={`tours/edit/${tour.region}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => this.deletetours(tour.region)}
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
