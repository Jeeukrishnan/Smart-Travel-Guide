import React from 'react';
import {Navbar} from './navbar';
import { Link } from 'react-router-dom';

export class Admin extends React.Component {
    constructor(){
        super();

        this.state = {
            users : [],
        }
        this.loadUsers = this.loadUsers.bind(this);
        this.deleteUsers = this.deleteUsers.bind(this);

    }
    componentDidMount(){
        
      this.loadUsers();
   }
    async loadUsers() {

        fetch(`http://localhost:3001/admin/users/view`, {
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
            this.setState({users:arr})  
          })
        
    }
   


    deleteUsers(username) {

      fetch(`http://localhost:3001/admin/users/delete?username=${encodeURIComponent(username)}`,{

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
      alert (`Account deleted Successfully `);
      this.loadUsers();
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
                    <Link class="btn btn-primary" to={`admin/users/add`}>Add User</Link>
                <div className="py-4">
                <table class="table border shadow">
                 <thead class="thead-dark">
                  <tr>
                  <th scope="col">#</th>
                 <th scope="col">Name</th>
                 <th scope="col">User Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Password</th>
                 <th>Action</th>
                  </tr>
                 </thead>
                 <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/admin/users/view/${user.username}/${user.fullname}/${user.email}/${user.password}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`admin/users/edit/${user.username}/${user.fullname}/${user.email}/${user.password}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => this.deleteUsers(user.username)}
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
