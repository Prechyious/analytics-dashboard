"use client";

import Image from "next/image";
import Heading from "./atoms/typography/Heading";
import { CiSearch } from "react-icons/ci";
import calendar from "@/assets/icons/calendar.svg";
import bell from "@/assets/icons/bell.svg";
import justin from "@/assets/images/justin.png";
import Text from "./atoms/typography/Text";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import Profile from "./Profile";
import { formattedDate } from "@/utils/date";

export const Header = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const toggleProfile = () => setOpenProfile(!openProfile);

    return (
        <header className="py-3 lg:h-[5.5rem] bg-grayscale-50 dark:bg-zinc-800 flex items-center border-b dark:border-gray-600 w-full">
            <nav className="px-5 flex items-center justify-between gap-[1.38rem] w-full">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:justify-between lg:min-w-[57%]">
                    <Heading
                        type="h1"
                        variant="extraLarge"
                        className="font-semibold"
                    >
                        Dashboard
                    </Heading>

                    <div className="rounded-[1.5rem] py-1 lg:py-0 lg:min-h-[3rem] min-w-[10rem] lg:min-w-[21.8125rem] pl-4 border dark:border-gray-600 flex items-center bg-white dark:bg-zinc-800 gap-2 overflow-hidden">
                        <CiSearch className="lg:h-[1.125rem] lg:w-[1.125rem]" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-1/2 w-full border-none outline-none bg-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="hidden sm:flex items-center gap-[0.62rem]">
                        <Image
                            className="dark:invert"
                            src={calendar.src}
                            alt="calendar"
                            height={20}
                            width={20}
                        />

                        <Heading
                            type="h2"
                            variant="normal"
                            className="font-medium"
                        >
                            {formattedDate("long")}
                        </Heading>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="w-8 h-8 flex items-center justify-center lg:w-10 lg:h-10 rounded-[1.6875rem] border border-[#DADDDD] dark:border-gray-500 lg:p-[0.6875rem] hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500">
                            <Image
                                className="dark:invert"
                                src={bell.src}
                                alt="notification"
                                height={20}
                                width={20}
                            />
                        </button>
                        {/* Mobile Profile Button */}
                        <button className="lg:hidden" onClick={toggleProfile}>
                            <div className="relative w-[2.375rem] h-[2.375rem] dark:border dark:border-gray-500 rounded-[1.1875rem]">
                                <Image src={justin} alt="user" fill />
                            </div>
                        </button>

                        {/* Desktop Profile Button */}
                        <button className="hidden lg:flex items-center gap-2 px-2 py-[0.375rem] rounded-[1.75rem] border border-[#DADDDD] dark:border-gray-500 hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500">
                            <div className="relative w-[2.375rem] h-[2.375rem] dark:border dark:border-gray-500 rounded-[1.1875rem]">
                                <Image src={justin} alt="user" fill />
                            </div>
                            <div>
                                <Heading
                                    type="h4"
                                    variant="medium"
                                    className="capitalize text-right text-[#26282C] font-normal dark:text-gray-50"
                                >
                                    Justin Bergson
                                </Heading>

                                <Text
                                    variant="normal"
                                    type="medium"
                                    className="text-right text-[#787486] dark:text-gray-50"
                                >
                                    Justin@gmail.com
                                </Text>
                            </div>

                            <GoChevronDown className="w-[1.25rem] h-[1.25rem]" />
                        </button>
                    </div>
                </div>
            </nav>
            {openProfile && (
                <Profile
                    openProfile={openProfile}
                    closeProfile={() => setOpenProfile(false)}
                />
            )}
        </header>
    );
};
