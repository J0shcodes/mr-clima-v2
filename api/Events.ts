import axios from "axios";

import getLocationKey from "@/helper/LocationKey";

const NEXT_PUBLIC_PREDICT_HQ_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_PREDICT_HQ_ACCESS_TOKEN;

const getEventData = async () => {

    try {
      const response = await axios.get("https://api.predicthq.com/v1/events/", {
        headers: {
          Authorization: `Bearer ${NEXT_PUBLIC_PREDICT_HQ_ACCESS_TOKEN}`,
        },
        params: {
          "location_around.origin": "6.5244,3.3792",
        },
      });

      // const data = response.data
      console.log(response);
      // window.localStorage.setItem("weatherInfo", JSON.stringify(data));
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
};

export default getEventData;
