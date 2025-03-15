import { cookies } from "next/headers"

import { SESSION_COOKIE_NAME } from "@/constants"
import Header from "@/components/Header"

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = cookies().get(SESSION_COOKIE_NAME)?.value || null
    return (
        <div>
            <Header session={session} />
            {children}
        </div>
    )
}
