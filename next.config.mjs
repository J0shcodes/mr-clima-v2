/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    },
    fallbacks: {
        document: "/~offline",
    },
})
const nextConfig = {
    // images: {
    //     remotePatterns: [new URL("https://cdn.worldweatheronline.com/**")],
    // },
    images: {
        domains: ["cdn.worldweatheronline.com"],
    },
}

export default withPWA(nextConfig)
