var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlacc = require('../controllers/account');

var carList = require('../controllers/products');
var ctrlBooking = require('../controllers/booking');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//router.get('/account',ctrlacc.accountRead);
router.get('/account/:email',ctrlacc.accountReadByEmail);
router.post('/account',ctrlacc.createaccount);
router.post('/account/:email',ctrlacc.updateaccountByEmail);
// routers for car CRUD service;
router.get('/carlists', carList.readAllCarInfo);
router.post('/carlists', carList.postCarInfor);

router.get('/booking/:email',ctrlBooking.bookingsReadByEmail);
router.post('/booking', ctrlBooking.createBooking);

router.get('/carlists/post', carList.createCarContext);


module.exports = router;
