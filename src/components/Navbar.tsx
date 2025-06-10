'use client'
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import SearchBar from "./Searchbar";
import LogoutButton from "./LogoutButton";


const Navbar = () => {
    const {userData} = useAuth();
    
  return (
    <header
        className="mx-auto w-full border border-gray-100 bg-white/80 py-3 backdrop-blur-lg md:top-6  ">
        <div className="px-4">
            <div className="flex items-center justify-between">
                <div className="flex shrink-0">
                    <Link href="/">
                        <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
                        <p className="sr-only">Website Title</p>
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
                {
                    !userData?.token ? (
                            <div className="flex items-center justify-end gap-3">
                                <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                    href="/register">Sign in</Link>
                                <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    href="/login">Login</Link>
                            </div>
                    ) : (
                        <div className="flex items-center justify-end gap-3">
                                <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                    href="/cart">Cart</Link>
                                <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    href="/dashboard">Profile</Link>
                                <LogoutButton />
                        </div>
                    )
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar