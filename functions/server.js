const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config()
//app.use(express.static("Public"));
exports.handler = () =>
{
let weatherKey = process.env.WEATHER_API_KEY;
let imageKey = process.env.IMAGE_API_KEY;

  return{
    statusCode:200,
    body:JSON.stringify({imagekey:JSON.stringify(imageKey), weatherkey:JSON.stringify(weatherKey)})
  }
}

