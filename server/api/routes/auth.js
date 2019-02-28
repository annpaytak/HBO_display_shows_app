const express = require('express');
//import express from 'express';
const controller = require('../controllers/auth');

const router = express.Router()


router.post('/login', controller.login)

router.post('/register', controller.register)
// http://localhost:5000/api/auth/login  register
 
module.exports = router