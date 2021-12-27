const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PublicationSchema = new Schema(
    {
        title:{
            type: String,
            trim: true
        },
        desc:{
            type: String,
            trim: true
        },
        category:{
            type: String,
            trim: true
        },
        volume:{
            type: String,
            trim: true
        },
        pages:{
            type: String,
            trim: true
        },
        year:{
            type: String,
            trim: true
        },
        doi:{
            type: String,
            trim: true
        },
        authors:{
            type: String,
            trim: true
        },

        
    },
    {
        timestamps : true,
    }
);

const publications = mongoose.model('Publications',PublicationSchema);

module.exports = publications;