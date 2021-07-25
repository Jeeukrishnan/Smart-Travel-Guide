import React from 'react';
import {Redirect} from 'react-router-dom';
export class NotFound extends React.Component {
    constructor() {
        super();
        this.state={
            redirectToHome:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({redirectToHome:true})
    }
    render() {
        if(this.state.redirectToHome)
        return(<Redirect to="/main"/>)
        return (
            <div style={{marginTop:"100px" , textAlign:"center"}}>
                <h1>404<br/>Sorry, Page Not Found</h1>
                <button onClick={this.handleClick} style={{color: "steelblue"}}>Go Back</button>
            </div>
            
        )
    }
}