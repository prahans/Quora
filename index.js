const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.set("view engine", "views");
app.set("views", path .join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended : true}));

let posts = [
    {
        username : "apnacollege",
        content : "i love coding"
    },
    {
        username : "shradhakhapra",
        content : "Hard work is important for achieve success"
    },
    {
        username : "rahulkumar",
        content : "I got selected for my 1st internship!."
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

