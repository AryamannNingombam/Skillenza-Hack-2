const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/Auth');
const Controller = require('../controllers/User')


router.get("/get-user-details", AuthMiddleware.checkJWT, Controller.getUserDetails)


module.exports =router;