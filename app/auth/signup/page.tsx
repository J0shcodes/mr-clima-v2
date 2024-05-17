import Link from "next/link"

const Signup = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-[url('/assets/images/snowing-2.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="rounded-lg bg-[rgba(64,65,73,0.2)] px-10 py-20 shadow-lg backdrop-blur-[10px]">
                <h1 className="mb-8 text-4xl font-bold">Sign Up</h1>
                <form className="grid grid-cols-12 gap-12">
                    <section className="col-span-7 p-4">
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="text"
                                placeholder="First Name"
                                name="firstname"
                            />
                        </div>
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                            />
                        </div>
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="text"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="mb-5 w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                        <div className="w-full rounded-md">
                            <input
                                className="w-full rounded-md p-2 text-black outline-none"
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                            />
                        </div>
                    </section>
                    <section className="col-span-5 p-4">
                        <button
                            type="submit"
                            className="w-full rounded-md border-solid border-[rgba(255,255,255,0.2)] bg-black py-2 text-xl font-bold shadow-lg hover:border hover:bg-transparent"
                        >
                            Sign up
                        </button>
                        <div className="mb-6 mt-2.5">
                            Already have an account?{" "}
                            <Link href="/auth/signin" className="text-blue-400">
                                Sign in
                            </Link>
                        </div>
                        <h2 className="text-center text-lg">Or</h2>
                        <button className="mt-6 w-full rounded-md border border-solid border-[rgba(255,255,255,0.2)] bg-transparent py-2 text-xl hover:border-0 hover:bg-black">
                            Sign up with Google
                        </button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Signup
