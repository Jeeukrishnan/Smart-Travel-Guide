import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Main} from './components/main'
import { Login } from './components/login';
import { Signup } from './components/signup';
import { CityHotels } from './components/cityHotels';
import { HotelDetails } from './components/hotelDetails';
import { LoadingIndicator } from './components/loadingIndicator';
import { NotFound} from './components/notFound';
import { Hotels } from './components/hotels';
import { BookNow } from './components/bookNow';
import {ConfirmHotel} from './components/confirmHotel';
import { Thankyou } from './components/Thankyou';
import { MyBooking } from './components/myBookings';
import { Homepage } from './components/homepage';
import { Admin } from './components/Admin/admin' ;
import { Adminhotel } from './components/Admin/adminhotel' ;
import { Admintour } from './components/Admin/admintours';
import { EditUser } from './components/Admin/Users/EditUser';
import { ViewUser } from './components/Admin/Users/ViewUser';
import { AddUser } from './components/Admin/Users/AddUser';
import { EditHotel } from './components/Admin/Hotels/EditHotel';
import { Tours } from './components/Tour/tours';
import { ViewHotel } from './components/Admin/Hotels/Viewhotel';
import { CityTours } from './components/Tour/tourdetails';
import {Booking} from './components/Tour/booking';
import { EditTour} from './components/Admin/Tours/EditTour';
import { ViewTour} from './components/Admin/Tours/ViewTour';
require('dotenv').config();

class App extends React.Component {
  constructor() {
    super();
    this.state={
      tourResp:{},
      user:"",
      isAuthAdmin:false,
      isAuth:false,
      response:[] ,
      cityResponse:JSON.parse(localStorage.getItem('cityResponse')) || [] ,
      loading:false ,
      orderBy:'popularity',
      city:"",
      checkin:"",
      checkout:"",
      rooms:1 ,
      packageName:"",
      packageResp:{},
      overallPrice:"",
      overallRooms:""
    }       
    this.getResponse=this.getResponse.bind(this);
    this.getResponse2=this.getResponse2.bind(this);
    this.orderFun=this.orderFun.bind(this);
    this.getSecondResponse=this.getSecondResponse.bind(this);
    this.dealSubmit=this.dealSubmit.bind(this);
    this.dealSubmitAdmin=this.dealSubmitAdmin.bind(this);
    this.dealLogout=this.dealLogout.bind(this);
    this.handlePriceChange=this.handlePriceChange.bind(this);
    this.handleReviewChange=this.handleReviewChange.bind(this);
    this.setpackageName=this.setpackageName.bind(this);
    this.setpackageResp=this.setpackageResp.bind(this);
    this.confirm=this.confirm.bind(this);
    this.setusername=this.setusername.bind(this);
    this.setcityResponse=this.setcityResponse.bind(this);
    this.setCity = this.setCity.bind(this);
  }
  
  
  async getResponse() 
  {
    let today = new Date();
    let tommorrow = new Date();
    tommorrow.setDate(today.getDate()+1);
    let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    let next_date = tommorrow.getFullYear() + "-" + (tommorrow.getMonth() + 1) + "-" + tommorrow.getDate();
    
    this.setState({checkin:formatted_date,checkout:next_date})  
      
  }

  async getSecondResponse(city,ad,dd,rooms)
  {
    console.log('Second res')
    this.setState({loading:true})
    try{
      const response=  await fetch(`http://localhost:3001/cityhotels?city=${encodeURIComponent(city)}`, {
         method: "GET",
         headers: {
          "Content-Type" : "application/json" ,
          },
        })
        if(!response.ok)
            throw Error('error fetching data');

        let json_res=await response.json();
        console.log(JSON.stringify(json_res));
        console.log(json_res[0].total_price);
        var arr=[]
        let i=0,j=0,size= json_res[0].length;
        if(size>5)
          size=5;
        for(;j<size;j++){
            arr[i]=json_res[0][j];
            i++;
          }
  
        console.log(arr);
        this.setState({cityResponse:arr , loading:false})
        localStorage.setItem('cityResponse', JSON.stringify(this.state.cityResponse))
        console.log('city response is ',this.state["cityResponse"]["0"]);
      } 
    catch(err){
        console.log(err);
    }
  }

