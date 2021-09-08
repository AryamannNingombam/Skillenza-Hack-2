require("dotenv").config({
    path: __dirname + "/.env"
});
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const AuthRoutes = require('./routes/Auth');
const UserRoutes = require('./routes/User');
const DeliveryRoutes = require('./routes/Delivery');
const DriverRoutes = require('./routes/Driver');
const LocationRoutes = require('./routes/Location');



const app = express()

var whitelist = ['http://localhost:3000']

var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE',
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
}) 

app.use((req, res, next) => {
    bodyParser.json({
        limit: '50mb',
        extended: true
    })(req, res, (err) => {
        if (err) {
            console.error(err)
            return res.sendStatus(400) // Bad request
        }
        next()
    })
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    extended: true
}));

app.use("/api/auth",AuthRoutes);
<<<<<<< HEAD
app.use('/api/User',UserRoutes);
=======
app.use('/api/user',UserRoutes);
>>>>>>> 50c15297009df515877816ef1c678ba05e092139
app.use('/api/delivery',DeliveryRoutes);
app.use('/api/driver',DriverRoutes);
app.use('/api/location',LocationRoutes);

const db = process.env.MONGO_DB_URI


mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {

        console.log("Connected!");

        app.get('/welcome', (req, res) => {
            res.status(200).json({
                message: 'Welcome to my API'
            })
        })


        const PORT = process.env.PORT || 8080
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`)
        })

    })
    .catch((err) => {
        console.log(err)
        console.log("Coudn't connect")
    })