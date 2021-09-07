const CompanyModel = require('../models/Company');





exports.getCompanyDetails = (req, res, next) => {
    const {
        _id
    } = req.headers._id;
    if (!_id) {
        console.log("Id not provided!");
        return res.status(500)
            .json({
                success: false,
                message: "Required values not provided!"
            })
    }
    CompanyModel.findById({
            _id
        })
        .then(company => {
            return res.status(200)
                .json({
                    success: true,
                    company
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