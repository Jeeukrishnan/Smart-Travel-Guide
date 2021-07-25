import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';
import '../styles/citiesStyling.css';
import {Link , Redirect } from 'react-router-dom';
export class CitiesDropdown extends React.Component {
    constructor() {
        super();
        this.state={
            randomCities:[{'name':'Jaipur', 'id':'0' },
                          {'name':'Shimla', 'id':'1' },
                          {'name':'Pune', 'id':'2' },
                          {'name':'Manali', 'id':'3' },
                          {'name':'Banglore', 'id':'4' },
                          {'name':'Assam', 'id':'5' },
                          {'name':'Goa', 'id':'6' },
                          {'name':'Mumbai', 'id':'7' },
                          {'name':'Punjab', 'id':'8' },
                          {'name':'Chennai', 'id':'9' }],
            loaded:false ,
            report:"no"
        }
        
        this.onhandleClick=this.onhandleClick.bind(this);
        this.onhandleBlur=this.onhandleBlur.bind(this);
    }

    onhandleBlur(event) {
        var id=event.target.getAttribute("id");
        var click=document.getElementsByClassName("drop-content"); 
        click[id].style.display="none";
    }

    async onhandleItemClick(id)
    {
        console.log('item clicked');
        let today = new Date();
        let tommorrow = new Date();
        tommorrow.setDate(today.getDate()+1);
        let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        let next_date = tommorrow.getFullYear() + "-" + (tommorrow.getMonth() + 1) + "-" + tommorrow.getDate()
        this.setState({report:"yes"})
        await this.props.getSecondResponse(id,formatted_date,next_date,1);
        
    }

    async onhandleClick(event) {
        
        this.setState({loaded:false} , console.log(this.state.loaded))
        var id=event.target.getAttribute("id");
        var city=document.getElementsByClassName('button')[id].innerHTML;
        var click=document.getElementsByClassName("drop-content");
        for(var i=0;i<10;i++)
        {
            if(i==id)
            {
                if(click[id].style.display==="none")
                {
                    click[id].style.display="block";
                }
                else
                {
                    click[id].style.display="none"
                }
            }
            else
            {
                click[i].style.display="none";
            }

        }

        //console.log(event.target.innerHTML);
        console.log(city);
        if(click[id].style.display!=="none")
        {
            await this.props.getResponse(city);

            this.setState({loaded:true})
        }
        //event.preventDefault()
    }

    render() {
       // console.log("Cities dropdown is rendered");
       if(this.state.report === 'yes')
        return (
            <Redirect to='/cityhotels' />
        )
        return (
            <div id="city_dd">     
            <div style={{height:"55px", width:"100%"}}></div>
            <div>
                <ul id="cc_dd-ul">
                {this.state.randomCities.map((arr,index)=>(
                    <li>
                        <div /*onBlur={this.onhandleBlur}*/ id={arr.id} key={arr.id}>
                                <div>
                                    <button onClick={(event) => {this.onhandleClick(event)}} className="button" id={arr.id} >{arr.name}</button>
                                    <button onClick={(event) => {this.onhandleClick(event)}} className="button2" id={arr.id}><img alt="not found" className="icon" height="30px" width="30px" id={arr.id} src="https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_192x192.png"/></button>
                                </div>
                                
                                {this.state.loaded===true?(<div style={{display:"none"}} className="drop-content">
                                        {this.props.response.map((res)=>(
                                            <a key={res.dest_id} className="dropdown-item" onClick={()=> {this.onhandleItemClick(res.dest_id)}} key={res.dest_id}>{res.name}</a>
                                            )
                                        )}
                                    </div>):(<div style={{display:"none"}} className="drop-content">
                                    <p>Loading...</p>
                            </div>)}
                        </div>
                    </li>

                ))}
                    {/*<li><button className="button">All Cities</button></li>*/}
                </ul>
           </div>
            </div>
        )
    }
}


