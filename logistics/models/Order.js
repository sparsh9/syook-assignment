const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");

const orderSchema = new Schema({
    orderNumber : {
        type : Schema.Types.ObjectId,
        required : true,
        unique : true
    },
    itemId : {
        type : Schema.Types.ObjectId,
        ref : 'Item'
    },

    price : {
        type : Schema.Types.Number,
        ref : 'Item'
    },

    customerId : {
        type : Schema.Types.ObjectId,
        ref : 'Customer'
    },
    deliveryVehicleId : {
        type : Schema.Types.ObjectId,
        ref : 'DeliveryVehicle'
    },
    isDelivered : {
        default : false
    }
},{
    timestamps: true
});

autoIncrement.initialize(mongoose.connection);
orderSchema.plugin(autoIncrement.plugin, {
    model: "Order",
    field: "orderNumber",
    startAt: "0000",
    incrementBy: 0001,
});


module.exports = mongoose.model("Order", orderSchema);
