const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
