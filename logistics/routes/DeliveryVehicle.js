const express = require('express')

const deliveryVehicleController = require('../controllers/DeliveryVehicle');

const router = express.Router();

router.get('/show', deliveryVehicleController.getDeliveryVehicle);
router.post('/add', deliveryVehicleController.createDeliveryVehicle);
router.put('/update/:id', deliveryVehicleController.updateDeliveryVehicle);

module.exports = router;
