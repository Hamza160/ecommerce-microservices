import React from 'react';
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import {BellIcon, HomeIcon} from "lucide-react";
import ShoppingCart from "@/components/ShoppingCart";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between border-b border-gray-200 p-4">
            {/* Left */}
            <Link href="/" className={"flex items-center"}>
                <Image
                    src="/logo.png"
                    alt="TrendHamza"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className="hidden md:block text-md font-medium tracking-wider">TRENDHAMZA</p>
            </Link>
            {/* Right */}
            <div className="flex items-center gap-6">
                <SearchBar/>
                <Link href="/">
                    <HomeIcon className="w-4 h-4 text-gray-600"/>
                </Link>
                <BellIcon className="w-4 h-4 text-gray-600"/>
                <ShoppingCart/>
                <Link href="/login">
                    Sign in
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
