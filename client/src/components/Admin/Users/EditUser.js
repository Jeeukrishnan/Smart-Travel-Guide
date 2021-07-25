import React from 'react';
import {Navbar} from '../navbar.js';
import {Redirect} from 'react-router-dom';

export class EditUser extends React.Component {
  constructor () {
    super ();

    this.state = {
      successful: false,
    };
    this.onSubmit = this.onSubmit.bind (this);
  }
  onSubmit (e) {
    e.preventDefault ();

    const obj = {
      username: e.target.username.value,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch ('http://localhost:3001/admin/users/edit', {
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
        alert (`Account edited Successfully `);
        this.setState ({successful: true});
      })
      .catch (error => {
        alert (`That Email has been taken`);
        console.error (`Error adding user: ${error}`);
      });
  }

  render () {
    if (this.state.successful) {
      return <Redirect to="/admin" />;
    }

    var username = this.props.match.params.username;
    var name = this.props.match.params.name;
    var email = this.props.match.params.email;
    var password = this.props.match.params.password;

    return (
      <div>
        <div>
          <Navbar
            dealLogout={() => {
              return <Redirect to="/login" />;
            }}
          />
        </div>
        <br /><br /><br />
        <div className="container">
          <div>
            <h2 className="text-center mb-4">Edit A User</h2>
            <form onSubmit={e => this.onSubmit (e)}>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Username"
                  name="username"
                  value={username}
                  readOnly
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Password"
                  name="password"
                />
              </div>
              <button className="btn btn-warning btn-block">Update User</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
