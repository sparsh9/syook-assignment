const express = require('express')

const itemController = require('../controllers/Item');

const router = express.Router();

router.get('/show', itemController.getItem);
router.post('/add', itemController.createItem);
router.put('/update/:id', itemController.updateItem);

module.exports = router;
