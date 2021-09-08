const UserModel = require('../models/User');




exports.getUserDetails = (req, res, next) => {
    const {
        _id
    } = req.headers;
    if (!_id) {
        console.log("Id not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    UserModel.findById({
            _id
        })
        .then(user => {
            return res.status(200)
                .json({
                    success: true,
                    user
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