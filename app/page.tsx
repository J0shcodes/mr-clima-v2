"use client";

import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsThermometerHalf } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectCreative,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import WeatherVisuals from "@/components/Weather"
import WeatherCharts from "@/components/Charts";

export default function Home() {
  return (
    <main className="py-8">
      <WeatherVisuals/>
      {/* <WeatherCharts/> */}
    </main>
  );
}
