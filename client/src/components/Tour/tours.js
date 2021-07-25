import React from 'react';
import {Navbar} from '.././navbar';
import { SearchDiv } from './searchDiv';
export class Tours extends React.Component {
    render() {
        return(
            <div className="about1">
                <Navbar dealLogout={this.props.dealLogout}/>
                    <div className="inAbout">
                        <div>
                            <h1>Welcome to Travels</h1>
                            We are your partner to find best tour packages for You
                        </div>
                    </div>
                <div className="inAboutSearch">   
                    <SearchDiv setCity={this.props.setCity} setcityResponse={this.props.setcityResponse} />
                    <h2>Chance to Visit the Perfect Place just One Click away</h2>
                </div>
            </div>
        )
    }
}