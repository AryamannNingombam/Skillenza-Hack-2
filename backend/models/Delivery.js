const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DeliverySchema = new Schema({
    receiverId: {
        type: String,
        required: true,
    },
    location: {
        type: mongoose.Types.ObjectId,
        required: true,

    },
    preferredTime: {
        type: Date,
        required: true,

    },
    delivered: {
        type: Boolean,
        required: true,
        default: false
    },
    driverId: {
        type: mongoose.Types.ObjectId,
        required: false,
        
    },
    onTheWay: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const DeliveryModel = mongoose.model("Delivery", DeliverySchema);

module.exports = DeliveryModel;