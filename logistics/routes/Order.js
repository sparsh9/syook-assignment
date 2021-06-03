const express = require('express')

const orderController = require('../controllers/Order');

const router = express.Router();

router.get('/show', orderController.getOrder);
router.post('/add', orderController.createOrder);
router.put('/update/:id', orderController.updateOrder);

module.exports = router;
