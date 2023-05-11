const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config()
app.use(express.static("Public"));
let weatherKey = process.env.WEATHER_API_KEY;
let imageKey = process.env.IMAGE_API_KEY;

let weatherObj = JSON.stringify(weatherKey)
let imageObj = JSON.stringify(imageKey)



app.post("/image", (req, res) => {
  res.json({ imageKey });
});

app.post("/", (req, res) => {
  res.json({ weatherKey });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on " + process.env.PORT);
});
