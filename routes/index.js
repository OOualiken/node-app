var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NODE app' });
});
/* POST home page. */

function AddCity() {
    router.post('/ville', function(req, res) {
        request(`https://geocode.xyz/${req.body.name}?json=1&auth=169030091009524819468x1966`, function (error, response, body) {
            var Mybody = JSON.parse(body);
            if (Mybody.error == null){
                res.render('ville', {display:'block', longt: Mybody.longt, latt:Mybody.latt});
            }else{
                res.render('ville', {display:'none', nom_ville: 'Error', Type_err: "cette ville n'existe pas ", longt: Mybody.longt, latt:Mybody.latt});
            }
        });
    });
  return Mybody.city;
}

