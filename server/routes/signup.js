var express = require ('express');
var indexRouter = express.Router ();
var bodyParser = require ('body-parser');

indexRouter.use (bodyParser.json ());


indexRouter.post ('/', (req, res, next) => {
    console.log (req.body);
    const Name=req.body.name ;
    const Email= req.body.email ;
    const Username = req.body.username ; 
    const Password = req.body.password;

    var sql= "Insert into users values ('" + Username + "','" + Password + "','" + Name + "','" + Email + "');" ;
    console.log(sql);
  
    db.query(sql, function(err,result){
        if(err){
          console.log("error");
          return res.status(400).send();
        }
        res.send(result);
    } );
    
});

module.exports = indexRouter;
