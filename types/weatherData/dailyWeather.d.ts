export interface DailyWeatherData {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    summary: string
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    feels_like: {
        day: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: {
        id: number
        main: string
        description: string
        icon: string
    }[]
    clouds: number
    pop: number
    rain: number
    uvi: number
}
