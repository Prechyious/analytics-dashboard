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
        <div className="flex w-full h-[15.9375rem] gap-6 items-start">
            <aside className="min-w-[2.5rem] h-full flex flex-col items-start justify-between">
                {range.map((item, i) => (
                    <Text
                        type="small"
                        variant="semibold"
                        key={i}
                        className="text-[#525252]/50"
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
                                className="border-dashed h-[0.0625rem] w-full"
                            />
                        ))}
                </div>

                {/* Bars */}
                <div className="flex w-full h-[18.1250rem] items-end justify-between">
                    {data.map((bar) => (
                        <Bar
                            key={bar.id}
                            height={bar.height}
                            month={bar.month}
                            amount={bar.price}
                            isActive={activeMonth === bar.month}
                            onBarClick={() => handleBarClick(bar.month)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarChart;
