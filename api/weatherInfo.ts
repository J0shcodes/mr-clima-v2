import { config } from "dotenv";
import axios from "axios";

const fetchWeatherInfo = async (location: string) => {
  const env = config();

  const NEXT_PUBLIC_TOMORROW_API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY

  console.log(NEXT_PUBLIC_TOMORROW_API_KEY)

  const response = await axios.get(
    `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${NEXT_PUBLIC_TOMORROW_API_KEY}`
  );

  console.log(response)
};


export default fetchWeatherInfo;