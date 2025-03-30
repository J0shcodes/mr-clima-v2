import { useState, useEffect } from "react"

const Clock = () => {
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        const formatTime = () => {
            const now = new Date()

            let hours = now.getHours()
            const ampm = hours >= 12 ? "PM" : "AM"
            hours = hours % 12
            hours = hours ? hours : 12

            const minutes = now.getMinutes().toString().padStart(2, "0")

            return `${hours}:${minutes}${ampm}`
        }

        setTime(formatTime())

        const timeId = setInterval(() => {
            setTime(formatTime())
        }, 1000)

        return () => {
            clearInterval(timeId)
        }
    }, [])

    return <div className="mt-1 font-semibold">{time}</div>
}

export default Clock
