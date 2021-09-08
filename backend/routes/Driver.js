const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/Auth');
const Controller = require('../controllers/Driver');



router.get('/get-driver-details', AuthMiddleware.checkJWT,
    Controller.getDriverDetails)

router.get('/get-driver-status', AuthMiddleware.checkJWT,
    Controller.getDriverStatus)

router.put('/change-driver-free-status', AuthMiddleware.checkJWT,
    Controller.changeDriverFreeStatus);

router.put('/change-driver-on-the-way-status', AuthMiddleware.checkJWT,
    Controller.changeDriverOnTheWayStatus);

    module.exports =router;