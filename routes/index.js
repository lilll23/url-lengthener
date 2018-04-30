const express = require('express');
const router = express.Router();
const base58 = require('../base58.js');

const Url = require('../models/url');

router.get('/', function(req, res, next){
  res.render('index');
});

router.post('/api/lengthen', function(req, res, next){
  const shortUrl = req.body.url;
  let longUrl = '';

  Url.findOrCreate({
    where: {
      shortUrl: shortUrl
    }
  }).spread((url, created) => {
    longUrl = req.protocol + '://' + req.get('host') + '/' + base58.encode(url.urlId);
    res.send({'longUrl': longUrl});
  });
});

router.get('/:encoded_id', function(req, res, next){
  const base58Id = req.params.encoded_id;
  const id = base58.decode(base58Id);

  Url.findOne({
    where: {
      urlId: id
    }
  }).then((url) => {
    if(url){
      res.redirect(url.shortUrl);
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;