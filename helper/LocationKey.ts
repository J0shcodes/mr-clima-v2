import axios from "axios";

const NEXT_PUBLIC_ACCUWEATHER_API_KEY =
  process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;

const getLocationKey = async (city: string | undefined): Promise<string | undefined> => {
  let formattedCity = ""

  if(city) {
    // Checks if the city string passed to the function contains two cities name separated by a /
    if(city.includes("/")) {
      // splits the two cities string by /
      const cityArray = city.split("/")   

      const cityString = cityArray[0]
      console.log(cityArray, cityString)
      formattedCity = cityString
    } else {
      formattedCity = city
    }
  }

  try {
    const response = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&q=${formattedCity}`
    );
    console.log(response.data, response.data[0].Key);
    const data = response.data;
    return data[0].Key;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
  }
};

export default getLocationKey;
