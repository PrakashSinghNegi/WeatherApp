import { useState, useEffect } from "react";
import LocationDetail from "../component/LocationDetail.jsx";
import WeatherInfo from "../component/WeatherInfo.jsx";
import WeatherRange from "../component/WeatherRange.jsx";

const Home = () => {

  const [weatherData, setWeatherData] = useState();  
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const apikey = import.meta.env.VITE_API_KEY;
  const baseurl = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!location) return;

    setLoading(true);
    

    try {
        const res = await fetch(`${baseurl}forecast?q=${location}&appid=${apikey}&units=metric`);
        const data = await res.json();
        if(res.ok) {
            console.log(data);
            console.log(data.city)
            setWeatherData(data);
        }else {
            console.error(data.message);
            setWeatherData(null);
        }
        
    } catch (error) {
        console.log(error);
    }finally {
        setLoading(false);
    }
    

  }
    
  return (
     <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 h-screen gap-4 pt-4">
        <div className="bg-darkOklch md:row-start-1 md:col-span-2 md:col-start-1 rounded-2xl p-2 md:p-4">
            {loading ? "Search by city, state or country..."  : <WeatherInfo main={weatherData.list[0].main} weather={weatherData.list[0].weather} wind={weatherData.list[0].wind.speed} visibility={weatherData.list[0].visibility}></WeatherInfo>}
        </div>
        <div className="bg-darkOklch md:row-start-2 md:col-span-2 md:col-start-1 rounded-2xl p-2 md:p-4 text-center text-xl">
            <h2>Six Day Temperature</h2>
            {loading ? "Search by city, state or country..."  : <WeatherRange weather={weatherData}></WeatherRange>}
        </div>
        <div className="bg-customOkColor md:row-span-2 row-start-1 rounded-2xl py-4 px-8">
            <form onClick={handleSubmit} className="mt-8">
                <input className="rounded-2xl h-10 min-w-70 pl-4 mr-4"
                 type="text" 
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city/state/country"/>
                <button type="submit" className="rounded-2xl btn btn-outline w-30">Search</button>
            </form>
            <div className="mt-6">
               {loading ?  "Featching data ..."  : <LocationDetail location={weatherData.city}></LocationDetail>}
            </div>
        </div>
     </div>
  )
}

export default Home