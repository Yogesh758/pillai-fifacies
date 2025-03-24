"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="py-3" style={{ backgroundColor: "#015480" }}>
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/FIFA-CIES-Network-Pillai-1.jpg"
                        alt="Logo"
                        width={300}
                        height={25}
                        className="object-contain"
                    />
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="block md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                
            </div>
        </div>
    );
};

export default Navbar;
