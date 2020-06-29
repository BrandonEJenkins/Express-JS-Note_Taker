const express = require('express');
const routes = require('./routes/index');
const routes = require('./routes/apiRoutes');
const routes = require('./routes/htmlRoutes');

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