const express = require('express')

const customerController = require('../controllers/Customer');

const router = express.Router();

router.get('/show', customerController.getCustomer);
router.post('/add', customerController.createCustomer);
router.put('/update/:id', customerController.updateCustomer);

module.exports = router;
