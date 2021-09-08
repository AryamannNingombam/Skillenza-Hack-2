const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const DriverSchema = new Schema({
    driverId: {
        type: String,
        required: true,

    },
    company: {
        type: String,
        required: true,

    },
    freeForDelivery: {
        type: Boolean,
        default: false,
        required: true,
    },
    onTheWay: {
        type: Boolean,
        default: false,
        required: true,
    }
})

const DriverModel = mongoose.model("Driver", DriverSchema);

module.exports = DriverModel;