// Dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// const path = require("path");
// const fs = require("fs");
// const { response } = require("express");


// Grabs all contents from json file, then parses file from json to regular js
// db.json then becomes a js array of objects
// const db = require("./db/db.json");

// Set up Express app and ensure Heroku compatible
// var app = express();
// var PORT = process.env.PORT || 3001;



// Sets up routes that sends user first to the AJAX page
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
// });

// Sets up API routes
// app.get("/api/notes", function(req, res) {

//     // fs read file; and store data as an array, then work with the data as an array type structure
//     // res.sendFile(path.normalize(__dirname + './db/db.json'))
//     res.json(db);

// });

// Client-side code wants to add note to db.json file
// app.post("/api/notes", function(req, res) {

//     // how do i receive the request from the user
//         // the info will be in the req object and on the body of the req object
//         var newNote = req.body;

//     // add the new information to the db.json
//         // update db first then write all of that data into the file
//         db.push(newNote);
//         fs.writeFile('db.json', db, (err) => {
//             if (err) throw err;
//             console.log('Updated json file');
//         });
//         // when a user attempts to call that url with a post request that user should be supplying some sort of data as the body 
//         // if user does that, then api grabs info from the body then update to the db then send a response back
//         return res.json(newNote);

//         // and what do i send the user back as a response

// });

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });


// // Sets up API routes
// app.get("/api/notes", function(request, response) {

//     response.contentType('application/json');

//     // Need to figure out how to fetch from db
//     var db = [];

//     // Converts data to JSON format
//     var dbJSON = JSON.stringify(db);

//     // Use the response object's send method to push string of db JSON back to the browser
//     response.send(dbJSON);

// })