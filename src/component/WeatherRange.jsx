import React from 'react'

const WeatherRange = ({weather}) => {
    const forecast = weather.list; 
    const dailyTemps = {};

    forecast.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString(); // e.g., "Mon Aug 12 2025"

        if (!dailyTemps[date]) {
            // Save the first reading of the day
            dailyTemps[date] = item.main.temp;
        }
    });

// Get first 6 days
    const tempsFor6Days = Object.entries(dailyTemps).slice(0, 6);

  return (
    <div className='grid grid-cols-3 grid-rows-2 px-8 text-base'>
        
        {tempsFor6Days.map(([date, temp], i) => (
            <div className='w-50 h-24 flex flex-col justify-center items-center bg-customOkColor m-8 rounded-2xl' key={i}>
                <p>{date}</p>
                <p>{Math.round(temp)}°C</p>
             </div>
        ))}
    </div>
  )
}

export default WeatherRange