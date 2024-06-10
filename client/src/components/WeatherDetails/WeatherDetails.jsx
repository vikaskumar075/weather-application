import React from 'react'
import "./weatherDetails.css"
const WeatherDetails = ({ name, wdata, symbol }) => {
    return (
        <div className='details'>
            <h5>
                {name}
            </h5>
            <div>
                {wdata} {symbol}
            </div>
        </div>
    )
}

export default WeatherDetails