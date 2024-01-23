import Image from "next/image";
import Heading from "./atoms/typography/Heading";
import { CiSearch } from "react-icons/ci";
import calendar from "@/assets/icons/calendar.svg";
import bell from "@/assets/icons/bell.svg";
import justin from "@/assets/images/justin.png";
import Text from "./atoms/typography/Text";
import { FaChevronDown } from "react-icons/fa";
export const Header = () => {
    return (
        <header className="h-[5.5rem] bg-grayscale-50 flex items-center border-b w-full">
            <nav className="px-5 flex items-center justify-between gap-[1.38rem]">
                <div className="flex items-center justify-between gap-56">
                    <Heading type="h1" className="text-xl">
                        Dashboard
                    </Heading>

                    <div className="rounded-[1.5rem] min-h-[3rem] min-w-[20.8125rem] pl-4 border flex items-center bg-white gap-2 overflow-hidden">
                        <CiSearch className="h-[1.125rem] w-[1.125rem]" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-1/2 w-full border-none outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-[0.62rem]">
                        <Image
                            src={calendar.src}
                            alt="calendar"
                            height={20}
                            width={20}
                        />

                        <Heading
                            type="h2"
                            className="text-[0.875rem] font-medium leading-[1.375rem]"
                        >
                            November 23, 2023
                        </Heading>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="w-10 h-10 rounded-[1.6875rem] border border-[#DADDDD] p-[0.6875rem] ">
                            <Image
                                src={bell.src}
                                alt="notification"
                                height={20}
                                width={20}
                            />
                        </button>

                        <div className="flex items-center px-2 py-[0.375rem] rounded-[1.75rem] border border-[#DADDDD] gap-2">
                            <div className="relative w-[2.375rem] h-[2.375rem] rounded-[1.1875rem]">
                                <Image src={justin} alt="user" fill />
                            </div>
                            <div>
                                <Heading
                                    type="h4"
                                    className="capitalize text-right text-[#26282C] text-base font-normal"
                                >
                                    Justin Bergson
                                </Heading>

                                <Text
                                    variant="normal"
                                    type="medium"
                                    className="text-right text-[#787486]"
                                >
                                    Justin@gmail.com
                                </Text>
                            </div>

                            <FaChevronDown />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
