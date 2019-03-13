var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NODE app' });
});



router.get('/ville', function(req, res) {
   var id = req.query.field6;
    //res.send(" " + req.params.field6);
    //console.log(id);
   // res.send("hello=>" + id);
    res.render('ville', { nom_ville: id });
});

module.exports = router;
