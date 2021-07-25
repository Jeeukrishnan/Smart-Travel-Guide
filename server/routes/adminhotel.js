var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());

Router.post('/edit',(req,res,next) =>{
        
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
            return res.status(400).send();
        }
        res.send(result);
        
    })   

});

Router.post('/add',(req,res,next) =>{

    const hotelname = req.body.hotelname ;
    const dailyCost = req.body.dailyCost ;
    const address = req.body.address ;
    const roomAvi = req.body.roomAvi;
    const roomBook = req.body.roomBook;
    const noOfStar = req.body.noOfStar;
    const img_url = req.body.img_url;
    const amenities = req.body.amenities;
    const abouthotel = req.body.abouthotel;

    

    var sql = "insert into hotel"
})

module.exports = Router;