"use client"

import Link from "next/link"
// import { IoIosNotificationsOutline } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineSearch } from "react-icons/ai"
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs"

import { removeSession } from "@/actions/auth-actions"
import { useUserSession } from "@/hooks/useUserSession"
import { useAuth } from "@/context/AuthUserContext"
import { useThemeContext } from "@/context/ThemeContext"
// import { BsBrightnessHigh } from "react-icons/bs";

const Header = ({ session }: { session: string | null }) => {
    const userSessionId = useUserSession(session)
    const { signOut } = useAuth()
    const { isDarkTheme, toggleThemeHandler } = useThemeContext()

    const handleSignOut = async () => {
        signOut()
        await removeSession()
    }

    return (
        <div className="flex justify-between rounded-xl bg-white px-6 py-4 text-[#222d3e] dark:bg-background-dark dark:text-text-dark">
            <section className="flex w-[20%] flex-col justify-center">
                <div className="flex justify-between">
                    <Link
                        href="/dashboard"
                        className="text-2xl font-bold italic text-[#3391ff]"
                    >
                        Mr. Clima v2
                    </Link>
                    {/* <IoIosNotificationsOutline /> */}
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between">
                            <div className="">
                                <CiLocationOn />
                            </div>
                            <p className="text-sm">User Location</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex w-[35%] flex-col justify-center">
                <div className="relative w-full">
                    <div className="absolute left-[1.8125rem] top-[30%]">
                        <AiOutlineSearch />
                    </div>
                    <input
                        type="text"
                        className="w-full rounded-md border border-solid border-[#c8cbd0] px-[3.9375rem] py-3 text-sm outline-none dark:bg-transparent"
                        placeholder="Search Location"
                    />
                </div>
            </section>
            <section className="flex w-[20%] justify-between">
                <button
                    className="flex w-[100px] cursor-pointer flex-col justify-center rounded-md bg-background-dark px-4 dark:bg-white"
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
                <div className="my-auto text-sm">Welcome Jane Doe</div>
                {!userSessionId ? (
                    <Link href="/auth/signin">Sign In</Link>
                ) : (
                    <button className="text-sm" onClick={handleSignOut}>
                        Sign Out
                    </button>
                )}
            </section>
        </div>
    )
}

export default Header
