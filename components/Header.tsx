"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import Toggler from "./toggler";

const HeaderComponents = () => {
  const [time, setTime] = useState("");

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
    console.log(time);
  };

  useEffect(() => {
    getCurrentTime();
  });

  setInterval(getCurrentTime, 60000);

  return (
    <header>
      <div className="flex justify-between px-12 py-6">
        <div className="relative mt-[1.8rem]">
          <div className="absolute top-[-3.9rem] left-[-3.5rem]">
            <Image src="/icons/cloud&sun.png" alt="" width={80} height={80} />
          </div>
          <h1 className="text-5xl">Mr. Clima</h1>
          <p className="text-end text-sm">{time}</p>
        </div>
        <div className="w-[37.04rem] flex flex-col justify-center">
          <ul className="flex justify-between text-[#eee] text-2xl">
            <li className="">Today</li>
            <li>Tommorrow</li>
            <li>Monthly Forecast</li>
          </ul>
        </div>
      </div>
      <div>
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
      </div>
    </header>
  );
};

export default HeaderComponents;
