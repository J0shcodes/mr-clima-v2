"use client";

import { useEffect, useState, useCallback } from "react";
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

import fetchWeatherInfo from "../api/weatherInfo";
import axios from "axios";

import getImageName from "@/helper/ImageName";
import getWeatherForecast from "@/api/Forecast";
import getEventData from "@/api/Events";
import getForecastTimeArray from "@/helper/ForecastTime";
import getMetricTemperatureArray from "@/helper/MetricTemperature";
import Forecast from "./Forecast";
import AirConditions from "./AirConditions";

// const location = JSON.parse(window.localStorage.getItem("location") || "");

const WeatherVisuals = () => {
  const [locationName, setLocationName] = useState<string | undefined>("");
  const [weatherInfo, setWeatherInfo] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");
  const [forecasts, setForecasts] = useState<any[] | undefined>();
  const [forecastTimeArray, setForecastTimeArray] = useState<string[]>([]);
  const [metricTemperatureArray, setMetricTemperatureArray] = useState<
    string[]
  >([]);
  const [location, setLocation] = useState<string>("")

  const NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN =
    process.env.NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;
  const NEXT_PUBLIC_ACCUWEATHER_API_KEY =
    process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;

  // "https://us1.locationiq.com/v1/reverse?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json"

  const getNameOfLocation = useCallback(
    async (userLocation: string): Promise<string | undefined> => {
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
        }
        if (address.county) {
          window.localStorage.setItem("userState", address.county);
          return address.county;
        }
        if (address.city) {
          window.localStorage.setItem("userState", address.city);
          return address.city;
        }
        if (address.village) {
          window.localStorage.setItem("userState", address.village);
          return address.village;
        }
        if (address.state) {
          window.localStorage.setItem("userState", address.state);
          return address.state;
        }

      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.code);
          alert("Something went wrong, could not get city name");
        }
      }
    },
    [NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN]
  );

  useEffect(() => {
    const location = JSON.parse(window.localStorage.getItem("location") || "");
    setLocation(location)
    const userLocation = window.localStorage.getItem("userLocation") || "[]";

    const callDataFunctions = async () => {
      // if (userLocation) {
        // const locationName = await getNameOfLocation(userLocation);
        // setLocationName(locationName)
        // const locationKey = await getLocationKey(locationName);
        // fetchWeatherInfo(locationName);
        // getEventData()
        // const forecast = await getWeatherForecast(locationName)
        // console.log(forecast)

        const weatherInfo = JSON.parse(
          window.localStorage.getItem("weatherInfo") || "{}"
        );
        setWeatherInfo(weatherInfo);

        const today = new Date(weatherInfo.LocalObservationDateTime);

        const month = today.toLocaleString("en-US", { month: "short" });
        const year = today.toLocaleString("en-US", { year: "numeric" });
        const day = today.toLocaleString("en-US", { day: "numeric" });
        const dayOfTheWeek = today.toLocaleString("en-US", { weekday: "long" });

        const locationDate = `${dayOfTheWeek} | ${day} ${month} ${year}`;
        setDate(locationDate);

        const imageName = getImageName();
        window.localStorage.setItem("imageName", imageName);
      // }
    };

    callDataFunctions();
  }, [getNameOfLocation, locationName]);

  return (
    <div className="px-12 md:px-4">
      <div className="px-4">
        <div className="flex text-lg">
          <div className="mt-1">
            <IoLocationOutline />
          </div>
          <p>{location}</p>
        </div>
        <div className="flex md:flex-col justify-between md:justify-center md:items-center md:gap-y-16 pt-5">
          <div className="">
            <h2 className="text-4xl font-medium mt-3 md:text-2xl">
              {weatherInfo ? weatherInfo.WeatherText : ""}
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
        <Forecast/>
        <AirConditions/>
      </div>
    </div>
  );
};

export default WeatherVisuals;
