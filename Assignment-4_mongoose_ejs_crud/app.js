const express = require("express");
const mongoose = require("mongoose");
const PORT = 1200;
const app = express();
const ejs=require("ejs")


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use("/static",express.static("static"));

//database connection
const connectionString = "mongodb+srv://rohan:rohan123@cluster0.jh2k1ml.mongodb.net/test";
mongoose
    .connect(connectionString)
    .then((res) => console.log("database Connected"))
    .catch((err) => console.log("Error:" + err));
//end connection

const mainRoutes = require("./index");
app.use("/", mainRoutes);

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Work on ${PORT}`);
});