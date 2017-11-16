var express = require('express');
var quotesData = require('../modules/quotes-data');
var router = express.Router();

router.get('/', function (req, res){
    // res.send('you can find quotes on /quote/random or /quote/first');
})

router.get('/random', function (req, res) {
    routeCounter++;
    console.log('this random route has been hit', routeCounter, 'times');
    // var randomNumber = Math.floor(Math.random() * 4);
    var randomNumber = Math.floor(Math.random() * quotesData.length);
    res.send(quotesData[randomNumber]);
    // res.sendStatus(500) // uncomment this line to send back an error
})

router.get('/first', function (req, res) {
    res.send(quotesData[0]);
})

router.get('/all', function (req, res){
    res.send(quotesData);
})

router.post('/new', function (req, res){
    console.log('we hit the post!');
    console.log('req.body in new quote post', req.body);
    quotesData.push({quoteText: req.body.quote_to_add});
    res.sendStatus(200);
})

module.exports = router;