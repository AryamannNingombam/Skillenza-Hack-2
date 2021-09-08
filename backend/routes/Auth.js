const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Auth')

router.post('/sign-in-user', Controller.signInUser);

router.post('/sign-up-user', Controller.signUpUser);