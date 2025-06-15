"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
// import { IoIosNotificationsOutline } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"

import { removeSession } from "@/actions/auth-actions"
import { useUserSession } from "@/hooks/useUserSession"
import { useAuth } from "@/context/AuthUserContext"
// import { useThemeContext } from "@/context/ThemeContext"
import { useLocationContext } from "@/context/LocationContext"
import Clock from "../Clock"
// import { BsBrightnessHigh } from "react-icons/bs";

const Header = ({ session }: { session: string | null }) => {
    // const [userLocation, setUserLocation] = useState<string>("")
    const lastFetchedCoords = useRef<{
        lat: number | null
        lon: number | null
    }>({ lat: null, lon: null })

    const userSessionId = useUserSession(session)
    const { signOut } = useAuth()
    // const { isDarkTheme, toggleThemeHandler } = useThemeContext()
    const { coordinates } = useLocationContext()

    // console.log(location)

    const handleSignOut = async () => {
        signOut()
        await removeSession()
    }

    // const fetchUserLocation = async (latitude: number, longitude: number) => {
    //     try {
    //         const response = await fetch(
    //             `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
    //         )
    //         const data = await response.json()
    //         console.log(data)
    //         setUserLocation(data.results[0].city)
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
        // <div className="hidden justify-between rounded-xl bg-white px-6 py-4 text-[#222d3e] dark:bg-background-dark dark:text-text-dark md:flex">
        //     <section className="flex w-[20%] flex-col justify-center">
        //         <div className="flex justify-between">
        //             <Link
        //                 href="/dashboard"
        //                 className="text-2xl font-bold italic text-[#3391ff]"
        //             >
        //                 Mr. Clima v2
        //             </Link>
        //             {/* <IoIosNotificationsOutline /> */}
        //             <div className="flex flex-col justify-center">
        //                 <div className="flex justify-between">
        //                     <div className="">
        //                         <CiLocationOn />
        //                     </div>
        //                     <p className="text-sm">{userLocation}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     <section className="flex w-[35%] flex-col justify-center">
        //         <div className="relative w-full">
        //             <div className="absolute left-[1.8125rem] top-[30%]">
        //                 <AiOutlineSearch />
        //             </div>
        //             <input
        //                 type="text"
        //                 className="w-full rounded-md border border-solid border-[#c8cbd0] px-[3.9375rem] py-3 text-sm outline-none dark:bg-transparent"
        //                 placeholder="Search Location"
        //             />
        //         </div>
        //     </section>
        //     <section className="flex w-[20%] justify-between">
        //         <button
        //             className="flex w-[100px] cursor-pointer flex-col justify-center rounded-md bg-background-dark px-4 dark:bg-white"
        //             onClick={toggleThemeHandler}
        //         >
        //             <div className="flex justify-between">
        //                 <div className="flex flex-col justify-center">
        //                     {isDarkTheme ? (
        //                         <BsBrightnessHighFill color="black" />
        //                     ) : (
        //                         <BsBrightnessHigh color="white" />
        //                     )}
        //                 </div>
        //                 <p className="font-semibold text-white dark:text-[#262630]">
        //                     {isDarkTheme ? "Light" : "Dark"}
        //                 </p>
        //             </div>
        //         </button>
        //         <div className="my-auto text-sm">Welcome Jane Doe</div>
        //         {!userSessionId ? (
        //             <Link href="/auth/signin">Sign In</Link>
        //         ) : (
        //             <button className="text-sm" onClick={handleSignOut}>
        //                 Sign Out
        //             </button>
        //         )}
        //     </section>
        // </div>
        <div className="flex justify-between px-4 py-2.5">
            {/* <div className="flex justify-between"> */}
            <Link
                href="/dashboard"
                className="flex self-center text-xl font-bold italic text-[#3391ff] md:text-2xl"
            >
                Mr. Clima v2
            </Link>
            {/* <IoIosNotificationsOutline /> */}
            {/* <div className="flex flex-col justify-center">
                    <div className="flex justify-between">
                        <div className="">
                            <CiLocationOn />
                        </div>
                        <p className="text-sm">{userLocation}</p>
                    </div>
                </div> */}
            {/* </div> */}
            <div className="flex w-[50%] flex-col justify-center">
                <div className="relative w-full">
                    <div className="absolute left-[1.8125rem] top-[30%]">
                        <AiOutlineSearch />
                    </div>
                    <input
                        type="text"
                        className="w-full rounded-md border border-solid border-[#c8cbd0] px-12 py-3 text-sm outline-none dark:bg-transparent md:px-[3.9375rem]"
                        placeholder="Search Location"
                    />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="my-auto hidden text-sm text-black md:block">
                    Welcome Jane Doe
                </div>
                {!userSessionId ? (
                    <Link href="/auth/signin">Sign In</Link>
                ) : (
                    <button
                        className="text-sm text-black hover:text-white"
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
