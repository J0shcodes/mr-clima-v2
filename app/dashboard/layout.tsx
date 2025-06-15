import { cookies } from "next/headers"

import { SESSION_COOKIE_NAME } from "@/constants"
// import Header from "@/components/Header"
import Navbar from "@/components/navbar"

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = cookies().get(SESSION_COOKIE_NAME)?.value || null
    return (
        // <div className="relative flex flex-col space-y-6 px-3 py-[1.125rem] lg:h-screen lg:px-6 lg:py-9">
        <div className="bg-[url(https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-cover bg-center bg-no-repeat pb-20">
            <Navbar session={session} />
            <div>{children}</div>
        </div>
        // </div>
    )
}
