const DriverModel = require('../models/Driver');

exports.getDriverDetails = (req, res, next) => {
    const _id = req.headers._id;
    if (!_id) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    DriverModel.findById({
            _id
        })
        .then(driver => {
            return res.status(200)
                .json({
                    success: true,
                    driver
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


exports.getDriverStatus = (req, res, next) => {
    const _id = req.headers._id;
    if (!_id) {
        console.log("Required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    DriverModel.findById({
            _id
        })
        .then(driver => {
            return res.status(200)
                .json({
                    success: true,
                    freeForDelivery: driver.freeForDelivery,
                    onTheWay: driver.onTheWay
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

exports.changeDriverFreeStatus = async (req, res, next) => {
    const {
        _id
    } = req.body;
    if (!_id) {
        console.log("required vlaues not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    const check = await DriverModel.find({
        _id
    });
    if (check.length === 0) {
        console.log("Invalid _id!");
        return res.status(500)
            .json({
                success: false,
                message: "Invalid values provided!"
            })
    }
    const driver = check[0];
    driver.freeForDelivery = !driver.freeForDelivery;
    driver.save()
        .then(driver => {
            console.log("Driver status updated!");
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


exports.changeDriverOnTheWayStatus = async (req, res, next) => {
    const {
        _id
    } = req.body;
    if (!_id) {
        console.log("required vlaues not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    const check = await DriverModel.find({
        _id
    });
    if (check.length === 0) {
        console.log("Invalid _id!");
        return res.status(500)
            .json({
                success: false,
                message: "Invalid values provided!"
            })
    }
    const driver = check[0];
    driver.onTheWay = !driver.onTheWay;
    driver.save()
        .then(driver => {
            console.log("Driver status updated!");
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