const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mastersSchema = new Schema(
    {
        _id:{
            type: String,
            trim: true
        },
        name:{
            type: String,
            required: true,
            trim: true
        },
        desc:{
            type: String,
            trim: true
        },
        researchInterest:{
            type: String,
            trim: true
        },
        education:{
            type: String,
            trim: true
        },
        email:{
            type: String,
            trim: true
        },
        email2:{
            type: String,
            trim: true
        },
    },
    {
        timestamps : true,
    }
);

const masters = mongoose.model('masters',mastersSchema);

module.exports = masters;