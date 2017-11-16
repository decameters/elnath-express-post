var express = require('express'); // whatever express has in module.exports
var bodyParser = require('body-parser');
var reallyGreat = require('./routes/really-great');
// var index = require('./routes/index');
var quote = require('./routes/quote');
var app = express(); // an instance of an express web app
var port = 5000;

console.log('starting up the server');

routeCounter = 0;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// this line should ALWAYS go in front of ALL OF YOUR ROUTES
// you can always copy this line // this creates req.body COOL!
// it will run on every single request
// luke puts it after express.static

// app.get('/', index);

app.get('/really-great', reallyGreat);

// we want /quote/random to res.send a random quote
// we want /quote/first to res.send the first quote
// we want /quote will res.send "you can find quotes on /quote/random or /quote/first"
app.use('/quote', quote);

app.use('/dinosaur', function(req, res){
    res.send('rawr!');
})

app.listen(port, function() {
    console.log('listening on port', port);
    
})