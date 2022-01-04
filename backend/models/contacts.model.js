const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        info:{
            type: String,
            trim: true
        },
        mail:{
            type: String,
            trim: true
        },
        number:{
            type: String,
            trim: true
        }
    },
    {
        timestamps : true,
    }
);

const contacts = mongoose.model('contacts',contactSchema);

module.exports = contacts;