"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import Toggler from "./toggler";
import fetchWeatherInfo from "@/api/weatherInfo";

const HeaderComponents = () => {
  const [time, setTime] = useState<string>("");
  const [searchedlocation, setSearchedLocation] = useState<string>("")

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
    console.log(searchedlocation)
    fetchWeatherInfo(searchedlocation)
  }

  return (
    <header className="">
      <div className="flex justify-between px-12 md:pr-4 py-6">
        <div className="relative mt-[1.4rem]">
          <div className="absolute top-[-3.3rem] left-[-3.1rem]">
            <Image src="/icons/cloud&sun.png" alt="" width={70} height={70} />
          </div>
          <h1 className="text-3xl md:text-xl">Mr. Clima</h1>
          <p className="text-end text-sm">{time}</p>
        </div>
        <form className="relative mt-8 md:mt-6" onSubmit={handleLocationSearch}>
          <div className="text-[#6b6969] absolute left-[1rem] top-1 w-fit">
            <FaSearch size={35} />
          </div>
          <input
            type="search"
            placeholder="Search location..."
            className="rounded-xl pl-16 pr-5 py-2 w-[31.25rem] md:w-[25rem] sm:w-[18rem] bg-[#d9d9d9] text-lg text-[#6b6969] outline-none"
            onChange={(e) => setSearchedLocation(e.target.value)}
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
