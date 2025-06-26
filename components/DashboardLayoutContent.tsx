"use client"

import React from "react"

import { useWeatherDataContext } from "@/context/WeatherDataContext"
import { useBackgroundImage } from "@/context/BackgroundImageContext"

const DashboardLayoutContent = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const { currentWeatherData } = useWeatherDataContext()
    const { backgroundImage } = useBackgroundImage()

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {currentWeatherData ? (
                <div className="pb-20 lg:h-screen">{children}</div>
            ) : (
                <div className="flex h-screen items-center justify-center text-xs text-white">
                    fetching weather data...
                </div>
            )}
        </div>
    )
}

export default DashboardLayoutContent