  orderFun(x)
  {
    let demoarr=this.state.cityResponse;
    if (x==="price_ascending")
    {
      demoarr.sort((a,b)=>{return a.Price-b.Price});     
    }
    if (x==="price_descending")
    {
      demoarr.sort((a,b)=>{return a.Price-b.Price});  
      demoarr.reverse();   
    }
    if ( x==="name")
    {
      demoarr.sort((a, b)=>{
        var m = a.name.toLowerCase();
        var n = b.name.toLowerCase();
        if (m < n) {return -1;}
        if (m > n) {return 1;}
        return 0;
      });
    }
    if ( x==="ratings")
    {
      demoarr.sort((a,b)=>{return a.Rating-b.Rating});
    }
    if( x==="popularity")
    {
      demoarr=JSON.parse(localStorage.getItem('cityResponse'));
    }
    this.setState({cityResponse:demoarr});
  }
 
  async getResponse2(city,ad,dd,room)
  {
   
    this.setState({loading:true})
    await this.getResponse();
    if(this.state.response===undefined)
    return;
    await this.getSecondResponse(city,ad,dd,room);
    this.setState({city:city , checkin:ad , checkout:dd , rooms:room})  
  }
    dealSubmitAdmin(){
      this.setState({isAuthAdmin:true}); 
    }
    dealSubmit() {
      this.setState({isAuth:true}); 
    }

    dealLogout() {
            this.setState({isAuth:false});
            this.setState({isAuthAdmin:false});
    }

    handlePriceChange(price){
      let priceint=parseInt(price);
      let priceArr=JSON.parse(localStorage.getItem('cityResponse'));
      console.log(priceint,priceArr);
      if(price==="All")
      {
        priceArr=JSON.parse(localStorage.getItem('cityResponse'));
      }
      else if(priceint===10000)
      {
        priceArr=priceArr.filter(item=>item.Price>=priceint)
      }
      else
      {
        priceArr=priceArr.filter(item=>(item.Price>=priceint-2000 && item.Price<=priceint))
      }
      console.log(priceArr);
      this.setState({cityResponse:priceArr});
    }

    handleReviewChange(review)
    {
      let priceArr=JSON.parse(localStorage.getItem('cityResponse'));
      if(review==="All")
        priceArr=JSON.parse(localStorage.getItem('cityResponse'));
      else
        priceArr=priceArr.filter(res=>(res.rating_message===review))
      this.setState({cityResponse:priceArr});
    }
    setusername(username){
      this.setState({user:username})
    }

    setpackageName(hN){
      this.setState({packageName:hN})
    }

    setcityResponse(arr){
      this.setState({cityResponse:arr})
    }
    setCity(c){
      this.setState({city:c})
    }

    async setpackageResp(resp){
      await this.setState({packageResp:resp});
      await this.setState({packageName: resp.name });
      //console.log(this.state.hotelResp.hotel_name);
    }

    async confirm(price,roomss,checkin,checkout)
    {
      await this.setState({overallPrice:price, overallRooms:roomss, 
      checkin:checkin, checkout:checkout});
      console.log(this.state.overallPrice)
    }


