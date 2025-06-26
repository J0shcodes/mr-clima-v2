"use client"

import { useState } from "react"

import { useAuth } from "@/context/AuthUserContext"
import { createSession } from "@/actions/auth-actions"

const Login = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const { signInWithGoogle } = useAuth()

    const handleGoogleSignIn = async () => {
        try {
            const userUid = await signInWithGoogle()
            if (!userUid) throw new Error("Account creation failed")

            await createSession(userUid)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setError("Signing in failed. Try again")
        }
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[url('/assets/images/cloudy-4.jpg')] bg-cover bg-center bg-no-repeat text-white">
            <div className="w-3/4 rounded-lg bg-[rgba(4,51,69,0.2)] px-5 py-10 shadow-lg backdrop-blur-[10px] md:px-10 md:py-20 lg:w-2/5">
                <h1 className="mb-8 text-center text-4xl font-bold">Sign In</h1>
                <div>
                    <section className="col-span-5 w-full">
                        <button
                            className="mt-6 w-full rounded-md border border-solid border-[rgba(255,255,255,0.2)] bg-transparent py-2.5 text-xl hover:border-0 hover:bg-black"
                            onClick={handleGoogleSignIn}
                            type="button"
                        >
                            {loading ? "Signing in..." : "Sign in with Google"}
                        </button>
                        {error && (
                            <div className="mt-1 text-center text-sm text-red-300">
                                {error}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Login
