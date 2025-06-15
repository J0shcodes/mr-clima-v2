import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { AuthUserProvider } from "@/context/AuthUserContext"
// import { ThemeProvider } from "@/context/ThemeContext"
import { LocationContextProvider } from "@/context/LocationContext"
import { ClimaGlobalContextProvider } from "@/context/ClimaGlobalContext"
import { WeatherDataContextProvider } from "@/context/WeatherDataContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "Mr.Clima v2",
    description:
        "Mr.Clima is a weather app offering current conditions, forecasts, and location search. It stands out with historical comparisons, personalized daily summaries as notifications, and customizable weather alerts.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <ClimaGlobalContextProvider>
                {/* <ThemeProvider> */}
                <AuthUserProvider>
                    <LocationContextProvider>
                        <WeatherDataContextProvider>
                            <body className={`${inter.className}`}>
                                {children}
                            </body>
                        </WeatherDataContextProvider>
                    </LocationContextProvider>
                </AuthUserProvider>
                {/* </ThemeProvider> */}
            </ClimaGlobalContextProvider>
        </html>
    )
}
