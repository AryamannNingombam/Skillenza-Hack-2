const UserModel = require('../models/User');


exports.signInUser = (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;
    if (!username || !email || !password) {
        console.log("Values not provided");
        return res.status(500).json({
            success: false,
            message: "Required values not provided!"
        })
    }
    UserModel.findOne({
            username,
            email,
            password
        })
        .then(User => {
            const token = User.generateAuthToken({
                _id: User._id
            });
            return res.status(200)
                .json({
                    success: true,
                    token
                })
        })
        .catch(err => {
            console.log("User not found!");
            return res.status(500)
                .json({
                    success: false,
                    message: "Invalid credentials!"
                })
        })
}





exports.signUpUser = async (req, res, next) => {
    const {
        username,
        password,
        email,
        headquarters
    } = req.body;
    if (!username || !password || !email || !headquarters) {
        console.log("Values not provided");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    //checking if user already exists;
    const check = await UserModel.find({
        username
    });
    const check2 = await UserModel.find({
        email
    });
    if (check.length !== 0 || check2.length !== 0) {
        return res.status(500)
            .json({
                success: false,
                message: "Username||Email already exists!"
            })
    };
    //creating the new user;
    UserModel.create(req.body)
        .then(newUser => {
            console.log("New user created!");
            return res.status(200)
                .json({
                    success: true
                })
        })
        .catch(err => {
            console.log("Error creating new user!");
            console.log(err);
            return res.status(500)
                .json({
                    success: false,
                    message: "Internal server error!"
                })
        })

}