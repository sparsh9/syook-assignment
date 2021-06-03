const fs = require("fs");
const path = require("path");
const DeliveryVehicle = require("../models/DeliveryVehicle");
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

exports.createDeliveryVehicle = (req, res, next) => {
    const deliveryVehicle = new DeliveryVehicle({
        registrationNumber : req.body.registrationNumber,
        vehicleType : req.body.vehicleType,
        city : req.body.city,
        activeOrderCount : req.body.activeOrderCount
    })

    deliveryVehicle
        .save()
        .then(deliveryVehicle => {
            res.send("Delivery vehicle saved successfully");
        })
        .catch(err => {
            res.status(400).send(err);
        })
}


exports.getDeliveryVehicle = (req, res, next) => {
    DeliveryVehicle.find()
        .sort({'createdAt' : -1})
        .then(deliveryVehicles => res.json(deliveryVehicles))
        .catch(err => {
            res.status(400).send(err);
        })
}


exports.updateDeliveryVehicle = (req, res, next) => {
   const deliveryVehicleId = req.params.id;

   DeliveryVehicle
       .findByIdAndUpdate(
           {
               _id : deliveryVehicleId
       },
           {
               city : req.body.city,
               activeOrderCount : req.body.activeOrderCount
           },
           {
               new : true
           })
       .then(deliveryVehicle => res.json(deliveryVehicle))
       .catch(err => {
           res.status(400).send(err);
       })

}
