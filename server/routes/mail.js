var express = require ('express');
var Router = express.Router ();
var bodyParser = require ('body-parser');
const session = require ('express-session');
Router.use (bodyParser.json ());

Router.post ('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'asis.181it108@nitk.edu.in', //Change to email address that you want to receive messages on
    subject: 'New Feedback',
    text: content,
  };

  transporter.sendMail (mail, (err, data) => {
    if (err) {
      return res.status (401).send ();
    } else {
      console.log ('Succcessful');

      return res.status (200).send ('success');
    }
  });
});

module.exports = Router;
