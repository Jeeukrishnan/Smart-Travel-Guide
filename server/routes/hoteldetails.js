var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');

Router.use (bodyParser.json ());

Router.get ('/desc', (req, res, next) => {

  const id = req.query.id;

  var sql = "select abouthotel from hotel where id = " + id + ";";
  console.log (sql);

  db.query (sql, function (err, result) {
    if (err) {
      console.log ('error');
      return res.status (400).send ();
    }
    console.log (JSON.stringify (result));
    res.status (200).send (result);
  });
});

Router.get ('/amenities',(req,res,next) => {

  const id = req.query.id;
  var sql = "select amenities from hotel where id = " + id + ";";
  console.log (sql);

  db.query (sql, function (err, result) {
    if (err) {
      console.log ('error');
      return res.status (400).send ();
    }
    console.log (JSON.stringify (result));
    res.status (200).send (result);
  });
});

Router.get ('/reviews',(req,res,next) => {

  const hotelname = req.query.name;
  var sql = "select detailedReview as Review from hotelreview where hotelname = '" + hotelname + "';";
  console.log (sql);

  db.query (sql, function (err, result) {
    if (err) {
      console.log ('error');
      return res.status (400).send ();
    }
    console.log (JSON.stringify (result));
    res.status (200).send (result);
  });
})


module.exports = Router;
