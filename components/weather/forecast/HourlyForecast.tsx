import { useWeatherDataContext } from "@/context/WeatherDataContext"
import { HourlyWeatherData } from "@/types/weatherData/hourlyWeather"

const HourlyForecast = () => {
    const { hourlyWeatherData } = useWeatherDataContext()

    const formatTime = (dt: number): string => {
        const date = new Date(dt * 1000)

        const time = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        })

        return time
    }

    const formatHourlyData = (
        hourlyData: HourlyWeatherData[] | null,
    ): HourlyWeatherData[] => {
        if (!Array.isArray(hourlyData)) return []

        return hourlyData.slice(0, 16).filter((_, index) => index % 2 === 0)
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg">Hourly Forecast</h2>
            <div className="overflow-x-auto pb-1.5">
                <div className="min-w-[1000px]">
                    <div className="gri flex grid-cols-12 justify-between">
                        {formatHourlyData(hourlyWeatherData!).map(
                            (hourlyData) => (
                                <div key={hourlyData.dt} className="space-y-2">
                                    <div>
                                        <p>{formatTime(hourlyData.dt)}</p>
                                    </div>
                                    <div>
                                        <p>
                                            {hourlyData.weather[0].description}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p>{hourlyData.temp}&deg;C</p>
                                        <p>
                                            {Math.round(hourlyData.pop * 100)}%
                                        </p>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast
