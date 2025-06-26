"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"

import { removeSession } from "@/actions/auth-actions"
import { useUserSession } from "@/hooks/useUserSession"
import { useAuth } from "@/context/AuthUserContext"
import { useLocationContext } from "@/context/LocationContext"
import Clock from "../Clock"
import { GeoCodeData } from "@/types/geoCodeData"
import { WeatherData } from "@/types/weatherData/WeatherData"
import { useWeatherDataContext } from "@/context/WeatherDataContext"
import useFirebaseAuth from "@/hooks/useFirebaseAuth"

const Header = ({ session }: { session: string | null }) => {
    const [searchInput, setSearchInput] = useState<string>("")
    const lastFetchedCoords = useRef<{
        lat: number | null
        lon: number | null
    }>({ lat: null, lon: null })

    const userSessionId = useUserSession(session)
    const { signOut } = useAuth()
    const { coordinates, setUserLocationName } = useLocationContext()
    const { setCurrentWeatherData, setDailyWeatherData, setHourlyWeatherData } =
        useWeatherDataContext()

    const { authUser } = useFirebaseAuth()

    const baseUrl = "https://api.openweathermap.org/"

    const handleSignOut = async () => {
        signOut()
        await removeSession()
    }

    const capitalizeSearchInput = (searchInput: string): string => {
        return searchInput
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    const decodeLocationFromLocationName = async (): Promise<{
        lat: number
        lng: number
    }> => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${capitalizeSearchInput(searchInput)}&limit=1&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`,
            )

            if (!response.ok)
                throw new Error(
                    "Failed to fetch geocode data. Make sure location input is correct",
                )
            const geoCodeData: GeoCodeData[] = await response.json()

            setUserLocationName(geoCodeData[0].name)

            return { lat: geoCodeData[0].lat, lng: geoCodeData[0].lon }
        } catch (error) {
            console.error("Error decoding location:", error)
            return { lat: 0, lng: 0 }
        }
    }

    const fetchWeatherDataOnUserSearch = async (
        e: FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault()
        if (!searchInput) return

        try {
            const { lat, lng } = await decodeLocationFromLocationName()

            if (lat === 0 && lng === 0)
                throw new Error("Invalid location input")

            const endpoint = `${baseUrl}data/3.0/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`

            const response = await fetch(endpoint)

            if (!response.ok) throw new Error("Failed to fetch weather data")

            const weatherReport: WeatherData = await response.json()

            setCurrentWeatherData(weatherReport.current)
            setHourlyWeatherData(weatherReport.hourly)
            setDailyWeatherData(weatherReport.daily)
        } catch (error) {
            console.error("Error fetching weather data:", error)
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
    }, [coordinates])

    return (
        <div className="flex justify-between px-4 py-2.5">
            <Link
                href="/dashboard"
                className="hidden self-center text-2xl font-bold italic text-[#3391ff] md:flex"
            >
                Mr. Clima v2
            </Link>
            <Link
                href="/dashboard"
                className="flex self-center text-lg font-bold italic text-[#3391ff] md:hidden"
            >
                Mr. Clima
            </Link>
            <div className="flex w-[50%] flex-col justify-center">
                <form
                    className="relative w-full"
                    onSubmit={fetchWeatherDataOnUserSearch}
                >
                    <button
                        className="absolute left-[1.8125rem] top-[30%]"
                        type="submit"
                    >
                        <AiOutlineSearch />
                    </button>
                    <input
                        type="text"
                        className="w-full rounded-md border border-solid border-[#c8cbd0] px-12 py-3 text-sm outline-none dark:bg-transparent md:px-[3.9375rem]"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </form>
            </div>
            <div className="flex gap-3">
                <div className="my-auto hidden text-sm text-white md:block">
                    Welcome {authUser?.name || "User"}
                </div>
                {!userSessionId ? (
                    <Link href="/auth/signin">Sign In</Link>
                ) : (
                    <button
                        className="text-sm text-white hover:text-white"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                )}
                <div className="my-auto hidden md:block">
                    <Clock />
                </div>
            </div>
        </div>
    )
}

export default Header
