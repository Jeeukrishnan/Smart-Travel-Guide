var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());

Router.post('/add',(req,res,next) => {
    console.log (req.body);
    const id = req.body.id;
    const username=req.body.username ;
    const hotel = req.body.hotelname;
    const rooms= req.body.rooms ;
    const checkin = req.body.checkin ; 
    const checkout = req.body.checkout;

    var sql = "insert into hotelbook(id,username,checkin,checkout,noOfrooms,hotelname) values('" + id + "','" + username + "','" + checkin + "','" + checkout + "','" + rooms + "','" + hotel + "');";
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

Router.get('/show',(req,res,next) => {

    const username = req.query.username;

    var sql = "select * from hotelbook where username = '" + username + "';";
    console.log(sql);
    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return res.status(400).send();
        }
        res.send(result);
        
    })


});

Router.post('/tour/add',(req,res,next) => {

    const id= req.body.id;
    const username= req.body.username;
    const locationid= req.body.locationid;
    const traveldate= req.body.traveldate;
    const noOfticket= req.body.noOfticket;

    var sql="insert into tourbook(id,username,locationid,traveldate,noOfticket) values('" + id +"','" + username + "','" + locationid + "','" + traveldate + "','" + noOfticket + "'); " ;

    db.query(sql, function(err,result) {
        if(err) {
            console.log(err);
            return res.status(400).send();
        }
        res.send(result);
        
    })


});

Router.get('/tour/show',(req,res,next) => {

    const username = req.query.username;

    var sql = "call get_tourbooked('" + username + "');";
    console.log(sql);
    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return res.status(400).send();
        }
        res.send(result);
        
    })


});

module.exports = Router;