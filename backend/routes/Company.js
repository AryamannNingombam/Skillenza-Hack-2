const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlware/Auth');
const Controller = require('../controllers/User')


router.get("/get-user-details", AuthMiddleware.checkJWT, Controller.getUserDetails)
