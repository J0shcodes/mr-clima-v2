import { useEffect, useState } from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

import getWeatherForecast from "@/api/Forecast";
import getForecastTimeArray from "@/helper/ForecastTime";
import getMetricTemperatureArray from "@/helper/MetricTemperature";

const locationName = window.localStorage.getItem("userState");
const forecast: any[] = JSON.parse(
  window.localStorage.getItem("Forecast") || "[]"
);
console.log(forecast, locationName);

const Forecast = () => {
  const [forecasts, setForecasts] = useState<any[] | undefined>([]);
  const [forecastTimeArray, setForecastTimeArray] = useState<string[]>([]);
  const [metricTemperatureArray, setMetricTemperatureArray] = useState<
    string[]
  >([]);

  useEffect(() => {
    const callForecastData = async () => {
      if (locationName) {
        const forecastData = await getWeatherForecast(locationName);
        let slicedForecastData = [];
        if (forecastData) {
          slicedForecastData = forecastData.slice(0, 6);
          setForecasts(slicedForecastData);
          const forecastTimeArray = getForecastTimeArray(slicedForecastData);
          setForecastTimeArray(forecastTimeArray);

          const metricTemperatureArray =
            getMetricTemperatureArray(slicedForecastData);
          setMetricTemperatureArray(metricTemperatureArray);
        }
      }
    };

    // callForecastData()
  }, []);
  return (
    <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] h-[11.875rem] row-span-2 shadow-3xl rounded-2xl py-6 px-14">
      <div className="flex justify-between w-[9.375rem]">
        <div className="mt-1">
          <CiClock2 />
        </div>
        <h2>12-hour forecast</h2>
      </div>
      <div className="flex justify-between mt-8">
        {forecasts
          ? forecasts.map((forecast, index) => (
              <div className="text-sm" key={forecast.DateTime}>
                <p>
                  {forecastTimeArray.length !== 0
                    ? forecastTimeArray[index]
                    : ""}
                </p>
                <div className="flex justify-center items-center my-1">
                  <Image
                    src={`/icons/${forecast.WeatherIcon}.svg`}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                {metricTemperatureArray.length !== 0 ? (
                  <p className="text-center">
                    {metricTemperatureArray[index]}&deg;C
                  </p>
                ) : (
                  <p className="text-center"></p>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Forecast;
