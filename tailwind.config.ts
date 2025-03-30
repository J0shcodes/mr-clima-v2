import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: {
                    default: "#ffffff",
                    dark: "#0c101c",
                },
                text: {
                    dark: "#b2bac7",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                flicker: "flicker 0.5s ease-in-out infinite alternate",
            },
            keyframes: {
                flicker: {
                    "0%": {
                        opacity: "0.5",
                        textShadow: "2px 2px 10px #2962ff",
                    },
                    "100%": {
                        opacity: "1",
                        textShadow: "2px 2px 20px #2962ff",
                    },
                },
            },
        },
    },
    plugins: [],
}
export default config
