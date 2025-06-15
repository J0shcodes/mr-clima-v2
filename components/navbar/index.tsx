import Header from "./Header"
// import ResponsiveHeader from "./ResponsiveHeader"

const Navbar = ({ session }: { session: string | null }) => {
    return (
        // <div className="rounded-xl bg-white text-[#222d3e] dark:bg-background-dark dark:text-text-dark">
        <div>
            <Header session={session} />
            {/* <ResponsiveHeader session={session} /> */}
        </div>
        // </div>
    )
}

export default Navbar
