"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import Toggler from "./toggler";
import fetchWeatherInfo from "@/api/weatherInfo";

const HeaderComponents = () => {
  const [time, setTime] = useState<string>("");
  const [location, setLocation] = useState<string>("")

  const headerProps = {
    toggled: false,
  };

  const getCurrentTime = () => {
    const today = new Date();
    const am_pmArray = today.toLocaleTimeString().split(" ");
    const am_pm = am_pmArray[1];

    const hour = today.getHours();
    const minute = String(today.getMinutes()).padStart(2, "0");

    setTime(`${hour}:${minute} ${am_pm}`);
  };

  useEffect(() => {
    getCurrentTime();
  });

  setInterval(getCurrentTime, 60000);

  const handleLocationSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(location)
    fetchWeatherInfo(location)
  }

  return (
    <header className="">
      <div className="flex justify-between px-12 py-6">
        <div className="relative mt-[1.8rem]">
          <div className="absolute top-[-3.9rem] left-[-3.5rem]">
            <Image src="/icons/cloud&sun.png" alt="" width={80} height={80} />
          </div>
          <h1 className="text-3xl">Mr. Clima</h1>
          <p className="text-end text-sm">{time}</p>
        </div>
        <form className="relative mt-8" onSubmit={handleLocationSearch}>
          <div className="text-[#6b6969] absolute left-[1rem] top-1 w-fit">
            <FaSearch size={35} />
          </div>
          <input
            type="search"
            placeholder="Search location..."
            className="rounded-xl pl-16 pr-5 py-2 w-[31.25rem] bg-[#d9d9d9] text-lg text-[#6b6969] outline-none"
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </div>
      {/* <div>
        <div>
          <Toggler toggled={false} />
        </div>
        <div className="text-center w-full relative mt-8">
          <div className="text-[#6b6969] absolute left-[31rem] top-1 w-fit">
            <FaSearch size={35} />
          </div>
          <input
            type="search"
            placeholder="Search location..."
            className="rounded-xl pl-16 pr-5 py-2 w-[31.25rem] bg-[#d9d9d9] text-lg text-[#6b6969] outline-none"
          />
        </div>
      </div> */}
    </header>
  );
};

export default HeaderComponents;