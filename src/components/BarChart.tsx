"use client";
import { useState } from "react";
import Bar from "./Bar";
import Text from "./atoms/typography/Text";
import { data, range } from "@/utils/data";

const BarChart = () => {
    const [activeMonth, setActiveMonth] = useState("Jun");

    const handleBarClick = (clickedMonth: string) => {
        setActiveMonth(clickedMonth);
    };
    return (
        <div className="flex w-full h-[15.9375rem] gap-3 lg:gap-6 items-start">
            <aside className="min-w-[2rem] lg:min-w-[2.5rem] h-full flex flex-col items-start justify-between">
                {range.map((item, i) => (
                    <Text
                        type="small"
                        variant="semibold"
                        key={i}
                        className="text-[#525252]/50 dark:text-grayscale-500"
                    >
                        {item}
                    </Text>
                ))}
            </aside>
            <div className="w-full relative">
                <div className="flex flex-col items-start justify-between h-[15.9375rem] w-full absolute inset-0">
                    {Array(10)
                        .fill(0)
                        .map((_, i) => (
                            <hr
                                key={i}
                                className="border-dashed dark:border-gray-500 h-[0.0625rem] w-full"
                            />
                        ))}
                </div>

                {/* Bars */}
                <div className="flex w-full h-[18.1250rem] items-end justify-between">
                    <Bar
                        height="h-[4.25rem]"
                        month="Jan"
                        amount="6.000"
                        isActive={activeMonth === "Jan"}
                        onBarClick={() => handleBarClick("Jan")}
                    />
                    <Bar
                        height="h-[7.5rem]"
                        month="Feb"
                        amount="18.000"
                        isActive={activeMonth === "Feb"}
                        onBarClick={() => handleBarClick("Feb")}
                    />
                    <Bar
                        height="h-[2.5rem]"
                        month="Mar"
                        amount="18.000"
                        isActive={activeMonth === "Mar"}
                        onBarClick={() => handleBarClick("Mar")}
                    />
                    <Bar
                        height="h-[10.0625rem]"
                        month="Apr"
                        amount="26.000"
                        isActive={activeMonth === "Apr"}
                        onBarClick={() => handleBarClick("Apr")}
                    />
                    <Bar
                        height="h-[5.0625rem]"
                        month="May"
                        amount="9.000"
                        isActive={activeMonth === "May"}
                        onBarClick={() => handleBarClick("May")}
                    />
                    <Bar
                        height="h-[13.5rem]"
                        month="Jun"
                        amount="45.000"
                        isActive={activeMonth === "Jun"}
                        onBarClick={() => handleBarClick("Jun")}
                    />
                    <Bar
                        height="h-[5.0625rem]"
                        month="Jul"
                        amount="9.000"
                        isActive={activeMonth === "Jul"}
                        onBarClick={() => handleBarClick("Jul")}
                    />
                    <Bar
                        height="h-[8.1875rem]"
                        month="Aug"
                        amount="19.500"
                        isActive={activeMonth === "Aug"}
                        onBarClick={() => handleBarClick("Aug")}
                    />
                    <Bar
                        height="h-[11.375rem]"
                        month="Sep"
                        amount="34.000"
                        isActive={activeMonth === "Sep"}
                        onBarClick={() => handleBarClick("Sep")}
                    />
                    <Bar
                        height="h-[3.1875rem]"
                        month="Oct"
                        amount="5.000"
                        isActive={activeMonth === "Oct"}
                        onBarClick={() => handleBarClick("Oct")}
                    />
                    <Bar
                        height="h-[10.0625rem]"
                        month="Nov"
                        amount="30.000"
                        isActive={activeMonth === "Nov"}
                        onBarClick={() => handleBarClick("Nov")}
                    />
                    <Bar
                        height="h-[9.4375rem]"
                        month="Dec"
                        amount="28.000"
                        isActive={activeMonth === "Dec"}
                        onBarClick={() => handleBarClick("Dec")}
                    />
                </div>
            </div>
        </div>
    );
};

export default BarChart;
