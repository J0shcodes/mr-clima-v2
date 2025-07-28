"use client"

import {
    useContext,
    createContext,
    SetStateAction,
    Dispatch,
    useState,
    useEffect,
} from "react"

import { useWeatherDataContext } from "./WeatherDataContext"
import { backgroundImageData } from "@/data/backgroundImageData"

const BackgroundImageContext = createContext<{
    backgroundImage: string
    setBackgroundImage: Dispatch<SetStateAction<string>>
}>({
    backgroundImage: "",
    setBackgroundImage: () => null,
})

export const BackgroundImageContextProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const [backgroundImage, setBackgroundImage] = useState<string>("")
    const [lastWeatherMain, setLastWeatherMain] = useState<string | null>(null)

    const { currentWeatherData } = useWeatherDataContext()

    const selectBackgroundImage = (imageArr: string[]): string => {
        const backgroundImage =
            imageArr[Math.floor(Math.random() * imageArr.length)]

        return backgroundImage
    }

    useEffect(() => {
        if (!currentWeatherData) return

        const weatherMain = currentWeatherData.weather[0].main.toLowerCase()

        if (weatherMain === lastWeatherMain) return
        setLastWeatherMain(weatherMain)

        let selectedImage = ""

        if (["clouds", "cloudy"].includes(weatherMain)) {
            selectedImage = selectBackgroundImage(backgroundImageData.clouds)
        } else if (
            ["rain", "rainy", "rainfall", "showers"].includes(weatherMain)
        ) {
            selectedImage = selectBackgroundImage(backgroundImageData.rain)
        } else if (["sunny", "sunshine", "sunlight"].includes(weatherMain)) {
            selectedImage = selectBackgroundImage(backgroundImageData.sunshine)
        } else if (weatherMain === "haze") {
            selectedImage = selectBackgroundImage(backgroundImageData.haze)
        } else if (["thunder", "thunderstorm"].includes(weatherMain)) {
            selectedImage = selectBackgroundImage(backgroundImageData.thunder)
        } else if (weatherMain === "snow") {
            selectedImage = selectBackgroundImage(backgroundImageData.snow)
        } else if (weatherMain === "clear") {
            selectedImage = selectBackgroundImage(backgroundImageData.clear)
        } else {
            selectedImage =
                "https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg"
        }

        setBackgroundImage(selectedImage)
    }, [currentWeatherData, lastWeatherMain])

    return (
        <BackgroundImageContext.Provider
            value={{ backgroundImage, setBackgroundImage }}
        >
            {children}
        </BackgroundImageContext.Provider>
    )
}

export const useBackgroundImage = () => useContext(BackgroundImageContext)
