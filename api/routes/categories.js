var express = require('express');
var router = express.Router();



/* GET categories listing. */
router.get('/', function(req, res, next) {
    res.json({message: 'Respond with a source categories'});
});

module.exports = router;