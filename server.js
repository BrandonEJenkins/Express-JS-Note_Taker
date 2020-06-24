// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const { response } = require("express");

// Set up Express app and ensure Heroku compatible
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Sets up routes that sends user first to the AJAX page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


// Sets up API routes
app.get("/api/notes", function(request, response) {
    
    res.sendFile(path.normalize(__dirname + './db/db.json'))

});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


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