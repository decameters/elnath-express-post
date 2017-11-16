var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    
        console.log('someone has visited here');
        if (1 + 1 == 2){
            res.send('the world is at peace');
        }
        else {
            res.send('the world is chaos');
        }
    })

module.exports = router;