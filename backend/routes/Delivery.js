const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/Auth')
const Controller = require('../controllers/Delivery');


router.put('/change-delivery-person-for-delivery', AuthMiddleware.checkJWT,
    Controller.changeDeliveryPersonForDelivery);


router.get('/get-delivery-details-for-driver', AuthMiddleware.checkJWT,
    Controller.getDeliveryDetailsForDriver);

router.get('/get-delivery-details', AuthMiddleware.checkJWT,
    Controller.getDeliveryDetails);

router.put('/end-delivery', AuthMiddleware.checkJWT,
    Controller.endDelivery);

router.put("/start-delivery", AuthMiddleware.checkJWT,
    Controller.startDeelivery);


router.post("/add-delivery", AuthMiddleware.checkJWT,
    Controller.addDelivery);