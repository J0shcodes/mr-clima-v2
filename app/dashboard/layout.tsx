import { cookies } from "next/headers"

import { SESSION_COOKIE_NAME } from "@/constants"
import DashboardLayoutContent from "@/components/DashboardLayoutContent"
import Navbar from "@/components/navbar"

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = cookies().get(SESSION_COOKIE_NAME)?.value || null
    return (
        <DashboardLayoutContent>
            <Navbar session={session} />
            <div className="flex-1">{children}</div>
        </DashboardLayoutContent>
    )
}
