import express from "express";
import { fetchWeatherByCity, fetchWeatherByLocation } from "../controllers/weatherController.js";

const weatherRoute = express.Router();

weatherRoute.get("/my-weather", fetchWeatherByLocation);
weatherRoute.post("/weather", fetchWeatherByCity);

export default weatherRoute;