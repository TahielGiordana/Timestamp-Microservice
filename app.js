const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("We are in home");
});

//Get the unix
app.get("/api/:date?", (req, res) => {
  let date;
  if (isNaN(parseInt(req.params.date))) {
    date = new Date(req.params.date);
  } else {
    date = new Date(parseInt(req.params.date));
  }
  if (date.toString() === "Invalid Date") {
    res.send({ error: "Invalid Date" });
  } else {
    res.send({ unix: date.valueOf(date), utc: date.toUTCString() });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Connected to the server!");
});
