const express = require('express');
//import express from 'express';
const controller = require('../controllers/auth');

const router = express.Router()


router.get('/login', controller.login)
router.get('/register', controller.register)
// http://localhost:5000/api/auth/register
 
module.exports = router