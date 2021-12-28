const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phdSchema = new Schema(
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
    },
    {
        timestamps : true,
    }
);

const phd = mongoose.model('phds',phdSchema);

module.exports = phd;