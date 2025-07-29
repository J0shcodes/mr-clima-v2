"use client"

import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react"

const LocationContext = createContext<{
    coordinates: { latitude: number; longitude: number } | null
    userLocation: string
    setUserLocation: Dispatch<SetStateAction<string>>
    userLocationName: string
    setUserLocationName: Dispatch<SetStateAction<string>>
    error: string | null
}>({
    coordinates: null,
    error: null,
    userLocation: "",
    setUserLocation: () => {},
    userLocationName: "",
    setUserLocationName: () => {},
})

export const LocationContextProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const [coordinates, setCoordinates] = useState<{
        latitude: number
        longitude: number
    } | null>(null)
    const [userLocation, setUserLocation] = useState<string>("")
    const [userLocationName, setUserLocationName] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    setCoordinates({ latitude, longitude })
                },
                (err) => {
                    console.error(err.message)
                    setError("Geolocation permission denied")
                    fetchLocationByIp()
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
            )
        } else {
            fetchLocationByIp()
        }
    }, [])

    const fetchLocationByIp = async () => {
        try {
            const response = await fetch(
                `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`,
            )

            const data = await response.json()
            const { loc } = data
            if (loc) {
                const [latitude, longitude] = loc.split(",").map(Number)
                setCoordinates({ latitude, longitude })
            } else {
                throw new Error()
            }
        } catch (err) {
            setError("Failed to fetch location by IP")
            console.error(err)
        }
    }

    return (
        <LocationContext.Provider
            value={{
                coordinates,
                error,
                userLocation,
                setUserLocation,
                userLocationName,
                setUserLocationName,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export const useLocationContext = () => useContext(LocationContext)