  render() {
    console.log("rendered",this.state.isAuth);
    return (	
      <Router>
        <div>
        <Switch>
           
            <Route exact path="/" render={ ()=><Homepage/>}></Route>;
            
            <Route exact path="/main" render={ ()=> this.state.isAuth ? <Main setpackageResp={this.setpackageResp} getResponse={this.getResponse} response={this.state.response} getResponse2={this.getResponse2} cityResponse={this.state.cityResponse}  getSecondResponse={this.getSecondResponse} dealLogout={this.dealLogout} /> : <Redirect to="/login"/>} ></Route>

            <Route exact path="/about" render = { ()=> ( <Hotels dealLogout={this.dealLogout} getResponse2={this.getResponse2} cityResponse={this.cityResponse} /> )}></Route>
            
            <Route exact path="/cityhotels" render = { ()=> this.state.isAuth? (<CityHotels city={this.state.city} setpackageResp={this.setpackageResp} setpackage={this.setpackageName} cityResponse={this.state.cityResponse} orderFun={this.orderFun} loading={this.state.loading} handlePriceChange={this.handlePriceChange} handleReviewChange={this.handleReviewChange} dealLogout={this.dealLogout} />):<Redirect to="/main"/>}></Route>
            
            <Route exact path="/hoteldetails" render = { ()=> this.state.isAuth? ( <HotelDetails city={this.city} confirm={this.confirm} packageResp={this.state.packageResp} dealLogout={this.dealLogout} />):<Redirect to="/main"/>}></Route>
            
            <Route exact path="/signup" render={()=> this.state.isAuth?<Redirect to="/main"/>:<Signup/>}></Route>
            
            <Route exact path="/login" render = { ()=> this.state.isAuthAdmin ? <Redirect to="/admin"/>: (this.state.isAuth ? <Redirect to="/main"/>: <Login user={this.state.user} setusername={this.setusername} dealSubmit={this.dealSubmit} dealSubmitAdmin={this.dealSubmitAdmin} />) }></Route>
            
            <Route exact path="/booknow" render = { ()=> this.state.isAuth? ( <BookNow confirm={this.confirm} packageResp={this.state.packageResp} checkin={this.state.checkin} checkout={this.state.checkout} rooms={this.state.rooms} packageName={this.state.packageName} dealLogout={this.dealLogout} />):<Redirect to="/main"/>}></Route>
            
            <Route exact path="/confirmhotel" render = { ()=> this.state.isAuth? ( <ConfirmHotel user={this.state.user}  packageResp={this.state.packageResp} prc= {this.state.overallPrice} rooms = {this.state.overallRooms} dealLogout={this.dealLogout} checkin={this.state.checkin} checkout={this.state.checkout}/> ):<Redirect to="/main"/>} />
            
            <Route exact path="/thankyou" render={()=>(<Thankyou dealLogout={this.dealLogout}/>)}></Route>

            <Route exact path="/mybookings" render={()=>(<MyBooking username={this.state.user} dealLogout={this.dealLogout} />)}></Route>
            
            <Route exact path="/admin" render={()=>(this.state.isAuthAdmin ?<Admin dealLogout={this.dealLogout} />: <Redirect to="/login"/>)}></Route>

            <Route exact path="/admin/hotel" render={()=>(<Adminhotel dealLogout={this.dealLogout}/>)}></Route>

            <Route exact path="/admin/users/edit/:username/:name/:email/:password" component={EditUser} ></Route>

            <Route exact path="/admin/users/view/:username/:name/:email/:password" component={ViewUser}></Route>
           
            <Route exact path="/admin/users/add" render={()=>(<AddUser dealLogout={this.dealLogout}/>)}></Route>

            <Route exact path="/tours" render={()=>(<Tours dealLogout={this.dealLogout} setCity={this.setCity} setcityResponse={this.setcityResponse}/>)}></Route>

            <Route exact path="/admin/hotels/edit/:hotelname" component={EditHotel} ></Route>

            <Route exact path="/admin/hotels/view/:hotelname/:dailyCost/:noOfStar/:address/:roomAvi" component={ViewHotel}></Route>
            
            <Route exact path="/citytours" render={()=>(<CityTours cityResponse={this.state.cityResponse} city={this.state.city} setpackageResp={this.setpackageResp}/> )}></Route>
            
            <Route exact path="/booktour" render={()=>(<Booking user={this.state.user} packageResp={this.state.packageResp} city={this.state.city}/> ) }></Route>
            
            <Route exact path="/admin/tour" render={()=>(<Admintour dealLogout={this.dealLogout}/>)}></Route>

            <Route exact path="/admin/tours/edit/:tourname" component={EditTour} ></Route>

            <Route exact path="/admin/tours/view/:tourname/:dailyCost/:aviTour/:bookedTour" component={ViewTour}></Route>

            <Route render={()=>(<NotFound/>)}></Route>
          
      
        </Switch> 
      </div>

      </Router>
    )
  }

  
}

export default App;

//"9f8ad6c750mshf0b1f680b88141ep1deb54jsndb7cd93136e0"
