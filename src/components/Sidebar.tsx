"use client";

import logo from "@/assets/icons/logo.svg";
import sidebar from "@/assets/icons/sidebar.svg";
import { links, otherLinks } from "@/utils/navLinks";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const SideBar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isActive, setIsActive] = useState(0);

    const toggleSideBar = () => setOpenSideBar(!openSideBar);

    const handleActive = (index: number) => {
        setIsActive(index);
    };

    return (
        <>
            <aside
                className={`lg:min-w-[5rem] h-[100svh] lg:h-[54.75rem] bg-sidebar dark:bg-zinc-700 flex flex-col items-center border-r border-[#EBECF2] dark:border-gray-600 w-1/6 fixed lg:relative top-0 z-20 py-5 transition-all duration-500 ${
                    openSideBar ? "left-0 lg:left-0" : "-left-full lg:left-0"
                }`}
            >
                <Link href="#" className="mb-5">
                    <Image src={logo.src} alt="logo" height={40} width={40} />
                </Link>
                <nav className="flex flex-col h-full justify-between items-center">
                    <div className="lg:space-y-4 space-y-2">
                        {links.map((link, i) => (
                            <div
                                key={link.id}
                                className="relative pointer group"
                                onClick={() => setIsActive(i)}
                            >
                                <button className="h-10 w-10 gap-[0.62rem] flex items-center justify-center">
                                    <Image
                                        className={`${
                                            link.alt === "home"
                                                ? "dark:invert"
                                                : ""
                                        }`}
                                        src={link.src}
                                        alt={link.alt}
                                        height={24}
                                        width={24}
                                    />
                                </button>

                                <div
                                    className={`${
                                        isActive === i
                                            ? "opacity-100"
                                            : "opacity-0"
                                    } absolute top-1/4 right-[-1rem] group-hover:opacity-100 transition-all duration-500`}
                                >
                                    <Image
                                        className="dark:invert"
                                        src={sidebar.src}
                                        alt="sidebar"
                                        width={3}
                                        height={21}
                                    />
                                </div>
                            </div>
                        ))}
                        <ThemeToggle />
                    </div>

                    <div className="lg:space-y-4 space-y-2">
                        {otherLinks.map((link) => (
                            <button
                                key={link.id}
                                className="h-10 w-10 gap-[0.62rem] flex items-center justify-center"
                            >
                                <Image
                                    className={`${
                                        link.alt === "home" ? "dark:invert" : ""
                                    }`}
                                    src={link.src}
                                    alt={link.alt}
                                    height={24}
                                    width={24}
                                />
                            </button>
                        ))}
                    </div>
                </nav>
            </aside>
            <button
                className={`absolute h-6 w-6 flex items-center justify-center rounded-full bg-sidebar dark:bg-zinc-400 dark:border dark:border-gray-500 top-[5.4rem]  ${
                    openSideBar ? "left-[16.5%]" : "left-0"
                } transition-all duration-500`}
                onClick={toggleSideBar}
            >
                <FaChevronRight
                    className={`text-gray-900 dark:text-gray-100 ${
                        openSideBar ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>
        </>
    );
};

export default SideBar;
