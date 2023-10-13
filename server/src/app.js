const express = require("express");
const mainRouter = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb",  extended: true}));
app.use(mainRouter);

module.exports = app;