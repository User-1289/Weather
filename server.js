const express = require("express");
const app = express();
const clothesByWeather = require('clothes-by-weather');
app.use(express.json());
require("dotenv").config()
app.use(express.static("Public"));
let weatherKey = process.env.WEATHER_API_KEY;
let imageKey = process.env.IMAGE_API_KEY;

let weatherObj = JSON.stringify(weatherKey)
let imageObj = JSON.stringify(imageKey)


app.post('/clothes-recommendation', (req, res) => {
  const { temperature, humidity, windSpeed } = req.body;
  const clothes = clothesByWeather(temperature, humidity, windSpeed);
  console.log(clothes)
  res.json({ clothes });
});

app.post("/image", (req, res) => {
  res.json({ imageKey });
});

app.post("/", (req, res) => {
  res.json({ weatherKey });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on " + process.env.PORT);
});
