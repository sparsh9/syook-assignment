const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryVehicleSchema = new Schema({
    registrationNumber : {
        type : String,
        required : true,
        unique : true
    },
    vehicleType : {
        type: String,
        enum : ['bike', 'truck'],
        default : 'bike',
        required : true
    },
    city : {
        type : String,
        required : true
    },
    activeOrderCount:{
        type: Number,
        default : 0,
        max : 2,
        required : true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("DeliveryVehicle", deliveryVehicleSchema);
