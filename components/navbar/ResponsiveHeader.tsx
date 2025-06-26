"use client"

import { useEffect, useRef } from "react"
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineSearch } from "react-icons/ai"

import { useLocationContext } from "@/context/LocationContext"
import HamburgerMenu from "./HamburgerMenu"
import { useClimaGlobalContext } from "@/context/ClimaGlobalContext"

const ResponsiveHeader = ({ session }: { session: string | null }) => {
    const { setShowHamburgerMenu } = useClimaGlobalContext()

    const lastFetchedCoords = useRef<{
        lat: number | null
        lon: number | null
    }>({ lat: null, lon: null })

    const { coordinates, userLocation } = useLocationContext()

    // const fetchUserLocation = async (latitude: number, longitude: number) => {
    //     try {
    //         const response = await fetch(
    //             `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
    //         )
    //         const data = await response.json()
    //         console.log(data)
    //         setUserLocation(
    //             `${data.results[0].city}, ${data.results[0].country}`,
    //         )
    //     } catch (error) {
    //         setUserLocation("Location not available")
    //     }
    // }

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

        // fetchUserLocation(latitude, longitude)
    }, [coordinates])

    return (
        <div className="flex justify-between rounded-xl px-2.5 py-3 text-[#222d3e] dark:text-text-dark md:hidden">
            <section className="flex w-[30%] flex-col justify-center">
                <div className="flex justify-between">
                    {/* <Link
                        href="/dashboard"
                        className="text-lg font-bold italic text-[#3391ff]"
                    >
                        Mr. Clima
                    </Link> */}
                    {/* <IoIosNotificationsOutline /> */}
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between gap-1">
                            <div className="flex self-center">
                                <CiLocationOn />
                            </div>
                            <p className="text-xs">{userLocation}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex w-[45%] flex-col justify-center">
                <div className="relative w-full">
                    <div className="absolute left-2.5 top-[30%]">
                        <AiOutlineSearch />
                    </div>
                    <input
                        type="text"
                        className="w-full rounded-md border border-solid border-[#c8cbd0] px-7 py-3 text-sm outline-none dark:bg-transparent"
                        placeholder="Search Location"
                    />
                </div>
            </section>
            {/* <section className="flex w-[20%] justify-between">
                <button
                    className="flex w-[100px] cursor-pointer flex-col justify-center rounded-md bg-background-dark px-4 dark:bg-white"
                    onClick={toggleThemeHandler}
                >
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center">
                            {isDarkTheme ? (
                                <BsBrightnessHighFill color="black" />
                            ) : (
                                <BsBrightnessHigh color="white" />
                            )}
                        </div>
                        <p className="font-semibold text-white dark:text-[#262630]">
                            {isDarkTheme ? "Light" : "Dark"}
                        </p>
                    </div>
                </button>
                <div className="my-auto text-xs">Welcome Jane Doe</div>
                {!userSessionId ? (
                    <Link href="/auth/signin">Sign In</Link>
                ) : (
                    <button className="text-sm" onClick={handleSignOut}>
                        Sign Out
                    </button>
                )}
            </section> */}
            <button
                className="flex flex-col gap-y-1.5 self-center"
                onClick={() => setShowHamburgerMenu(true)}
            >
                <div className="h-[1px] w-6 bg-black dark:bg-white" />
                <div className="h-[1px] w-6 bg-black dark:bg-white" />
                <div className="h-[1px] w-6 bg-black dark:bg-white" />
            </button>
            <HamburgerMenu session={session} />
        </div>
    )
}

export default ResponsiveHeader
