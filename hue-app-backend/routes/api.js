var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.post( process.env.API_ENDPOINT, {
    devicetype:'my_hue_app#iphone peter'
  })
  .then(function (response) {
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
