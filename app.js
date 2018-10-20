const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pin_DB", { useNewUrlParser: true, useFindAndModify: false });
app.set("view engine", "ejs");
app.use(express.static("public"));

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    birthday: String,
    age: Number,
    gender: String,
    pin: String,
    created: {type: Date, default: Date.now} 
});

app.get("/", function(req, res) {
    res.send("/");
})

app.get("/users", function(req, res) {
    res.send("/users");
})

app.listen(3000, function() {
    console.log("SERVER INITIALIZED")
});