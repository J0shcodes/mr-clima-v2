import { HourlyWeather } from "./hourlyWeather"
import { DailyWeather } from "./dailyWeather"

export interface WeatherData {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: {
        dt: number
        sunrise: number
        sunset: number
        temp: number
        feels_like: number
        pressure: number
        humidity: number
        dew_point: number
        uvi: number
        clouds: number
        visibility: number
        wind_speed: number
        wind_deg: number
        wind_gust: number
        weather: {
            id: number
            main: string
            description: string
            icon: string
        }[]
    }
    minutely: {
        dt: number
        precipitation: number
    }[]
    hourly: HourlyWeather[]
    daily: DailyWeather[]
    alerts: {
        sender_name: string
        event: string
        start: number
        end: number
        description: string
        tags: []
    }[]
}
