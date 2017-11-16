var express = require('express');
var router = express.Router();

router.get('/really-great', function(req, res) {
    console.log('someone came here too!');
    res.send('this is a great string');
})

module.exports = router;