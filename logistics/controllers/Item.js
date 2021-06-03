const fs = require("fs");
const path = require("path");
const Item = require("../models/Item");
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

exports.createItem = (req, res, next) => {
 const item = new Item({
  name : req.body.name,
  price : req.body.price
 });
 item
     .save()
     .then(item => {
      res.send("Item saved successfully")
     })
     .catch(err => {
      res.status(400).send(err)
     })
}


exports.getItem = (req, res, next) => {
    Item.find()
        .sort({'createdAt': -1})
        .then(items => res.json(items))
        .catch(err => {
            res.status(400).send(err)
        })

}
exports.updateItem = (req, res, next) => {
    const itemId = req.params.id;

    Item
        .findByIdAndUpdate(
            {
            _id:itemId
        },
            {
                name : req.body.name,
                price : req.body.price
            },
            {
                new : true
            })
        .then(item => res.json(item))
        .catch(err => {
            res.status(400).send(err)

        })

}
