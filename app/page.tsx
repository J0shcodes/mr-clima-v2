"use client";

import { useEffect, useState } from "react";
import axios from "axios";
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

const NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN =
    process.env.NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;

export default function Home() {
  const [longitude, setLongitude] = useState<number>()
  const [latitude, setLatitude] = useState<number>()
  // const getUserLocation = () => {
  //   navigator.geolocation
  // }
  // const userLocation = JSON.parse(window.localStorage.getItem("userLocation") || "[]")

  // const setUserLocation = async (lat: number, long: number) => {
  //   try {
  //     const response = await axios.get(
  //       `https://us1.locationiq.com/v1/reverse?key=${NEXT_PUBLIC_LOCATION_IQ_ACCESS_TOKEN}&lat=${lat}&lon=${long}&format=json`
  //     );
  //     const address = response.data.address;
  //     console.log(address);

  //     if (address.town) {
  //       window.localStorage.setItem("location", JSON.stringify(address.town));
  //     }
  //     if (address.county) {
  //       window.localStorage.setItem("location", JSON.stringify(address.county));
  //     }
  //     if (address.city) {
  //       window.localStorage.setItem("location", JSON.stringify(address.city));
  //     }
  //     if (address.village) {
  //       window.localStorage.setItem("location", JSON.stringify(address.village));
  //     }

  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       console.log(error.code);
  //       alert("Something went wrong, could not get city name");
  //     }
  //   }
  // }

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
    });
  const options = {
    enableHighAccuracy: true,
  };

  // useEffect(() => {
  //   // if (isGeolocationAvailable) {
  //   //   if (isGeolocationEnabled) {
  //   //     console.log(coords)
  //   //     console.log(coords?.latitude);
  //   //     console.log(coords?.longitude);
  //   //     const lat = coords?.latitude;
  //   //     const long = coords?.longitude;
  //   //     window.localStorage.setItem("userLocation", `${lat},${long}`);
  //   //   } else {
  //   //     alert("Mr. Clima will like know location");
  //   //   }
  //   // } else {
  //   //   alert("Your browser doesn't support geolocation");
  //   // }

  //   const error = () => {
  //     throw new Error("Something went wrong while trying to get your location");
  //   };

  //   const success = (position: any) => {
  //     const lat = position.coords.latitude;
  //     const long = position.coords.longitude;
  //     setLatitude(lat)
  //     setLongitude(long)
  //     window.localStorage.setItem("userLocation", `${lat},${long}`);
  //     // setUserLocation(lat, long)
  //   };

  //   try {
  //     if (!navigator.geolocation) {
  //       throw new Error("Your browser doesn't support the Geolocation API");
  //     } else {
  //       navigator.geolocation.watchPosition(success, error, options);
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //   }
  // });

  // if(!userLocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position.coords.longitude)
  //     console.log(position.coords.latitude)
  //   })
  // }

  return (
    <main className="py-8">
      <WeatherVisuals  />
      {/* <WeatherCharts/> */}
    </main>
  );
}
