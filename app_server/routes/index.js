var ctrlLocations = require('../contollers/locations')
var ctrlOthers = require('../contollers/others')


var ctrlMain = require('../contollers/main');

var express = require('express');
var router = express.Router();

//! GET home page.
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);

//! GET users listing. 
module.exports = router;
