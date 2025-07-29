"use client"

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
    useCallback,
    useRef,
} from "react"

import { useLocationContext } from "./LocationContext"
import { CurrentWeatherData } from "@/types/weatherData/currentWeather"
import { WeatherData } from "@/types/weatherData/WeatherData"
import { DailyWeatherData } from "@/types/weatherData/dailyWeather"
import { HourlyWeatherData } from "@/types/weatherData/hourlyWeather"

const WeatherDataContext = createContext<{
    currentWeatherData: CurrentWeatherData | null
    setCurrentWeatherData: Dispatch<SetStateAction<CurrentWeatherData | null>>
    dailyWeatherData: DailyWeatherData[] | null
    setDailyWeatherData: Dispatch<SetStateAction<DailyWeatherData[] | null>>
    hourlyWeatherData: HourlyWeatherData[] | null
    setHourlyWeatherData: Dispatch<SetStateAction<HourlyWeatherData[] | null>>
    error: string | null
    setError: Dispatch<SetStateAction<string | null>>
}>({
    currentWeatherData: null,
    setCurrentWeatherData: () => null,
    dailyWeatherData: null,
    setDailyWeatherData: () => null,
    hourlyWeatherData: null,
    setHourlyWeatherData: () => null,
    error: null,
    setError: () => {},
})

export const WeatherDataContextProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const [currentWeatherData, setCurrentWeatherData] =
        useState<CurrentWeatherData | null>(null)
    const [dailyWeatherData, setDailyWeatherData] = useState<
        DailyWeatherData[] | null
    >(null)
    const [hourlyWeatherData, setHourlyWeatherData] = useState<
        HourlyWeatherData[] | null
    >(null)
    const [error, setError] = useState<string | null>(null)
    // const [weatherSource, setWeatherSource] = useState<"geolo">

    const lastFetchedCoords = useRef<{
        lat: number | null
        lon: number | null
    }>({ lat: null, lon: null })

    const { userLocation, coordinates } = useLocationContext()
    const baseUrl = "https://api.openweathermap.org/"

    const fetchWeatherData = useCallback(async (lat?: number, lng?: number) => {
        const endpoint = `${baseUrl}data/3.0/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`

        try {
            const response = await fetch(endpoint)

            if (!response.ok) {
                throw new Error("Failed to fetch weather data")
            }

            const weatherReport: WeatherData = await response.json()

            const currentWeatherReport = weatherReport.current

            setCurrentWeatherData(currentWeatherReport)
            setHourlyWeatherData(weatherReport.hourly)
            setDailyWeatherData(weatherReport.daily)

            setError(null)
        } catch (error) {
            console.error(error)
            setCurrentWeatherData(null)
            setError("Failed to fetch current weather reports")
        }
    }, [])

    useEffect(() => {
        if (coordinates) {
            const { latitude, longitude } = coordinates

            if (
                lastFetchedCoords.current.lat === latitude &&
                lastFetchedCoords.current.lon
            ) {
                return
            }

            lastFetchedCoords.current = { lat: latitude, lon: longitude }

            fetchWeatherData(latitude, longitude)
        } else {
            return
        }
    }, [userLocation, coordinates, fetchWeatherData])

    return (
        <WeatherDataContext.Provider
            value={{
                currentWeatherData,
                setCurrentWeatherData,
                dailyWeatherData,
                setDailyWeatherData,
                hourlyWeatherData,
                setHourlyWeatherData,
                error,
                setError,
            }}
        >
            {children}
        </WeatherDataContext.Provider>
    )
}

export const useWeatherDataContext = () => useContext(WeatherDataContext)
