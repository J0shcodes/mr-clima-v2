import axios from "axios";

import getLocationKey from "@/helper/LocationKey";

const NEXT_PUBLIC_ACCUWEATHER_API_KEY =
  process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;

const NEXT_PUBLIC_PREDICT_HQ_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_PREDICT_HQ_ACCESS_TOKEN;

const getWeatherForecast = async (city: string | undefined) : Promise<any[] | undefined> => {
  const locationKey = await getLocationKey(city);
  console.log(locationKey);


  if (locationKey) {
    try {
      const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&details=${true}`);

      // const data = response.data
      console.log(response.data[0], response);
      const data = response.data;
      // console.log(data);
      window.localStorage.setItem("Forecast", JSON.stringify(data));
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 500) {
          alert("Something went wrong, please try again");
        }
        if (error.response?.status === 400) {
          alert("Please enter a correct location");
        }
      }
    }
  }
  //   try {
  //     const response = await axios.get(
  //       `http://dataservice.accuweather.com/forecasts/v1/hourly/24hour/${locationKey}?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&details=${true}`
  //     );

  //     // const data = response.data
  //     console.log(response.data[0], response)
  //     const data = response.data[0]
  //     // console.log(data);
  //     window.localStorage.setItem("weatherInfo", JSON.stringify(data));
  //   } catch (error) {
  //     if(axios.isAxiosError(error)) {
  //       if(error.response?.status === 500) {
  //         alert("Something went wrong, please try again")
  //       }
  //       if(error.response?.status === 400) {
  //         alert("Please enter a correct location")
  //       }
  //     }
  //   }
};

export default getWeatherForecast;
