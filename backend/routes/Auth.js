const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Auth')

router.post('/sign-in-User', Controller.signInUser);

router.post('/sign-up-User', Controller.signUpUser);