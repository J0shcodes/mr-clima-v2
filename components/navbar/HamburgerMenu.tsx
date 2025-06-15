"use client"

import Link from "next/link"
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs"

// import { useLocationContext } from "@/context/LocationContext"
import { useThemeContext } from "@/context/ThemeContext"
import { useUserSession } from "@/hooks/useUserSession"
import { removeSession } from "@/actions/auth-actions"
import { useAuth } from "@/context/AuthUserContext"
import { useClimaGlobalContext } from "@/context/ClimaGlobalContext"

const HamburgerMenu = ({ session }: { session: string | null }) => {
    const userSessionId = useUserSession(session)
    const { isDarkTheme, toggleThemeHandler } = useThemeContext()
    // const { location } = useLocationContext()
    const { signOut } = useAuth()
    const { showHamburgerMenu, setShowHamburgerMenu } = useClimaGlobalContext()

    const handleSignOut = async () => {
        signOut()
        await removeSession()
    }

    return (
        <div
            className={`fixed ${showHamburgerMenu ? "left-0" : "left-[-1000px]"} top-0 z-50 h-screen w-[60%] space-y-4 bg-[#13182b] px-2.5 py-3 dark:bg-[#fff]`}
        >
            <section className="flex items-center justify-between">
                <div className="flex justify-between">
                    <Link
                        href="/dashboard"
                        className="font-bold italic text-[#3391ff]"
                    >
                        Mr. Clima
                    </Link>
                    {/* <IoIosNotificationsOutline /> */}
                </div>

                <button
                    className="flex flex-col gap-y-1.5 self-center"
                    onClick={() => setShowHamburgerMenu(false)}
                >
                    <span className="h-[1px] w-6 translate-y-1.5 rotate-45 bg-white dark:bg-black" />
                    <span className="h-[1px] w-6 bg-white opacity-0 dark:bg-black" />
                    <span className="h-[1px] w-6 -translate-y-1.5 -rotate-45 bg-white dark:bg-black" />
                </button>
            </section>
            <section className="flex flex-col gap-y-4">
                <button
                    className="flex w-[100px] cursor-pointer flex-col justify-center rounded-md px-4"
                    onClick={toggleThemeHandler}
                >
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center">
                            {isDarkTheme ? (
                                <BsBrightnessHighFill color="black" />
                            ) : (
                                <BsBrightnessHigh color="white" />
                            )}
                        </div>
                        <p className="font-semibold text-white dark:text-[#262630]">
                            {isDarkTheme ? "Light" : "Dark"}
                        </p>
                    </div>
                </button>
                <div className="my-auto text-xs text-white dark:text-text-dark">
                    Welcome Jane Doe
                </div>
                {!userSessionId ? (
                    <Link href="/auth/signin">Sign In</Link>
                ) : (
                    <button
                        className="w-fit text-sm text-white dark:text-text-dark"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                )}
            </section>
        </div>
    )
}

export default HamburgerMenu
