import React from 'react';
import {Navbar} from './navbar';
import { SearchDiv } from './searchDiv';
export class Hotels extends React.Component {
    render() {
        return(
            <div className="about">
                <Navbar dealLogout={this.props.dealLogout}/>
                    <div className="inAbout">
                        <div>
                            <h1>Welcome to Travels</h1>
                            <p>We are your partner to find best hotels for You</p>
                        </div>
                    </div>
                <div className="inAboutSearch">   
                    <SearchDiv getResponse2={this.props.getResponse2} cityResponse={this.props.cityResponse} />
                    <h2>Your Perfect Stay just One Click away</h2>
                </div>
            </div>
        )
    }
}