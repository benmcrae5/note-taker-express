const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3003;


app.get("/weird", (req, res) => {
    res.send("This is getting through!");
});


app.listen(PORT, () => {
    console.log("Server good to go!");
});

