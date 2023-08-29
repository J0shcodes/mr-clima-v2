import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";

const weatherInfo = JSON.parse(
  window.localStorage.getItem("weatherInfo") || "{}"
);

const AirConditions = () => {
  return (
    <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] h-[29.375rem] shadow-3xl rounded-2xl row-span-4 py-8 px-4">
      <h2 className="text-lg">AIR CONDITIONS</h2>
      <div className="mt-5">
        <div className="mb-12">
          <div className="flex justify-between w-[5.3rem]">
            <FaThermometerThreeQuarters size={25} />
            <p className="text-sm">Real Feel</p>
          </div>
          <div className="text-center w-[5.5rem]">
            <p>
              {weatherInfo ? weatherInfo.RealFeelTemperature.Metric.Value : ""}
              &deg;
              {weatherInfo ? weatherInfo.RealFeelTemperature.Metric.Unit : ""}
            </p>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex justify-between w-[4rem]">
            <FaWind size={25} />
            <p className="text-sm">Wind</p>
          </div>
          <div className="text-center w-[8.5rem]">
            <p>
              {weatherInfo ? weatherInfo.Wind.Speed.Metric.Value : ""}
              {weatherInfo ? weatherInfo.Wind.Speed.Metric.Unit : ""}
            </p>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex justify-between w-[8rem]">
            <BsDroplet size={25} />
            <p className="text-sm">Chance of rain</p>
          </div>
          <div className="text-center w-[5.5rem]">
            <p>{weatherInfo ? `${weatherInfo.RelativeHumidity}%` : ""}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between w-[5.8rem]">
            <PiSunLight size={25} />
            <p className="text-sm">UV Index</p>
          </div>
          <div className="text-center w-[5rem]">
            <p>{weatherInfo ? weatherInfo.UVIndex : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
