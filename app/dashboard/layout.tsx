import { cookies } from "next/headers"

import { SESSION_COOKIE_NAME } from "@/constants"
import Header from "@/components/Header"

export default function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = cookies().get(SESSION_COOKIE_NAME)?.value || null
    return (
        <div className="flex h-screen flex-col space-y-6 px-6 py-9">
            <Header session={session} />
            {children}
        </div>
    )
}
