import { useWeatherDataContext } from "@/context/WeatherDataContext"

const DailyForecast = () => {
    const { dailyWeatherData } = useWeatherDataContext()

    const formatDate = (dt: number): string => {
        const date = new Date(dt * 1000)

        return date.toLocaleDateString("en-US", {
            weekday: "long",
        })
    }

    const calculateTempAverage = (temp: {
        day: number
        eve: number
        max: number
        min: number
        morn: number
        night: number
    }): number => {
        return Math.round((temp.day + temp.eve) / 2)
    }

    return (
        <div className="space-y-4">
            <h2 className="text-lg">Daily Forecast</h2>
            <div className="overflow-x-auto pb-1.5">
                <div className="min-w-[1000px]">
                    <div className="flex justify-between">
                        {dailyWeatherData?.map((dailyData) => (
                            <div key={dailyData.dt}>
                                <div>
                                    <p>{formatDate(dailyData.dt)}</p>
                                    <p>
                                        {calculateTempAverage(dailyData.temp)}
                                        &deg;C
                                    </p>
                                </div>
                                <div>{dailyData.weather[0].description}</div>
                            </div>
                        ))}
                        {/* <div className="">
                            <div className="">
                                <p>Monday</p>
                                <p>26&deg;C</p>
                            </div>
                            <div className="">
                                <p>Sunny</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p>Tuesday</p>
                                <p>28&deg;C</p>
                            </div>
                            <div className="">
                                <p>Partly Cloudy</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p>Tuesday</p>
                                <p>28&deg;C</p>
                            </div>
                            <div className="">
                                <p>Partly Cloudy</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p>Tuesday</p>
                                <p>28&deg;C</p>
                            </div>
                            <div className="">
                                <p>Partly Cloudy</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyForecast
