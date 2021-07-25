var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');
const session = require ('express-session');
Router.use (bodyParser.json ());

Router.post ('/', (req, res, next) => {
  console.log (req.body);
  
  const Username = req.body.username ; 
  const Password = req.body.password;

  var sql= "Select * from users where username = '" + Username + "'and  password = '" + Password + "' ;";
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
          req.session.user = result;
          res.send(result);
        }
      else{
          return res.status(401).send();
      }
  } );
  
});


module.exports = Router;
