"use client"

import { createContext, useEffect, useState, useContext } from "react"

const ThemeContext = createContext({
    isDarkTheme: true,
    toggleThemeHandler: () => {},
})

// interface ThemeProps {
//     children?: JSX.Element | Array<JSX.Element>
// }

export function ThemeProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    useEffect(() => initialThemeHandler())

    const isLocalStorageEmpty = (): boolean => {
        return !localStorage.getItem("isDarkTheme")
    }

    const initialThemeHandler = () => {
        if (isLocalStorageEmpty()) {
            localStorage.setItem("isDarkTheme", "true")
            document!.querySelector("body")!.classList.add("dark")
            setIsDarkTheme(true)
        } else {
            const isDarkTheme: boolean = JSON.parse(
                localStorage.getItem("isDarkTheme")!,
            )
            isDarkTheme &&
                document!.querySelector("body")!.classList.add("dark")
            setIsDarkTheme(() => {
                return isDarkTheme
            })
        }
    }

    const toggleThemeHandler = () => {
        const isDarkTheme: boolean = JSON.parse(
            localStorage.getItem("isDarkTheme")!,
        )
        setIsDarkTheme(!isDarkTheme)
        toggleDarkClassToBody()
        setValueToLocalStorage()
    }

    const toggleDarkClassToBody = () => {
        document!.querySelector("body")!.classList.toggle("dark")
    }

    const setValueToLocalStorage = () => {
        localStorage.setItem("isDarkTheme", `${!isDarkTheme}`)
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)
