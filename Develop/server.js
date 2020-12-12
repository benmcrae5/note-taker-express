const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static('Develop/public'));

const PORT = 3003;

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

