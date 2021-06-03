const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const itemRoutes = require("./routes/Item");
const deliveryVehicleRoutes = require("./routes/DeliveryVehicle")
const customerRoutes = require("./routes/Customer")
const orderRoutes = require("./routes/Order")

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


app.use('/api/items', itemRoutes);
app.use('/api/delivery-vehicles', deliveryVehicleRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);


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
