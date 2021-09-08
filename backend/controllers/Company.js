const UserModel = require('../models/User');




<<<<<<< HEAD

=======
>>>>>>> 50c15297009df515877816ef1c678ba05e092139
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
<<<<<<< HEAD
        .then(User => {
            return res.status(200)
                .json({
                    success: true,
                    User
=======
        .then(user => {
            return res.status(200)
                .json({
                    success: true,
                    user
>>>>>>> 50c15297009df515877816ef1c678ba05e092139
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