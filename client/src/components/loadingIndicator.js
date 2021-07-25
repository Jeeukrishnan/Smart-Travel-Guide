import React, { Component } from 'react';
import  Loader  from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export class LoadingIndicator extends Component{
render(){
    return (
      <div style={{
          marginTop:"100px",
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
    )}
}