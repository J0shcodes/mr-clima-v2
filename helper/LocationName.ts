import axios from "axios";

const NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;

const getNameOfLocation = async (userLocation: string) => {
  console.log(userLocation.split(","));
  const locationArray = userLocation.split(",");

  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/reverse?key=${NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN}&lat=${locationArray[0]}&lon=${locationArray[1]}&format=json`
    );
    const address = response.data.address;
    console.log(address);
    if (address.town) {
      window.localStorage.setItem("userState", address.town);
      return address.town;
    } else if (address.county) {
      window.localStorage.setItem("userState", address.county);
      return address.county;
    } else if (address.city) {
      window.localStorage.setItem("userState", address.city);
      return address.city;
    } else if (address.village) {
      window.localStorage.setItem("userState", address.village);
      return address.village;
    } else {
      window.localStorage.setItem("userState", address.state);
      return address.state;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.code);
      alert("Something went wrong, could not get city name");
    }
  }
};

export default getNameOfLocation