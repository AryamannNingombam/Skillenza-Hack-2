const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/Auth')
const Controller = require('../controllers/Location')

router.post('/add-location', AuthMiddleware.checkJWT,
    Controller.addLocation)

router.get('/get-location-details', AuthMiddleware.checkJWT,
    Controller.getLocationDetails);

router.get('/get-all-locations', AuthMiddleware.checkJWT,
    Controller.getAllLocations);


    module.exports =router;