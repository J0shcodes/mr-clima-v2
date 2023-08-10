import { config } from "dotenv";
import axios from "axios";

const fetchWeatherInfo = async (location: string) => {
  const env = config();

  const NEXT_PUBLIC_TOMORROW_API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY

  console.log(NEXT_PUBLIC_TOMORROW_API_KEY)

  try {
    const response = await axios.get(
      `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${NEXT_PUBLIC_TOMORROW_API_KEY}`
    );

    const data = response.data.data
    console.log(response)
    console.log(data);
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