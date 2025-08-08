import { formatDate } from "../lib/FormatDate.js";
import { Sunrise, Sunset } from "lucide-react";

const LocationDetail = ({location}) => {
   

  return (
    <div className="md:mt-10 px-4">
  <div className='rounded-2xl bg-okColor w-full max-w-md mx-auto h-8 text-center pt-1'>
    <p>Location: {location?.name} | <span>Country: {location?.country}</span></p>     
  </div>

  <div className='flex flex-col gap-6 md:mt-8'>
    <div className='flex justify-between bg-dataColor p-4 rounded-2xl'>
      <Sunrise className="text-yellow-500" size={50}/> 
      <div>
        <p>Sunrise</p>
        <p>{formatDate(location.sunrise)}</p>
      </div>
    </div>
    <div className='flex justify-between bg-dataColor p-4 rounded-2xl'>
      <Sunset className="text-yellow-500" size={50}/>
      <div>
        <p>Sunset</p>
        <p>{formatDate(location.sunset)}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default LocationDetail