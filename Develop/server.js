const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4} = require('uuid');
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
    req.body.ID = uuidv4();
    let newNote = noteData;
    newNote.push(req.body);

    fs.writeFileSync(
        path.join(__dirname + "/db/db.json"), 
        JSON.stringify(newNote)
    );
    
    res.json(newNote);
});

//default to main page GOES AT END OF APP CALLS
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

//good
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});
