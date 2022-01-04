const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema(
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
        info:{
            type: String,
            trim: true
        },
        phone:{
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

const professors = mongoose.model('Professors',ProfessorSchema);

module.exports = professors;