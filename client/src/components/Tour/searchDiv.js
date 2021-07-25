import React from 'react';
import { Redirect } from 'react-router-dom';
export class SearchDiv extends React.Component {
    
    constructor() {
        super();
        this.state={
            report:"no"
        }

    }
    async getResponse1(event) {
        event.preventDefault();
        var city=event.target.city.value;
        console.log(event.target.city.value);

        try{
            const response=  await fetch(`http://localhost:3001/citytours?city=${encodeURIComponent(city)}`, {
               method: "GET",
               headers: {
                "Content-Type" : "application/json" ,
                },
              })
              if(!response.ok)
                  throw Error('error fetching data');
      
              let json_res=await response.json();
              console.log(JSON.stringify(json_res));
              var arr=[]
              let i=0,j=0,size= json_res[0].length;
              if(size>5)
                size=5;
              for(;j<size;j++){
                  arr[i]=json_res[0][j];
                  i++;
                }
        
              console.log(arr);
              this.props.setcityResponse(arr);
              this.props.setCity(city);
            } 
          catch(err){
              console.log(err);
          }

        this.setState({report:"yes"})

      }


    render() {
        if(this.state.report === 'yes')
        return (
            <Redirect to='/citytours' />
        )

        return (
            <div id="search_div1">
            <h1>Book Tours Of Your Choice</h1>
            <form id="flex-container" onSubmit={(event)=>this.getResponse1(event)}>
                <div>
                    <input type="text" name="city" placeholder="City_name"  />
                    <h6 align='center'>City</h6> 
                </div>
                <input id="submit" type="submit" value="search" />
            </form>
            </div>

        )
    }
}