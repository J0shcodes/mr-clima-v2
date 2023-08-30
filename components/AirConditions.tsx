import { useState, useEffect } from "react";

import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";

const AirConditions = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>();

  useEffect(() => {
    const weatherInfo = JSON.parse(
      window.localStorage.getItem("weatherInfo") || "{}"
    );
    setWeatherInfo(weatherInfo);
  }, [setWeatherInfo]);

  return (
    <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] h-[29.375rem] md:h-fit shadow-3xl rounded-2xl row-span-4 py-8 md:py-6 px-4 md:mt-3">
      <h2 className="text-lg md:text-base">AIR CONDITIONS</h2>
      <div className="mt-5 md:flex md:justify-between">
        <div className="mb-12 flex gap-1 md:flex-col md:mb-0">
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <FaThermometerThreeQuarters size={25} />
          </div>
          <div className="md:text-center">
            <p className="text-sm">Real Feel</p>
            <p>
              {weatherInfo ? weatherInfo.RealFeelTemperature.Metric.Value : ""}
              &deg;
              {weatherInfo ? weatherInfo.RealFeelTemperature.Metric.Unit : ""}
            </p>
          </div>
        </div>
        <div className="mb-12 flex gap-1 md:flex-col md:mb-0">
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <FaWind size={25} />
          </div>
          <div className="md:text-center">
            <p className="text-sm">Wind</p>
            <p>
              {weatherInfo ? weatherInfo.Wind.Speed.Metric.Value : ""}
              {weatherInfo ? weatherInfo.Wind.Speed.Metric.Unit : ""}
            </p>
          </div>
        </div>
        <div className="mb-12 flex gap-1 md:flex-col md:mb-0">
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <BsDroplet size={25} />
          </div>
          <div className="md:text-center">
            <p className="text-sm">Chance of rain</p>
            <p className="">
              {weatherInfo ? `${weatherInfo.RelativeHumidity}%` : ""}
            </p>
          </div>
        </div>
        <div className="flex gap-1 md:flex-col md:mb-0">
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <PiSunLight size={25} />
          </div>
          <div className="md:text-center">
            <p className="text-sm">UV Index</p>
            <p className="">{weatherInfo ? weatherInfo.UVIndex : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
