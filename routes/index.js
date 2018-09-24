var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Test!!!");
    res.render('index', { title: 'Express' });
});

router.get('/architect', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../public/architect.html'))
});

router.get('/art', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../public/art.html'))
});

router.get('/band', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../public/band.html'))
});

router.get('/food', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/../public/food.html'))
});

module.exports = router;