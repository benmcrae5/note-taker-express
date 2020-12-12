const express = require("express");
const fs = require("fs");
const path = require("path");
const noteData = require("./db/db.json");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('Develop/public'));

const PORT = process.env.PORT || 3003;

//good
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/notes.html"));
});

//good
app.get("/api/notes", (req, res) => {
    res.json(noteData);
});

app.post("/api/notes", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

//default to main page GOES AT END OF APP CALLS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

//good
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});
