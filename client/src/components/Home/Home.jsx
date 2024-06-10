import React from "react";
import "./home.css";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

export default function Home({ data }) {
    const date = new Date();
    const showtime = date.getHours() + " : " + date.getMinutes();
    // console.log(data);
    return (
        <div className="container">
            <div className="container_one">
                <div className="country_date">
                    {" "}
                    <div>{data?.location?.name}</div>
                    <div>{data?.location?.localtime}</div>
                </div>
                <div className="temp">{data?.current?.temp_c} <sup>o</sup>C</div>
                <div className="weather_type">{data?.current?.condition?.text}</div>
                <div className="weather_details">
                    <WeatherDetails
                        name="Humidity"
                        wdata={data?.current?.humidity}
                        symbol="%"
                    />
                    <WeatherDetails
                        name="Pressure"
                        wdata={data?.current?.pressure_mb}
                        symbol="mb"
                    />
                    <WeatherDetails
                        name="Precipitation"
                        wdata={data?.current?.precip_mm}
                        symbol="mm"
                    />
                    <WeatherDetails
                        name="Feels Like"
                        wdata={data?.current?.feelslike_c}
                        symbol="C"
                    />
                </div>
            </div>
            <div className="container_two">
                <div className="wish_time">
                    <h3> Good Evening</h3>
                    <p>{showtime}</p>
                </div>
                <h1 className="temp">{data?.current?.temp_f} <sup>o</sup>F</h1>
                <div className="weather_type">
                    <div>
                        Latitude: {data?.location?.lat}
                    </div>
                    <div>
                        Longitude: {data?.location?.lon}
                    </div>
                </div>
                {/* <div className="weather_details">
                    <WeatherDetails />
                    <WeatherDetails />
                    <WeatherDetails />
                </div> */}
            </div>
        </div>
    );
}