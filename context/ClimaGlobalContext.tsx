"use client"

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react"

const ClimaGlobalContext = createContext<{
    showHamburgerMenu: boolean
    setShowHamburgerMenu: Dispatch<SetStateAction<boolean>>
}>({ showHamburgerMenu: false, setShowHamburgerMenu: () => {} })

export const ClimaGlobalContextProvider = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false)

    return (
        <ClimaGlobalContext.Provider
            value={{ showHamburgerMenu, setShowHamburgerMenu }}
        >
            {children}
        </ClimaGlobalContext.Provider>
    )
}

export const useClimaGlobalContext = () => useContext(ClimaGlobalContext)
