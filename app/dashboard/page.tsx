"use client"

import { useAuth } from "@/context/AuthUserContext"

const Dashboard = () => {
    const { authUser, loading } = useAuth()
    // const router = useRouter()

    // useEffect(() => {
    //     if (!authUser) router.push("/auth/signin")
    // }, [authUser, router])

    return (
        <div className="w-[100%] px-6 text-[#222d3e]">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <section className="flex w-[90%] justify-between">
                    <div className="">
                        <button className="mr-3.5 text-xl font-medium">
                            Today
                        </button>
                        <button className="mr-3.5 text-xl font-medium">
                            Tomorrow
                        </button>
                        <button className="mb-1.5 mr-3.5 border-b border-solid border-b-[#222d36] text-xl font-medium">
                            Next 7days
                        </button>
                    </div>
                    <div className="flex items-center text-xl font-medium">
                        Chance of Rain
                    </div>
                </section>
            )}
        </div>
    )
}

export default Dashboard
