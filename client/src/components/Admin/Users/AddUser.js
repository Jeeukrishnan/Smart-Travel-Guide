import React from "react";
import {Navbar} from  "../navbar.js";
import {Redirect} from 'react-router-dom';

export class AddUser extends React.Component {
    constructor(){
        super();

        this.state = {
            successful: false,
        }   
        this.onSubmit = this.onSubmit.bind(this);
    }

   
    onSubmit(e){
        e.preventDefault ();
        console.log ('Adding');
    
        const obj = {
          name: e.target.name.value,
          email: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
        };
        fetch ('http://localhost:3001/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (obj),
        })
          .then (res => {
            console.log (res);
            if (res.ok) return res.json ();
            else throw new Error ();
          })
          .then (res => {
            alert (`Account added Successfully `);
            this.setState ({successful: true});
          })
          .catch (error => {
            alert (`That Username has been taken`);
            console.error (`Error adding user: ${error}`);
          });
    }
  

  render() {

    if(this.state.successful) {
        return <Redirect to="/admin" />;
      }


    return (  
    <div className="container">
      <Navbar dealLogout={(this.props.dealLogout)} />
      <br />
      <br />
      <br />
      <div>
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              required
            />
          </div>
          <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Your Password"
            name="password"
            required
          />
        </div>
        
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
        </div>
    </div>
        

     );
    }
};