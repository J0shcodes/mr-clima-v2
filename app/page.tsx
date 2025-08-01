"use client"

import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()
    return (
        <main className="flex h-screen flex-col items-center justify-center bg-[url('/assets/images/raindrops.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center p-4">
                <h1 className="title mb-14 animate-flicker text-4xl font-bold uppercase italic text-transparent transition-all duration-500 ease-in-out hover:text-white md:text-5xl">
                    Mr. Clima v2
                </h1>
                <button
                    className="w-56 rounded-lg bg-blue-500 py-3 text-lg text-white"
                    onClick={() => router.push("/auth/signin")}
                >
                    Get Started
                </button>
            </div>
        </main>
    )
}
