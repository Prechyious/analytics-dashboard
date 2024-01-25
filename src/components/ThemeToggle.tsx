"use client";

import sun from "@/assets/icons/sun.svg";
import moon from "@/assets/icons/moon.svg";
import Image from "next/image";
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme(!darkTheme);
    return (
        <div
            className="h-[5.25rem] w-[2.875rem] flex flex-col bg-white items-center justify-between rounded-[6.25rem] relative gap-4 p-2 cursor-pointer"
            onClick={toggleTheme}
        >
            <div
                className={`w-[1.875rem] absolute  h-[1.875rem] rounded-[5.875rem] bg-[#3ACAA5] ${
                    darkTheme ? "translate-y-[2.3rem]" : "translate-y-0"
                } transition-transform duration-300 `}
            ></div>
            <div className="rounded-[5.875rem] z-[1] px-[0.47rem] py-[0.41rem]">
                <BsSunFill
                    className={`${
                        darkTheme ? "text-grayscale-300" : "text-white"
                    } transition-all duration-300`}
                />
            </div>
            <div className="z-[1] w-[1.875rem] h-[1.875rem] rounded-[5.875rem] px-[0.47rem] pb-[0.24rem]">
                <BsMoonStarsFill
                    className={`${
                        darkTheme ? "text-white" : "text-grayscale-300"
                    } transition-all duration-300`}
                />
            </div>
        </div>
    );
};

export default ThemeToggle;
