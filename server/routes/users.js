const express = require('express');
const router = express.Router();
var cookieParser = require('cookie-parser');
const session = require ('express-session');
var app = express ();

app.use(cookieParser());

router.get('/checkUser',(req,res)=>{
    console.log(req.session.user);


    if(!req.session.user) {
        if(req.cookies.hotel){
            res.clearCookie('hotel');
        }
        return res.status(401).send();
    }
    else
    {
        return res.status(200).send('success');
    }
})


router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.clearCookie('hotel');
    return res.status(200).send();
})

module.exports = router;