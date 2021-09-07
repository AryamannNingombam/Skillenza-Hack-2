const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlware/Auth');
const Controller = require('../controllers/Company')


router.get("/get-company-details", AuthMiddleware.checkJWT, Controller.getCompanyDetails)
