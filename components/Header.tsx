"use client"

import Link from "next/link"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"
import { AiOutlineSearch } from "react-icons/ai"
import { BsBrightnessHighFill } from "react-icons/bs"
// import { BsBrightnessHigh } from "react-icons/bs";

const Header = () => {
    return (
        <div className="flex justify-between px-6 py-[1.625rem] text-[#222d3e]">
            <section className="flex w-[35%] flex-col justify-center">
                <div className="flex justify-between">
                    <Link
                        href="/dashboard"
                        className="text-2xl font-bold italic text-[#3391ff]"
                    >
                        Mr. Clima v2
                    </Link>
                    <IoIosNotificationsOutline />
                    <div className="flex justify-between">
                        <CiLocationOn />
                        <p>User Location</p>
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
                        className="w-full rounded-md border border-solid border-[#c8cbd0] px-[3.9375rem] py-3 text-sm outline-none"
                        placeholder="Search Location"
                    />
                </div>
            </section>
            <section className="flex w-[15%] justify-between">
                <div className="flex w-[100px] cursor-pointer flex-col justify-center rounded-md bg-[#0c182a] px-4">
                    <div className="flex justify-between">
                        <BsBrightnessHighFill color="white" />
                        <p className="text-white">Dark</p>
                    </div>
                </div>
                <div className="my-auto">Welcome Jane Doe</div>
            </section>
        </div>
    )
}

export default Header
