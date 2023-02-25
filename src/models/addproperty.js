const mongoose = require("mongoose");

const sellerPropertySchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    propertytype: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        
    },
    roomtype: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    wifi: {
        type: String,
        required: true
    },
    laundary: {
        type: String,
        required: true
    }
})


const propertyDetails = new mongoose.model("propertydetail", sellerPropertySchema);

module.exports = propertyDetails;