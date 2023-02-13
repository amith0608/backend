//Import the express module
const express = require('express');

const subscribers = require('./model/subscribers');
//Import Schema (subscriber) model
const subscriberModel = require('./model/subscribers');

//enable express usage
const app = express();

//It converts incoming JSON requests and puts the parsed data in request.body
app.use(express.json());




//Root directory with a message
app.get('/', (request, response, next) => {
    response.send({ message: "Hi!, this is Amith B N, Backend capestone project - Get Youtube subscribers--- 1. To get all the subscribers details, 2. To get only the subscriber names, 3. To get a subscriber detail given by ID as an object, 4. Showing an error message for wrong ID" });
});




//subscribers directory to get subscribers details

app.get("/subscribers", async(request, response) => {

    const subscribers = await subscriberModel.find({});
    try {
        response.send(subscribers);
    } catch (error) { //send error if directory not found
        response.status(404).send(error);
    }
});


// names directory to get subcribers names

app.get("/subscribers/name", async(request, response) => {

    try {
        //retrieves selected records from a subscribers dir --> .find().select() function.
        const subscribers = await subscriberModel.find().select({
            name: 1,
            subscribedChannel: 1,
            _id: 0
        })
        response.send(subscribers);
    } catch (err) {
        response.status(404).send(error);
    }
})


// to search in subscribers directory based upon the given ID, with a failed message.

app.get("/subscribers/:id", async(request, response) => {
    try {
        const _id = request.params.id;

        //mongoose findById() function to find a single document by its _id field.
        const subscriberData = await subscriberModel.findById(_id);

        //  console.log(subscriberData);
        response.send(subscriberData);
    } catch (err) {
        //incase if we insert wrong id
        response.status(400).send({ message: "Error! Please check the subscriber id" });
    }
});


//Exports module
module.exports = app;