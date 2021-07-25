var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());

Router.post('/edit',(req,res,next) =>{
        
    console.log(req.body);
    const region = req.body.tourname ;
    const dailyCost = req.body.dailyCost ;
    const aviTour = req.body.aviTour;
    const bookedTour  = req.body.bookedTour;
   
    var sql = "update tourist_place set dailyCost='" +dailyCost + "',aviTour='"+aviTour+"',bookedTour='"+bookedTour+"' where region = '"+region+"';";
    console.log(sql);

    db.query(sql , function(err,result) {
        if(err) {
            console.log(err);
            return res.status(400).send();
        }
        res.send(result);
        
    })   

});

module.exports= Router;