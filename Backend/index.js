const express = require('express');
const routes = require('./api/routes');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// DB configuration
mongoose.connect(config.db_url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB connection succesfully established')
});

//  Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/', routes);

app.listen(config.port, () => {
    console.log('WorkOut Tracker Backend is listening on port: ' + config.port)
});