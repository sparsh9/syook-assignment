const fs = require("fs");
const path = require("path");
const Customer = require("../models/Customer");
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

exports.createCustomer = (req, res, next) => {
    const customer = new Customer({
        name : req.body.name,
        city : req.body.city
    });
    customer
        .save()
        .then(item => {
            res.send("Customer saved successfully")
        })
        .catch(err => {
            res.status(400).send(err)
        })
}




exports.getCustomer = (req, res, next) => {
    Customer.find()
        .sort({'createdAt': -1})
        .then(customers => res.json(customers))
        .catch(err => {
            res.status(400).send(err);
        })

}
exports.updateCustomer = (req, res, next) => {
    const customerId = req.params.id;

    Customer
        .findByIdAndUpdate(
            {
                _id:customerId
            },
            {
                city : req.body.city
            },
            {
                new : true
            })
        .then(customer => res.json(customer))
        .catch(err => {
            res.status(400).send(err);

        })

}
