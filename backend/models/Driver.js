const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const DriverSchema = new Schema({
    driverId: {
        type: String,
        required: true,

    },
<<<<<<< HEAD
    User: {
        type: mongoose.Types.ObjectId,
=======
    company: {
        type: String,
>>>>>>> 50c15297009df515877816ef1c678ba05e092139
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