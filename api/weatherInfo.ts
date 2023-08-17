import { config } from "dotenv";
import axios from "axios";

import getLocationKey from "@/helper/LocationKey";
// import

const fetchWeatherInfo = async (city: string | undefined) => {
  const env = config();

  const NEXT_PUBLIC_TOMORROW_API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY
  const NEXT_PUBLIC_ACCUWEATHER_API_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY

  console.log(NEXT_PUBLIC_TOMORROW_API_KEY)
  
  console.log(city)

  const locationKey = await getLocationKey(city)
  console.log(locationKey)

  // `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${NEXT_PUBLIC_TOMORROW_API_KEY}`

  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&details=${true}`
    );

    // const data = response.data
    console.log(response.data[0], response)
    const data = response.data[0]
    // console.log(data);
    window.localStorage.setItem("weatherInfo", JSON.stringify(data));
  } catch (error) {
    if(axios.isAxiosError(error)) {
      if(error.response?.status === 500) {
        alert("Something went wrong, please try again")
      }
      if(error.response?.status === 400) {
        alert("Please enter a correct location")
      }
    }
  }
};


export default fetchWeatherInfo;