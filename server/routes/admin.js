var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());

Router.post ('/login', (req, res, next) => {
    console.log (req.body);
    
    const Username = req.body.username ; 
    const Password = req.body.password;
  
    var sql= "Select * from admin where username = '" + Username + "'and  password = '" + Password + "' ;";
    console.log(sql);
  
    db.query(sql, function(err,result){
        if(err){
          console.log("error");
          return console.error(err);
        }
       // console.log(result);
       
        
      console.log(result.length);
      if(result.length>0)
        {
            console.log(result);
            res.status(200).send(result);
        }
      else{
          return res.status(401).send();
      }
    } );
    
  });
  

Router.get('/users/view', (req,res,next) =>{

    var sql = "select * from users;";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        console.log(JSON.stringify (result) );
        res.status(200).send(result);
        
    })


});

Router.post('/users/delete',(req,res,next) =>{

    const username = req.query.username;
    console.log(username);
    var sql = "call user_deleteAccount('" + username + "');";

    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        res.send(result);
        
    })   





});

Router.post('/users/edit',(req,res,next) =>{

    const Name=req.body.name ;
    const Email= req.body.email ;
    const Username = req.body.username ; 
    const Password = req.body.password;

    var sql = "call users_edit('" + Name + "','" + Password + "','" + Email + "','" + Username + "');";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return res.status(400).send();
        }
        res.send(result);
        
    })   

})

Router.get('/hotels/view', (req,res,next) =>{

    var sql = "select * from hotel;";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        console.log(JSON.stringify (result));
        res.status(200).send(result);
        
    })


});

Router.post('/hotels/delete',(req,res,next) =>{

    const hotelname = req.query.hotelname;
    console.log(hotelname);
    var sql = "call delete_hotel('" + hotelname + "');";

    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        res.send(result);
        
    })   


Router.post('/hotel/edit',(req,res,next) =>{
        
        console.log(req.body);
        const hotelname = req.body.hotelname ;
        const dailyCost = req.body.dailyCost ;
        const address = req.body.address ;
        const roomAvi = req.body.roomAvi;
        const roomBook = req.body.roomBook;
        const noOfStar = req.body.noOfStar;
        const img_url = req.body.img_url;
        const amenities = req.body.amenities;
        const abouthotel = req.body.abouthotel;
        var sql = "call edit_hotel('" + hotelname + "','" + dailyCost + "','" + address + "','" + roomAvi + "','" + roomBook + "','" + noOfStar + "','" + img_url + "','" + amenities + "','" + abouthotel + "');";
        console.log(sql);
    
        db.query(sql , function(err,result) {
            if(err) {
                console.log(err);
                return console.error(err);
            }
            res.send(result);
            
        })   
    
    })


});
Router.get('/hotels/edit',(req,res,next) =>{
    res.send("hello");
});
Router.get('/tours/view', (req,res,next) =>{

    var sql = "select * from tourist_place;";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        console.log(JSON.stringify (result));
        res.status(200).send(result);
        
    })


});
Router.post('/tours/delete', (req,res,next) =>{

    const place = req.query.tourname;
    var sql = "delete from tourist_place where region= '"+place+"';";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return console.error(err);
        }
        console.log(JSON.stringify (result));
        res.status(200).send(result);
        
    })


});


module.exports = Router;
