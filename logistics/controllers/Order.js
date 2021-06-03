const fs = require("fs");
const path = require("path");
const Order = require("../models/Order");
// const Customer = require("../models/Customer");
// const DeliveryVehicle = require("../models/DeliveryVehicle");
// const Item = require("../models/Item");
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


exports.createOrder = (req, res, next) => {
    const order = new Order({
        itemId : req.body.itemId,
        price : req.body.price,
        customerId : req.body.customerId,
        deliveryVehicleId : req.body.deliveryVehicleId,
        isDelivered : req.body.isDelivered
    })

    order
        .save()
        .then(order => {
            res.send("Order saved successfully");
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


exports.getOrder = (req, res, next) => {
    Order.find()
        .sort({'createdAt' : -1})
        .then(order => res.json(order))
        .catch(err => {
            res.status(400).send(err)
        })
}


exports.updateOrder = (req, res, next) => {
    const orderId = req.params.id;

    Order
        .findByIdAndUpdate(
            {
                _id : orderId
            },
            {
                isDelivered : req.body.isDelivered
            },
            {
                new : true
            })
        .then(order => res.json(order))
        .catch(err => {
            res.status(400).send(err)
        })

}
