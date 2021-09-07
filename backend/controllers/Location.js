const LocationModel = require('../models/Location');

exports.addLocation = (req, res, next) => {
    LocationModel.create(req.body)
        .then(newLocation => {
            console.log("New location added!");
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



exports.getLocationDetails = (req, res, next) => {
    const {
        _id
    } = req.headers;
    if (!_id) {
        console.log("required values not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    LocationModel.findById({
            _id
        })
        .then(location => {
            return res.status(200)
                .json({
                    success: true,
                    location
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


exports.getAllLocations = (req, res, next) => {

    LocationModel.find({})
        .then(locations => {
            return res.status(200)
                .json({
                    success: true,
                    locations,
                })
        })
        .catch(err => {
            console.log("ERROR");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Unknown server error"
                })
        })
}