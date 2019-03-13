var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NODE app' });
});



router.post('/ville', function(req, res) {
   // request("https:// geocode.xyz/new+york?json=1&auth=169030091009524819468x1966", function () {
//
  //  })
    request(`https://geocode.xyz/${req.body.name}?json=1&auth=169030091009524819468x1966`, function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        var Mybody = JSON.parse(body);

        // try {
          //   console.log(Mybody.longt, Mybody.latt);
            // console.log("je suis laaa");
            // res.render('ville', { longt: Mybody.longt, latt:Mybody.latt});
        // }catch (e) {
          //   res.render("la ville n'exisste pas ");
           //  console.log("je n'existe pas ")
         //}
        //if (Mybody.longt == 0 ||  Mybody.latt == 0 )
       // {
            //console.log("ko");
            //res.render("cette ville n'existe pas ");

      //  }else {

       // }

        if (Mybody.error == null){
            res.render('ville', {display:'block', longt: Mybody.longt, latt:Mybody.latt});
        }else{
            res.render('ville', {display:'none', nom_ville: 'Error', Type_err: "cette ville n'existe pas ", longt: Mybody.longt, latt:Mybody.latt});
        }

    });

   //var id = req.query.field6;
    //res.send(" " + req.params.field6);
    //console.log(id);
   // res.send("hello=>" + id);
    //res.render('ville', { nom_ville: req.body.name});
});

module.exports = router;
