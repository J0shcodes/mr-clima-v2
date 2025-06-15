import { CiClock2 } from "react-icons/ci"
import { FaThermometerThreeQuarters, FaWind } from "react-icons/fa"
import { FaDroplet } from "react-icons/fa6"
import { MdWbSunny } from "react-icons/md"

import Clock from "../Clock"
import { useWeatherDataContext } from "@/context/WeatherDataContext"
import { HourlyWeatherData } from "@/types/weatherData/hourlyWeather"
import { DailyWeatherData } from "@/types/weatherData/dailyWeather"

const CurrentWeatherDetails = ({
    currentForecastTab,
}: {
    currentForecastTab: "hourly" | "daily"
}) => {
    const { currentWeatherData, hourlyWeatherData, dailyWeatherData } =
        useWeatherDataContext()

    const calculateAveragePopData = (
        data: HourlyWeatherData[] | DailyWeatherData[],
    ): number => {
        if (!Array.isArray(data)) return 0

        const validData = data.filter((item) => typeof item.pop === "number")
        if (validData.length === 0) return 0

        const totalPop = validData.reduce((sum, item) => sum + item.pop, 0)
        return Math.round((totalPop / validData.length) * 100)
    }

    return (
        <div className="row-span-4 rounded-[40px] bg-[rgba(4,51,69,0.2)] px-7 pb-6 pt-4 shadow-lg backdrop-blur-[10px]">
            <h2 className="flex justify-center gap-1.5">
                <CiClock2 size={20} />
                <Clock />
            </h2>
            <div className="mt-6 space-y-3">
                <h2 className="text-lg">Air Conditions</h2>
                <div className="space-y-10">
                    <div className="flex gap-x-1">
                        <FaThermometerThreeQuarters size={25} />
                        <div className="space-y-1">
                            <p>Real Feel</p>
                            {currentWeatherData ? (
                                <p>{currentWeatherData.feels_like}&deg;C</p>
                            ) : (
                                <p>No data</p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-x-1">
                        <FaWind size={25} />
                        <div className="space-y-1">
                            <p>Wind</p>
                            <p>
                                {currentWeatherData
                                    ? `${currentWeatherData.wind_speed} km/hr`
                                    : "No data"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-1">
                        <FaDroplet size={25} />
                        <div className="space-y-1">
                            <p>Chance Of Rain</p>
                            <p>
                                {currentForecastTab === "hourly"
                                    ? calculateAveragePopData(
                                          hourlyWeatherData!,
                                      )
                                    : calculateAveragePopData(
                                          dailyWeatherData!,
                                      )}
                                %
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-1">
                        <MdWbSunny size={25} />
                        <div className="space-y-1">
                            <p>UV Index</p>
                            <p>
                                {currentWeatherData
                                    ? currentWeatherData.uvi
                                    : "No data"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherDetails
