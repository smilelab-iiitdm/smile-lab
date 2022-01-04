const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ugSchema = new Schema(
    {
        _id:{
            type: String,
            trim: true
        },
        name:{
            type: String,
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

const undergrads = mongoose.model('undergraduates',ugSchema);

module.exports = undergrads;