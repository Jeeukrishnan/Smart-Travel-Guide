import React from 'react';
import {Redirect} from 'react-router-dom';
import {Navbar} from '../navbar.js';

export class ViewUser extends React.Component {
  render () {
    var username = this.props.match.params.username;
    var name = this.props.match.params.name;
    var email = this.props.match.params.email;
    var password = this.props.match.params.password;

    return (
      <div>
        <Navbar
          dealLogout={() => {
            return <Redirect to="/login" />;
          }}
        />
        <br /> <br /> <br />
        <div className="form">
          <h1 className="display-5">User Details</h1>
          <hr />
          <ul className="list-group w-100">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">User Name: {username}</li>
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Password: {password}</li>
          </ul>
        </div>
      </div>
    );
  }
}
