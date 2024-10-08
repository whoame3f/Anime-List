import Link from "next/link"
import ImputSearch from "./inputSearch"
import UserActionButton from "./UserActionButton"
const Page = () => {
    return (
        <header className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-color-accent bg-opacity-90 lg:sticky sm:fixed md:fixed top-3 shadow lg:px-8 lg:py-3 backdrop-blur-sm backdrop-saturate-150 z-[9999] sm:rounded-md rounded-none">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-4">
                <Link href={"/"} className="font-bold text-2xl"><span className="p-2 rounded-l-md text-color-primary bg-color-dark">Cuy</span><span className="p-2 rounded-r-md bg-color-nav ">Anime List</span></Link>
                <ImputSearch/>
                <UserActionButton/>
            </div>
        </header>
    
    )
}
export default Page