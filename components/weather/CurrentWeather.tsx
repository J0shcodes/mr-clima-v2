// import Image from "next/image"
// import { WiStrongWind } from "react-icons/wi"
// import { WiHumidity } from "react-icons/wi"
// import { AiOutlineEye } from "react-icons/ai"
// import { TbUvIndex } from "react-icons/tb"

// import { useWeatherDataContext } from "@/context/WeatherDataContext"

// import Clock from "../Clock"

// // const weatherData = [
// //     {
// //         text: "Air Quality",
// //         value: "156",
// //         icon: <TiWeatherWindyCloudy size={25} />,
// //     },
// //     {
// //         text: "Wind",
// //         value: "1 mph",
// //         icon: <WiStrongWind size={25} />,
// //     },
// //     {
// //         text: "Humidity",
// //         value: "54%",
// //         icon: <WiHumidity size={25} />,
// //     },
// //     {
// //         text: "Visibility",
// //         value: "3 mi",
// //         icon: <AiOutlineEye size={25} />,
// //     },
// //     // {
// //     //     text: "Pressure",
// //     //     value: "27.65 in",
// //     // },
// //     {
// //         text: "UV Index",
// //         value: "5.50 UV",
// //         icon: <TbUvIndex size={25} />,
// //     },
// // ]

// const CurrentWeather = () => {
//     const { error, currentWeatherData } = useWeatherDataContext()

//     console.log(error, currentWeatherData)

//     return (
//         <section className="col-span-7 h-full space-y-6">
//             <section className="rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark">
//                 <div className="flex justify-between text-sm">
//                     <div>Current Weather</div>
//                     <select
//                         name=""
//                         id=""
//                         className="cursor-pointer outline-none dark:bg-transparent"
//                     >
//                         <option className="text-black">Fahrenheit</option>
//                         <option className="text-black">Celsius</option>
//                     </select>
//                 </div>
//                 <Clock />
//                 <div className="mt-9">
//                     <div className="flex w-[40%] justify-between">
//                         {/* <div>Icon</div> */}
//                         <Image
//                             src={currentWeatherData?.current.weather_icons[0]}
//                             alt="weather icon"
//                             width={50}
//                             height={50}
//                         />
//                         <div className="text-3xl font-bold">
//                             {currentWeatherData?.current.temperature}
//                             <sup className="text-base font-normal opacity-60">
//                                 &deg;F
//                             </sup>
//                         </div>
//                         <div className="text-sm">
//                             <p>
//                                 {
//                                     currentWeatherData?.current
//                                         .weather_descriptions[0]
//                                 }
//                             </p>
//                             {/* <p>
//                                 Feels like 35<sup>&deg;</sup>
//                             </p> */}
//                         </div>
//                     </div>
//                     {/* <div className="mt-8">
//                         There will be sunny skies. The high will be 35
//                         <sup>&deg;</sup>
//                     </div> */}
//                 </div>
//             </section>
//             <section className="grid grid-cols-12 gap-3 sm:gap-6">
//                 {/* <div
//                     // key={index}
//                     className="col-span-6 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark lg:col-span-4"
//                 >
//                     <TiWeatherWindyCloudy size={25} />
//                     <div>
//                         <p className="text-sm">Air Quality</p>
//                         <p className="font-bold md:text-lg">
//                             {
//                                 currentWeatherData?.current.air_quality
//                                     .gb_defra_index
//                             }
//                         </p>
//                     </div>
//                 </div> */}

//                 <div
//                     // key={index}
//                     className="col-span-6 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark lg:col-span-4"
//                 >
//                     <WiStrongWind size={25} />
//                     <div>
//                         <p className="text-sm">Wind</p>
//                         <p className="font-bold md:text-lg">
//                             {currentWeatherData?.current.wind_speed} mph
//                         </p>
//                     </div>
//                 </div>

//                 <div
//                     // key={index}
//                     className="col-span-6 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark lg:col-span-4"
//                 >
//                     <WiHumidity size={25} />
//                     <div>
//                         <p className="text-sm">Humidity</p>
//                         <p className="font-bold md:text-lg">
//                             {currentWeatherData?.current.humidity} %
//                         </p>
//                     </div>
//                 </div>

//                 <div
//                     // key={index}
//                     className="col-span-6 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark lg:col-span-4"
//                 >
//                     <AiOutlineEye size={25} />
//                     <div>
//                         <p className="text-sm">Visibility</p>
//                         <p className="font-bold md:text-lg">
//                             {currentWeatherData?.current.visibility} mi
//                         </p>
//                     </div>
//                 </div>

//                 <div
//                     // key={index}
//                     className="col-span-6 flex gap-x-3 rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark lg:col-span-4"
//                 >
//                     <TbUvIndex size={25} />
//                     <div>
//                         <p className="text-sm">UV Index</p>
//                         <p className="font-bold md:text-lg">
//                             {currentWeatherData?.current.uv_index} UV
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <section className="rounded-lg bg-white px-4 pb-7 pt-5 text-text-dark dark:bg-background-dark">
//                 <h2 className="text-sm">Sun & Moon Summary</h2>
//                 <div className="mt-5 space-y-3">
//                     <div className="flex justify-between">
//                         <div className="flex gap-3">
//                             <div>Icon</div>
//                             <div className="space-y-1">
//                                 <p className="text-xs">Air Quality</p>
//                                 <p className="font-bold">156</p>
//                             </div>
//                         </div>
//                         <div className="flex gap-x-8">
//                             <div className="text-sm">
//                                 <div>Icon</div>
//                                 <div>Sunrise</div>
//                                 <div className="font-bold">5:43AM</div>
//                             </div>
//                             <div>Progress bar</div>
//                             <div className="text-sm">
//                                 <div>Icon</div>
//                                 <div>Sunrise</div>
//                                 <div className="font-bold">5:43AM</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex justify-between">
//                         <div className="flex gap-3">
//                             <div>Icon</div>
//                             <div className="space-y-1">
//                                 <p className="text-xs">Air Quality</p>
//                                 <p className="font-bold">156</p>
//                             </div>
//                         </div>
//                         <div className="flex gap-x-8">
//                             <div className="text-sm">
//                                 <div>Icon</div>
//                                 <div>Sunrise</div>
//                                 <div className="font-bold">5:43AM</div>
//                             </div>
//                             <div>Progress bar</div>
//                             <div className="text-sm">
//                                 <div>Icon</div>
//                                 <div>Sunrise</div>
//                                 <div className="font-bold">5:43AM</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </section>
//     )
// }

// export default CurrentWeather
