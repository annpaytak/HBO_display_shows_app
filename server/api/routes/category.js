const express = require('express');
//import express from 'express';
const controller = require('../controllers/category');

const router = express.Router()


router.get('/', controller.getAll)
router.get('/:id', controller.getbyId)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router