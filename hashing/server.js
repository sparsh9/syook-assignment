//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


require("dotenv").config();

const authRoutes = require('./routes/auth');
const personRoutes = require('./routes/person');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/person', personRoutes);


const withTime = require('./services/njs-emitter');


const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});




mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established"))
    .catch((error) => console.error("MongoDB connection failed:", error.message));

