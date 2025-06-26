"use client"

import { useEffect, useState, useRef } from "react"
import { CiLocationOn } from "react-icons/ci"

import { useLocationContext } from "@/context/LocationContext"
import CurrentWeatherDetails from "@/components/weather/CurrentWeatherDetails"
import WeatherNews from "@/components/weather/WeatherNews"
import Forecast from "@/components/weather/forecast/Forecast"
import { useWeatherDataContext } from "@/context/WeatherDataContext"

const Dashboard = () => {
    const [currentForecastTab, setCurrentForecastTab] = useState<
        "hourly" | "daily"
    >("hourly")
    const lastFetchedCoords = useRef<{
        lat: number | null
        lon: number | null
    }>({ lat: null, lon: null })

    const { coordinates, userLocationName, setUserLocationName } =
        useLocationContext()

    const fetchUserLocation = async (latitude: number, longitude: number) => {
        try {
            const response = await fetch(
                `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
            )
            const data = await response.json()
            setUserLocationName(data.results[0].state)
        } catch (error) {
            setUserLocationName("Location not available")
        }
    }

    useEffect(() => {
        if (!coordinates) return
        const { latitude, longitude } = coordinates

        // Prevent redundant API calls if location hasn't changed significantly
        if (
            lastFetchedCoords.current.lat === latitude &&
            lastFetchedCoords.current.lon
        ) {
            return
        }

        lastFetchedCoords.current = { lat: latitude, lon: longitude }

        fetchUserLocation(latitude, longitude)
    }, [coordinates])

    const { currentWeatherData } = useWeatherDataContext()

    const formatDate = (timestamp: number): string => {
        const date = new Date(timestamp * 1000)

        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
        }

        const formattedDate = date
            .toLocaleDateString("en-US", options)
            .replace(",", "")
            .replace(" ", " | ")

        return formattedDate
    }

    return (
        <div className="w-[100%] flex-grow text-white">
            <div className="space-y-6 px-2.5 py-6 md:px-4">
                <section>
                    <section className="flex gap-1 text-2xl">
                        <CiLocationOn size={30} />
                        <div>{userLocationName}</div>
                    </section>
                    <section className="mt-8">
                        <section className="mt-8 text-4xl">
                            {currentWeatherData!.weather[0].main}
                        </section>
                        <section className="mt-20 space-y-1">
                            <div className="text-4xl font-semibold">
                                {currentWeatherData!.temp}
                                <span>&deg;C</span>
                            </div>
                            <div>{formatDate(currentWeatherData!.dt)}</div>
                        </section>
                    </section>
                </section>
                <section className="grid-row-4 grid-flow-col gap-x-2.5 gap-y-6 space-y-6 md:space-y-0 lg:grid">
                    <WeatherNews />
                    <Forecast
                        currentForecastTab={currentForecastTab}
                        setCurrentForecastTab={setCurrentForecastTab}
                    />
                    <CurrentWeatherDetails
                        currentForecastTab={currentForecastTab}
                    />
                </section>
            </div>
        </div>
    )
}

export default Dashboard
