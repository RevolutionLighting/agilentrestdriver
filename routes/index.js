var express = require('express');
var router = express.Router();
var vxiTransceiver = require('vxi11').vxiTransceiver;
var AGILENT_ADDR = '192.168.20.120';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/getexample', function(req, res, next) {
    res.status(200).send("Hi Ward");
});


router.post('/setexample', function(req, res) {

    var code = 400;
    var incommingjson = req.body;  // parse JSON... .incomming.
    var valid = false;

    // based on

    // if valid incomming parsed command.
    if(valid) {
        vxiTransceiver(AGILENT_ADDR, 'gpib0,10', '*IDN?', function (result) {

            console.log('result: »' + result + '«');

            res.status(200).send("OK");  // send back ok,  or data if you want.
        });

    }
    else {
        res.status(code).send("Error");
    }

});


module.exports = router;
