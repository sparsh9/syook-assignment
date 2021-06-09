const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
        name : {
            type : String,
            required : true,
        },
        origin : {
            type : String,
            required : true,
        },
        destination : {
            type : String,
            required : true,
        },
        secret_key : {
            type : String,
            required : true,
            unique: true
        },

    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('Person', personSchema);
