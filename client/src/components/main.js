import React from 'react';
import {Advertisement} from './advertisement';
import {SearchDiv} from './searchDiv';
import {Navbar} from './navbar';
import { Homepage } from './homepage';


export class Main extends React.Component {
  render () {

    return (
      <div>
        <Navbar dealLogout={this.props.dealLogout} />
        <div>
          <Homepage isauth="true" />
        </div>
      </div>
    );
  }
}
