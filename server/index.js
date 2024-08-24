const express = require("express");
const app = express();
const allRouter = require('./routes');
require('dotenv').config();
const cors = require("cors");
const database = require("./config/database");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cloudinary = require("./config/cloudinary");

const PORT = process.env.PORT || 8000;

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

database.connect();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

cloudinary.cloudinaryConnect();

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT', 'OPTIONS'],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    return res.json({
        success: "true",
        message: "Congrats your server is successfully running...."
    })
})

app.listen(PORT, () => {
    console.log(`App is running on Port no: ${PORT}`);
})


app.use('/api/v1', allRouter);
