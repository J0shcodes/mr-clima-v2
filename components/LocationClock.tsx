const LocationClock = ({ dt }: { dt: number }) => {
    const time = new Date(dt * 1000)

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    })

    return <div>{formattedTime}</div>
}

export default LocationClock
