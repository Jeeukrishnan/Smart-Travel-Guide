var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());


Router.get('/', (req,res,next) =>{

    const city = req.query.city;

    var sql = "call get_tourist_from_city('" + city + "');";
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
