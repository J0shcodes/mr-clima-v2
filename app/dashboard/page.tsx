"use client"

import Image from "next/image"
import { WiStrongWind } from "react-icons/wi"
import { WiHumidity } from "react-icons/wi"
import { AiOutlineEye } from "react-icons/ai"
import { TbUvIndex } from "react-icons/tb"
import { TiWeatherWindyCloudy } from "react-icons/ti"

import { useAuth } from "@/context/AuthUserContext"
import Clock from "@/components/Clock"
import Forecast from "../Forecast"

const Dashboard = () => {
    const { loading } = useAuth()
    // const router = useRouter()

    // useEffect(() => {
    //     if (!authUser) router.push("/auth/signin")
    // }, [authUser, router])

    const weatherData = [
        {
            text: "Air Quality",
            value: "156",
            icon: <TiWeatherWindyCloudy size={25} />,
        },
        {
            text: "Wind",
            value: "1 mph",
            icon: <WiStrongWind size={25} />,
        },
        {
            text: "Humidity",
            value: "54%",
            icon: <WiHumidity size={25} />,
        },
        {
            text: "Visibility",
            value: "3 mi",
            icon: <AiOutlineEye size={25} />,
        },
        // {
        //     text: "Pressure",
        //     value: "27.65 in",
        // },
        {
            text: "UV Index",
            value: "5.50 UV",
            icon: <TbUvIndex size={25} />,
        },
    ]

    return (
        <div className="w-[100%] flex-grow text-[#222d3e]">
            {loading ? (
                <div>Loading...</div>
            ) : (
                // <section className="flex w-[90%] justify-between">
                //     <div className="">
                //         <button className="mr-3.5 text-xl font-medium">
                //             Today
                //         </button>
                //         <button className="mr-3.5 text-xl font-medium">
                //             Tomorrow
                //         </button>
                //         <button className="mb-1.5 mr-3.5 border-b border-solid border-b-[#222d36] text-xl font-medium">
                //             Next 7days
                //         </button>
                //     </div>
                //     <div className="flex items-center text-xl font-medium">
                //         Chance of Rain
                //     </div>
                // </section>
                <div className="grid grid-cols-12 gap-x-6">
                    <section className="col-span-7 h-full space-y-6">
                        <section className="rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark">
                            <div className="flex justify-between text-sm">
                                <div>Current Weather</div>
                                <select
                                    name=""
                                    id=""
                                    className="cursor-pointer outline-none dark:bg-transparent"
                                >
                                    <option className="text-black">
                                        Fahrenheit
                                    </option>
                                    <option className="text-black">
                                        Celsius
                                    </option>
                                </select>
                            </div>
                            <Clock />
                            <div className="mt-9">
                                <div className="flex w-[40%] justify-between">
                                    {/* <div>Icon</div> */}
                                    <Image
                                        src="assets/icons/sunny_cloudy.svg"
                                        alt="weather icon"
                                        width={50}
                                        height={50}
                                    />
                                    <div className="text-3xl font-bold">
                                        12
                                        <sup className="text-base font-normal opacity-60">
                                            &deg;F
                                        </sup>
                                    </div>
                                    <div className="text-sm">
                                        <p>Rainy</p>
                                        <p>
                                            Feels like 35<sup>&deg;</sup>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    There will be sunny skies. The high will be
                                    35<sup>&deg;</sup>
                                </div>
                            </div>
                        </section>
                        <section className="grid grid-cols-12 gap-6">
                            {weatherData.map((data, index) => (
                                <div
                                    key={index}
                                    className="col-span-4 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark"
                                >
                                    <div>{data.icon}</div>
                                    <div>
                                        <p className="text-sm">{data.text}</p>
                                        <p className="text-lg font-bold">
                                            {data.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section className="rounded-lg bg-white px-4 pb-7 pt-5 text-text-dark dark:bg-background-dark">
                            <h2 className="text-sm">Sun & Moon Summary</h2>
                            <div className="mt-5 space-y-3">
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div>Icon</div>
                                        <div className="space-y-1">
                                            <p className="text-xs">
                                                Air Quality
                                            </p>
                                            <p className="font-bold">156</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-8">
                                        <div className="text-sm">
                                            <div>Icon</div>
                                            <div>Sunrise</div>
                                            <div className="font-bold">
                                                5:43AM
                                            </div>
                                        </div>
                                        <div>Progress bar</div>
                                        <div className="text-sm">
                                            <div>Icon</div>
                                            <div>Sunrise</div>
                                            <div className="font-bold">
                                                5:43AM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div>Icon</div>
                                        <div className="space-y-1">
                                            <p className="text-xs">
                                                Air Quality
                                            </p>
                                            <p className="font-bold">156</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-8">
                                        <div className="text-sm">
                                            <div>Icon</div>
                                            <div>Sunrise</div>
                                            <div className="font-bold">
                                                5:43AM
                                            </div>
                                        </div>
                                        <div>Progress bar</div>
                                        <div className="text-sm">
                                            <div>Icon</div>
                                            <div>Sunrise</div>
                                            <div className="font-bold">
                                                5:43AM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <Forecast />
                </div>
            )}
        </div>
    )
}

export default Dashboard
