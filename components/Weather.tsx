"use client";

import { useEffect, useState, useCallback, FC } from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaCloudRain } from "react-icons/fa";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";
import { config } from "dotenv";
import { ToastContainer, toast } from "react-toastify";
import getLocationKey from "@/helper/LocationKey";
import { FaSearch } from "react-icons/fa";

import fetchWeatherInfo from "../api/weatherInfo";
import axios from "axios";

import getImageName from "@/helper/ImageName";
import getWeatherForecast from "@/api/Forecast";
import getEventData from "@/api/Events";
import getForecastTimeArray from "@/helper/ForecastTime";
import getMetricTemperatureArray from "@/helper/MetricTemperature";
import Forecast from "./Forecast";
import AirConditions from "./AirConditions";
import setLocationDate from "@/helper/locationDate";

interface WeatherVisualProps {
  lat: number | undefined;
  long: number | undefined;
}

const WeatherVisuals: FC<WeatherVisualProps> = ({ lat, long }) => {
  console.log(lat, long);
  const [locationName, setLocationName] = useState<string | undefined>("");
  const [userLocation, setUserLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [forecasts, setForecasts] = useState<any[] | undefined>();
  const [forecastTimeArray, setForecastTimeArray] = useState<string[]>([]);
  const [metricTemperatureArray, setMetricTemperatureArray] = useState<
    string[]
  >([]);
  const [location, setLocation] = useState<string>("");
  const [locationKey, setLocationKey] = useState<string>();
  const [searchedlocation, setSearchedLocation] = useState<string>("");

  const NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN =
    process.env.NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;
  const NEXT_PUBLIC_ACCUWEATHER_API_KEY =
    process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;

  const handleLocationSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(searchedlocation);
    const arrSearchedLocation = searchedlocation.split(" ");
    for (let i = 0; i < arrSearchedLocation.length; i++) {
      arrSearchedLocation[i] =
        arrSearchedLocation[i].charAt(0).toUpperCase() +
        arrSearchedLocation[i].slice(1);
    }

    const capSearchedLocation = arrSearchedLocation.join(" ");
    // window.localStorage.setItem("weatherInfo", JSON.stringify());
    fetchWeatherInfo(capSearchedLocation);
    // window.location.reload();
  };

  const getUserLocation = useCallback(async () => {
    if (lat && long) {
      try {
        const response = await axios.get(
          `https://us1.locationiq.com/v1/reverse?key=${NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN}&lat=${lat}&lon=${long}&format=json`
        );
        console.log(response.data.address);
        if (response.data.address.county) {
          if (response.data.address.county === "Lagos Mainland") {
            setUserLocation("Lagos");
          } else {
            setUserLocation(response.data.address.county);
          }
        }
        if (response.data.address.village) {
          setUserLocation(response.data.address.village);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
          toast.error("Something went wrong, could not get city name");
        }
      }
    }

    if (userLocation) {
      const locationKey = await getLocationKey(userLocation);

      if (locationKey) {
        try {
          const response = await axios.get(
            `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&details=${true}`
          );

          const data = response.data[0];
          setWeatherInfo(data);
          window.localStorage.setItem("weatherText", data.WeatherText);
          const date = setLocationDate(data.LocalObservationDateTime);
          setDate(date);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error.response);
            if (error.response?.status === 500) {
              toast.error("Something went wrong, please try again");
            }
            if (error.response?.status === 400) {
              toast.error("Please enter a correct location");
            }
          }
        }
      }
    }
  }, [
    NEXT_PUBLIC_ACCUWEATHER_API_KEY,
    NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN,
    lat,
    long,
    userLocation,
  ]);

  useEffect(() => {
    const callWeatherDataFunctions = async () => {
      await getUserLocation();
    };

    callWeatherDataFunctions();
  }, [getUserLocation]);

  return (
    <div className="px-12 md:px-4">
      <form className="relative mb-8 md:mt-2 text-center" onSubmit={handleLocationSearch}>
        <div className="text-[#6b6969] absolute left-[28.5rem] top-1 w-fit">
          <FaSearch size={35} />
        </div>
        <input
          type="search"
          placeholder="Search location e.g New York"
          className="rounded-xl pl-16 pr-5 py-2 w-[31.25rem] md:w-[25rem] sm:w-[18rem] bg-[#d9d9d9] text-lg text-[#6b6969] outline-none"
          onChange={(e) => setSearchedLocation(e.target.value)}
        />
      </form>
      <div className="px-4">
        {userLocation ? (
          <div className="flex text-lg">
            <div className="mt-1">
              <IoLocationOutline />
            </div>
            <p>{userLocation}</p>
          </div>
        ) : null}
        <div className="flex md:flex-col justify-between md:justify-center md:items-center md:gap-y-16 pt-5">
          <div className="">
            <h2 className="text-4xl font-medium mt-3 md:text-2xl">
              {weatherInfo ? weatherInfo.WeatherText : "No weather info"}
            </h2>
          </div>
          <div className="font-medium">
            <p className="text-4xl md:text-5xl md:text-center">
              {weatherInfo ? weatherInfo.Temperature.Metric.Value : ""}&deg;
              {weatherInfo ? weatherInfo.Temperature.Metric.Unit : ""}
            </p>
            <p className="">{date}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-6 pt-4 md:block">
        <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] row-span-2 shadow-3xl rounded-2xl py-6 px-14 md:hidden">
          <h1 className="text-xl">Events in your area</h1>
          <div className="flex justify-between mt-10">
            <div className="rounded-lg">
              <Image
                src="/images/sunshine/sunshine-1.jpg"
                alt=""
                width={180}
                height={180}
                className="rounded-lg"
              />
              <p className="text-sm">2km away</p>
            </div>
            <div className="rounded-lg">
              <Image
                src="/images/snowing/snowing-3.jpg"
                alt=""
                width={180}
                height={180}
                className="rounded-lg"
              />
              <p className="text-sm">1.5km away</p>
            </div>
            <div className="rounded-lg">
              <Image
                src="/images/sunshine/sunshine-1.jpg"
                alt=""
                width={180}
                height={180}
                className="rounded-lg"
              />
              <p className="text-sm">3km away</p>
            </div>
            <div className="rounded-lg">
              <Image
                src="/images/cloudy/cloudy-2.jpg"
                alt=""
                width={180}
                height={180}
                className="rounded-lg"
              />
              <p className="text-sm">1.8km away</p>
            </div>
          </div>
        </div>
        <Forecast userLocation={userLocation} />
        <AirConditions weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default WeatherVisuals;
