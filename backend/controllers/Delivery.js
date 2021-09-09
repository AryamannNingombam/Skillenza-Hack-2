const DeliveryModel = require('../models/Delivery');
const LocationModel = require('../models/Location');
const DriverModel = require('../models/Driver');


exports.changeDeliveryPersonForDelivery = async (req, res, next) => {
    const {
        driverId,
        deliveryId
    } = req.headers;
    if (!driverId || !deliveryId) {
        console.log("required values not provided");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    //checking if the driver exists;
    const driverCheck = await DriverModel.find({
        _id: driverId
    });
    if (driverCheck.length === 0) {
        console.log("No such driver exists");
        return res.status(500)
            .json({
                success: false,
                message: "Invalid values provided!"
            })
    }
    DeliveryModel.findByIdAndUpdate({
            _id: deliveryId
        }, {
            driverId
        }, {
            new: true
        })
        .then(updatedDelivery => {
            console.log("Driver changed!");
            return res.status(200)
                .json({
                    success: true,
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}


exports.getDeliveryDetailsForDriver = (req, res, next) => {
    const {
        _id
    } = req.headers;
    if (!_id) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    DeliveryModel.find({
            driverId: _id
        })
        .then(deliveries => {
            return res.status(200)
                .json({
                    success: true,
                    deliveries
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}



exports.getDeliveryDetails = (req, res, next) => {
    const _id = req.headers._id;
    DeliveryModel.findById({
            _id
        })
        .then(delivery => {
            return res.status(200)
                .json({
                    success: true,
                    delivery
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}

exports.endDelivery = (req, res, next) => {
    const _id = req.body._id;
    if (!_id) {
        console.log("Id not provided");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    DeliveryModel.findByIdAndUpdate({
            _id
        }, {
            delivered: true,
            onTheWay: false,
        }, {
            new: true
        })
        .then(updatedDelivery => {
            console.log("Delivery done");
            return res.status(200)
                .json({
                    success: true,
                })
        })
        .catch(err => {
            console.log("ERROR")
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })
}

exports.startDelivery = (req, res, next) => {
    const {
        deliveryId
    } = req.body;
    if (!deliveryId) {
        console.log("Required values not provided");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided"
            })
    }
    DeliveryModel.findByIdAndUpdate({
            _id
        }, {
            onTheWay: true
        }, {
            new: true
        })
        .then(updatedDelivery => {
            console.log("Delivery started!");
            return res.status(200)
                .json({
                    success: true,
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })

}




exports.addDelivery = async (req, res, next) => {
    const {
        receiverId,
        location,
        preferredTime
    } = req.body;
    const check = new Date(preferredTime);
    if (check < Date.now()) {
        console.log("Delivery cannot be done before the current date and time!");
        return res.status(500)
            .json({
                success: false,
                message: "Invalid preferred time!"
            })
    }
    const locationCheck = await LocationModel.find({
        _id: location
    });
    if (locationCheck.length === 0) {
        console.log("Invalid location!");
        return res.status(500)
            .json({
                success: false,
                message: "Invalid location!"
            })
    }
    DeliveryModel.create({
            receiverId,
            location,
            preferredTime
        })
        .then(newDelivery => {
            console.log("New delivery added!");
            return res.status(200)
                .json({
                    success: true
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error!"
                })
        })



}



exports.changePreferredTimeForDelivery = (req,res,next)=>{
    const {_id,time} = req.body;
    if (!_id || !time){
        console.log("required values not provided!")
        return res.status(500)
        .json({
            success:false,
            message:"required values not provided"
        })
    }
    DeliveryModel.findByIdAndUpdate({_id},{preferredTime:time},{new:true})
    .then(updatedDelivery=>{
        console.log("Delivery updated");
        return res.status(200)
        .json({
            success:true,
        })
    })
    .catch(err=>{
        console.log("ERROR");
        console.log(err);
        return res.status(500)
        .json({
            success:false,
            message:"Unknown server error!"
        })
    })
}