import { useState } from "react"

const Forecast = () => {
    const [currentForecastTab, setCurrentForecastTab] = useState<
        "today" | "tomorrow" | "10 days"
    >("tomorrow")
    return (
        <section className="col-span-5 h-[710px] rounded-lg bg-white px-4 pb-7 pt-5 dark:bg-background-dark dark:text-text-dark">
            <section className="flex justify-between">
                <div className="flex w-2/4 justify-between text-sm">
                    <button
                        className={`${currentForecastTab === "today" ? "border-b-2 border-solid border-b-black dark:border-b-white dark:font-semibold" : "opacity-60"} pb-1`}
                        onClick={() => setCurrentForecastTab("today")}
                    >
                        Today
                    </button>
                    <button
                        className={`${currentForecastTab === "tomorrow" ? "border-b-2 border-solid border-b-black dark:border-b-white dark:font-semibold" : "opacity-60"} pb-1`}
                        onClick={() => setCurrentForecastTab("tomorrow")}
                    >
                        Tomorrow
                    </button>
                    <button
                        className={`${currentForecastTab === "10 days" ? "border-b-2 border-solid border-b-black dark:border-b-white dark:font-semibold" : "opacity-60"} pb-1`}
                        onClick={() => setCurrentForecastTab("10 days")}
                    >
                        10 Days
                    </button>
                </div>
                <button className="rounded-lg bg-[#0c182a] px-4 py-2 text-sm text-white dark:bg-[#3391ff]">
                    See Monthly Cast
                </button>
            </section>
            <section className="mt-12 h-4/5 space-y-5 overflow-y-scroll">
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between border-b border-solid px-6 pb-5">
                    <div className="flex justify-between gap-x-4">
                        <div>Icons</div>
                        <div>
                            <p className="text-sm">1AM</p>
                            <p className="font-semibold">Mostly Cloudy</p>
                        </div>
                    </div>
                    <div className="w-[1px] bg-[#e5e7eb]"></div>
                    <div className="flex justify-between gap-x-8">
                        <div className="text-3xl font-bold">
                            12
                            <sup className="text-sm font-normal opacity-80">
                                &deg;C
                            </sup>
                        </div>
                        <div className="text-sm opacity-70">
                            <p>Wind: 120km</p>
                            <p>Humidity: 59%</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Forecast
