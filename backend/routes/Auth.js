const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Auth')

router.post('/sign-in-company', Controller.signInCompany);

router.post('/sign-up-company', Controller.signUpCompany);