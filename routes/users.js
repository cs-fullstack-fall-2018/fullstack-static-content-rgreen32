var express = require('express');
var router = express.Router();
var path  = require("path");

/* GET users listing. */
router.get('/about', function(req, res){
    res.redirect('https://www.linkedin.com/in/ray-green-440825159/')
});

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/html5up-forty/index.html'))
});


module.exports = router;