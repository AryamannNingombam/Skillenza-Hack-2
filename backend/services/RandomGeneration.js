const LocationModel = require('../models/Location');
const DeliveryModel = require('../models/Delivery');
const RandomString = require('randomstring')
const RandomNumber = require('random-number');
const RandomDate = require('random-date-generator');




exports.GenerateRandomLocations = () => {

    for (let i = 0; i < 1000; i++) {

        const building = RandomString.generate(RandomNumber({
            min: 5,
            max: 15,
            integer: true
        }));
        const street = RandomString.generate(RandomNumber({
            min: 5,
            max: 23,
            integer: true
        }));
        const landmark = RandomString.generate(RandomNumber({
            min: 9,
            max: 15,
            integer: true
        }));
        const pincode = RandomNumber({
            min: 100000,
            max: 999999,
            integer: true
        })
        const city = RandomString.generate(RandomNumber({
            min: 5,
            max: 15,
            integer: true
        }));
        const state = RandomString.generate(RandomNumber({
            min: 5,
            max: 15,
            integer: true
        }));
        const country = RandomString.generate(RandomNumber({
            min: 5,
            max: 10,
            integer: true
        }));
        LocationModel.create({
                building,
                street,
                landmark,
                pincode,
                city,
                state,
                country
            })
            .then(new_ => {
                console.log(new_._id)
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);

            })
    }
}

exports.GenerateRandomDeliveries = async() => {
    const allLocations = await LocationModel.find({});
    for (let i = 0; i < 1000; i++) {
        const receiverId = RandomString.generate(RandomNumber({
            min: 5,
            max: 15,
            integer: true
        }));
        const location = allLocations[Math.floor(Math.random() * allLocations.length)];
        const preferredTime = RandomDate.getRandomDate();
        const temp = [true, false];
        const delivered = temp[Math.floor(Math.random() * temp.length)];
        const driverId = RandomString.generate(RandomNumber({
            min: 10,
            max: 20,
            integer: true
        }));
        const onTheWay = false;
        DeliveryModel.create({
                receiverId,
                location,
                preferredTime,
                delivered,
                driverId,
                onTheWay
            })
            .then(delivery => {
                console.log(delivery._id);
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            })
    }
}