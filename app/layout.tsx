import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "Your daily weather, personalized",
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
            <body className={inter.className}>{children}</body>
        </html>
    )
}
