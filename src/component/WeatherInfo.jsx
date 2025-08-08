import React, { useEffect, useState } from 'react'

const WeatherInfo = ({weather, main, wind, visibility}) => {
    const [icon, setIcon] = useState(weather[0].icon);
    
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className='flex flex-row gap-4'>
        <div className='flex flex-col justify-center items-center'>
           <p className='md:my-6 text-2xl'>{weather[0].description}</p>
           <img className="md:w-60 md:h-60" src={iconUrl} alt="weather icon" />
        </div>
        <div className='temp-info grid grid-cols-4 grid-rows-2 gap-x-7 p-8 gap-y-20'>
            <div>temp: <br></br> {Math.round(main.temp)}°C</div>
            <div>max-temp: <br></br> {Math.round(main.temp_max)}°C</div>
            <div>min-temp:<br></br>  {Math.round(main.temp_min)}°C</div>
            <div>Feels like:<br></br>  {Math.round(main.feels_like)}°C</div>
            <div>humidity:<br></br>  {main.humidity}%</div>
            <div>pressure:<br></br>  {main.pressure} hPa</div>
            <div>wind:<br></br>  {wind} m/s</div>
            <div>visibility:<br></br>  {visibility} m</div>
        </div>
    </div>
  )
}

export default WeatherInfo