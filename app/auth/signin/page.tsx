"use client"

import { useState, ChangeEvent, SyntheticEvent } from "react"
import Link from "next/link"

import { useAuth } from "@/context/AuthUserContext"
import { createSession } from "@/actions/auth-actions"

const Login = () => {
    const [error, setError] = useState<string | null>(null)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState<string | null>(null)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const { signInWithEmailAndPassword, signInWithGoogle } = useAuth()

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!regex.test(e.target.value)) {
            setEmailError("Invalid email")
            console.log(emailError)
            return
        }
        setEmailError(null)
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

        if (password.length < 6) {
            setPasswordError("Password should be at least 6 characters")
        } else {
            setPasswordError(null)
        }
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (password && !passwordError && !emailError) {
            setLoading(true)
            console.log(email, password)
            try {
                const userUid = await signInWithEmailAndPassword(
                    email,
                    password,
                )
                if (!userUid) throw new Error("Account creation failed")

                await createSession(userUid)
            } catch (error) {
                console.error(error)
                setLoading(false)
                setError("Incorrect Email or password. Try again")
            }
        } else {
            return
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const userUid = await signInWithGoogle()
            if (!userUid) throw new Error("Account creation failed")

            await createSession(userUid)
        } catch (error) {
            console.error(error)
            setLoading(false)
            setError("Account creation failed. Try again")
        }
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[url('/assets/images/cloudy-4.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="rounded-lg bg-[rgba(4,51,69,0.2)] px-5 py-10 shadow-lg backdrop-blur-[10px] md:px-10 md:py-20">
                <h1 className="mb-8 text-4xl font-bold">Sign In</h1>
                <form
                    className="grid-cols-12 gap-12 md:grid"
                    onSubmit={handleSubmit}
                >
                    <section className="col-span-7 p-4">
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleEmailChange}
                            />
                            {emailError ? (
                                <small className="text-red-200">
                                    {emailError}
                                </small>
                            ) : null}
                        </div>
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handlePasswordChange}
                            />
                            {passwordError ? (
                                <small className="text-red-200">
                                    {passwordError}
                                </small>
                            ) : null}
                        </div>
                    </section>
                    <section className="col-span-5 p-4">
                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-md border-solid border-[rgba(255,255,255,0.2)] bg-black py-2 text-xl font-bold shadow-lg hover:border hover:bg-transparent"
                                disabled={loading}
                            >
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                            {error ? (
                                <small className="text-red-200">{error}</small>
                            ) : null}
                        </div>
                        <div className="mb-6 mt-2.5">
                            Don&apos;t have an account?{" "}
                            <Link href="/auth/signup" className="text-blue-400">
                                Sign up
                            </Link>
                        </div>
                        <h2 className="text-center text-lg">Or</h2>
                        <button
                            className="mt-6 w-full rounded-md border border-solid border-[rgba(255,255,255,0.2)] bg-transparent py-2 text-xl hover:border-0 hover:bg-black"
                            onClick={handleGoogleSignIn}
                            type="button"
                        >
                            Sign in with Google
                        </button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Login
