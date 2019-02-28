const express = require('express')
//import express from 'express';
const controller = require('../controllers/category')
const passport = require('passport')
const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', controller.getbyId)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router