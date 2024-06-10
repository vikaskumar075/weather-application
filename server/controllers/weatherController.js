import axios from "axios";

export const fetchWeatherByCity = async (req, res) => {
    try {
        const { city } = req.body;
        // console.log(city);
        if(!city || city === undefined){
            res.status(400).json("Please enter city");
      }
        const response = await axios.create({
            baseURL: `https://api.weatherapi.com/v1`,
            params: { key: process.env.API_KEY },
        }).get(`/current.json?q=${city}`);


        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const fetchWeatherByLocation = async (req, res) => {
    try {
        // const { lat, lon } = req.body;
        // const latitude = parseInt(lat);
        // const longitude= parseInt(lon);
        // console.log(typeof(longitude));

        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.MY_OPEN_API}`);

        const response = await axios.create({
            baseURL: `https://api.weatherapi.com/v1`,
            params: { key: process.env.API_KEY },
        }).get(`/current.json?q=kanpur`);

        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json(error);
    }
}