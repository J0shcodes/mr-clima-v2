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
import { useGeolocated } from "react-geolocated";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import WeatherVisuals from "@/components/Weather";
import WeatherCharts from "@/components/Charts";
import { useEffect } from "react";

export default function Home() {
  // const getUserLocation = () => {
  //   navigator.geolocation
  // }
  // const userLocation = JSON.parse(window.localStorage.getItem("userLocation") || "[]")
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
    });
  const options = {
    enableHighAccuracy: true,
  };

  useEffect(() => {
    // if (isGeolocationAvailable) {
    //   if (isGeolocationEnabled) {
    //     console.log(coords)
    //     console.log(coords?.latitude);
    //     console.log(coords?.longitude);
    //     const lat = coords?.latitude;
    //     const long = coords?.longitude;
    //     window.localStorage.setItem("userLocation", `${lat},${long}`);
    //   } else {
    //     alert("Mr. Clima will like know location");
    //   }
    // } else {
    //   alert("Your browser doesn't support geolocation");
    // }

    const error = () => {
      throw new Error("Something went wrong while trying to get your location");
    };

    const success = (position: any) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      window.localStorage.setItem("userLocation", `${lat},${long}`);
      // console.log(window.localStorage.getItem("userLocation"));
    };

    try {
      if (!navigator.geolocation) {
        throw new Error("Your browser doesn't support the Geolocation API");
      } else {
        navigator.geolocation.watchPosition(success, error, options);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  });

  // if(!userLocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position.coords.longitude)
  //     console.log(position.coords.latitude)
  //   })
  // }

  return (
    <main className="py-8">
      <WeatherVisuals />
      {/* <WeatherCharts/> */}
    </main>
  );
}
