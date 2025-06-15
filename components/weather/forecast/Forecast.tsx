import { Dispatch, FC, SetStateAction } from "react"

import HourlyForecast from "./HourlyForecast"
import DailyForecast from "./DailyForecast"

interface ForecastProps {
    currentForecastTab: "hourly" | "daily"
    setCurrentForecastTab: Dispatch<SetStateAction<"hourly" | "daily">>
}

const Forecast: FC<ForecastProps> = ({
    currentForecastTab,
    setCurrentForecastTab,
}) => {
    // const [currentForecastTab, setCurrentForecastTab] = useState<
    //     "hourly" | "daily"
    // >("hourly")

    return (
        <section className="col-span-2 row-span-2 rounded-[40px] bg-[rgba(4,51,69,0.2)] px-7 pb-6 pt-4 shadow-lg backdrop-blur-[10px]">
            {/* <h2>Forecast</h2> */}
            <section className="space-x-6">
                {/* <div className="flex w-2/4 justify-between text-sm"> */}
                <button
                    className={`${currentForecastTab === "hourly" ? "border-b-2 border-solid border-b-white" : "opacity-60"} pb-1`}
                    onClick={() => setCurrentForecastTab("hourly")}
                >
                    Hourly
                </button>
                <button
                    className={`${currentForecastTab === "daily" ? "border-b-2 border-solid border-b-white " : "opacity-60"} pb-1`}
                    onClick={() => setCurrentForecastTab("daily")}
                >
                    Daily
                </button>
                {/* </div> */}
            </section>
            <section className="mt-6">
                {currentForecastTab === "daily" ? (
                    <DailyForecast />
                ) : (
                    <HourlyForecast />
                )}
            </section>
        </section>
    )
}

export default Forecast
