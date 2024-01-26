"use client";


import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={36}
                height={36}
                sizes="36x36"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        );

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    return (
        <div
            className="h-[5.25rem] w-[2.875rem] flex flex-col bg-white items-center justify-between rounded-[6.25rem] relative gap-4 p-2 dark:bg-transparent dark:border dark:border-gray-500 cursor-pointer hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500"
            onClick={toggleDarkMode}
        >
            <div
                className={`w-[1.875rem] absolute  h-[1.875rem] rounded-[5.875rem] bg-[#3ACAA5] ${
                    resolvedTheme === "dark"
                        ? "translate-y-[2.3rem]"
                        : "translate-y-0"
                } transition-transform duration-300 `}
            ></div>
            <div className="rounded-[5.875rem] z-[1] px-[0.47rem] py-[0.41rem]">
                <BsSunFill
                    className={`${
                        resolvedTheme === "dark"
                            ? "text-grayscale-200"
                            : "text-white"
                    } transition-all duration-300`}
                    onClick={() => setTheme("light")}
                />
            </div>
            <div className="z-[1] w-[1.875rem] h-[1.875rem] rounded-[5.875rem] px-[0.47rem] pb-[0.24rem]">
                <BsMoonStarsFill
                    className={`${
                        resolvedTheme === "dark"
                            ? "text-white"
                            : "text-grayscale-300"
                    } transition-all duration-300`}
                    onClick={() => setTheme("dark")}
                />
            </div>
        </div>
    );
};

export default ThemeToggle;
