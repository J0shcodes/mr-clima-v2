"use client";

import { useEffect, useState } from "react";
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

const WeatherVisuals = () => {
  const today = new Date();
  const dayOfTheWeek: string = today.toLocaleString("en-US", {
    weekday: "long",
  });
  const month: string = today.toLocaleString("en-US", { month: "short" });
  const day: string = today.toLocaleString("en-US", { day: "2-digit" });
  const year: string = today.toLocaleString("en-US", { year: "numeric" });

  const [locationName, setLocationName] = useState<string>("");

  const date = `${dayOfTheWeek} | ${day} ${month} ${year}`;

  const NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN =
    process.env.NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;
  const NEXT_PUBLIC_ACCUWEATHER_API_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY

  // "https://us1.locationiq.com/v1/reverse?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json"

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
        setLocationName(address.town);
      } else if (address.county) {
        setLocationName(address.county);
      } else if (address.city) {
        setLocationName(address.city);
      } else if (address.village) {
        setLocationName(address.village);
      } else {
        setLocationName(address.state);
      }

      window.localStorage.setItem("userState", address.state)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.code);
        alert("Something went wrong, could not get city name");
      }
    }
  };

  const getLocationDetails = async (city: string) => {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${NEXT_PUBLIC_ACCUWEATHER_API_KEY}&q=${city}`)
    console.log(response.data)
  }

  useEffect(() => {
    const userLocation = window.localStorage.getItem("userLocation");
    if (userLocation) {
      // fetchWeatherInfo(userLocation);
      // const weatherInfo = JSON.parse(
      //   window.localStorage.getItem("weatherInfo") || "{}"
      // );
      getNameOfLocation(userLocation);
      getLocationDetails(locationName)
    }
  });

  return (
    <div className="px-12">
      <div className="px-4">
        <div className="flex text-lg">
          <div className="mt-1">
            <IoLocationOutline />
          </div>
          <p>{locationName}</p>
        </div>
        <div className="flex justify-between pt-5">
          <div className="">
            <h2 className="text-4xl font-medium mt-3">Cloudy</h2>
          </div>
          <div className="font-medium">
            <p className="text-4xl">26&deg;C</p>
            <p className="">{date}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-6 pt-4">
        <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] row-span-2 shadow-3xl rounded-2xl py-6 px-14">
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
        <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] h-[11.875rem] row-span-2 shadow-3xl rounded-2xl py-6 px-14">
          <div className="flex justify-between w-[9.375rem]">
            <div className="mt-1">
              <CiClock2 />
            </div>
            <h2>24-hour forecast</h2>
          </div>
          <div className="flex justify-between mt-8">
            <div className="text-sm">
              <p>19:00pm</p>
              <div className="flex justify-center items-center my-1">
                <FaCloudRain size={30} />
              </div>
              <p className="text-center">29&deg;C</p>
            </div>
            <div className="text-sm">
              <p>19:00pm</p>
              <div className="flex justify-center items-center my-1">
                <FaCloudRain size={30} />
              </div>
              <p className="text-center">29&deg;C</p>
            </div>
            <div className="text-sm">
              <p>19:00pm</p>
              <div className="flex justify-center items-center my-1">
                <FaCloudRain size={30} />
              </div>
              <p className="text-center">29&deg;C</p>
            </div>
            <div className="text-sm">
              <p className="text-center">19:00pm</p>
              <div className="flex justify-center items-center my-1">
                <FaCloudRain size={30} />
              </div>
              <p className="text-center">29&deg;C</p>
            </div>
            <div className="text-sm">
              <p>19:00pm</p>
              <div className="flex justify-center items-center my-1">
                <FaCloudRain size={30} />
              </div>
              <p className="text-center">29&deg;C</p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(39,39,39,0.1)] backdrop-blur-[40px] border border-solid border-[rgba(255,255,255,0.2)] h-[29.375rem] shadow-3xl rounded-2xl row-span-4 py-8 px-4">
          <h2 className="text-lg">AIR CONDITIONS</h2>
          <div className="mt-5">
            <div className="mb-12">
              <div className="flex justify-between w-[5.3rem]">
                <FaThermometerThreeQuarters size={25} />
                <p className="text-sm">Real Feel</p>
              </div>
              <div className="text-center w-[5.5rem]">
                <p>30&deg;C</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="flex justify-between w-[4rem]">
                <FaWind size={25} />
                <p className="text-sm">Wind</p>
              </div>
              <div className="text-center w-[8.5rem]">
                <p>0.8 km/hr</p>
              </div>
            </div>
            <div className="mb-12">
              <div className="flex justify-between w-[8rem]">
                <BsDroplet size={25} />
                <p className="text-sm">Chance of rain</p>
              </div>
              <div className="text-center w-[5.5rem]">
                <p>2%</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-[5.8rem]">
                <PiSunLight size={25} />
                <p className="text-sm">UV Index</p>
              </div>
              <div className="text-center w-[5rem]">
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherVisuals;
