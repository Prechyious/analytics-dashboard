"use client";
import { useState } from "react";
import Bar from "./Bar";
import Text from "./atoms/typography/Text";

const range = ["50,000", "40,000", "30,000", "20,000", "10,000", "5,000", "0"];

const BarChart = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(0);
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
                    <Bar height="h-[4.25rem]" month="Jan" />
                    <Bar height="h-[7.5rem]" month="Feb" />
                    <Bar height="h-[2.5rem]" month="Mar" />
                    <Bar height="h-[10.0625rem]" month="Apr" />
                    <Bar height="h-[5.0625rem]" month="May" />
                    <Bar
                        height="h-[13.5rem]"
                        month="Jun"
                        isActive={true}
                        amount="45.000"
                    />
                    <Bar height="h-[5.0625rem]" month="Jul" />
                    <Bar height="h-[8.1875rem]" month="Aug" />
                    <Bar height="h-[11.375rem]" month="Sep" />
                    <Bar height="h-[3.1875rem]" month="Oct" />
                    <Bar height="h-[10.6875rem]" month="Nov" />
                    <Bar height="h-[9.4375rem]" month="Dec" />
                </div>
            </div>
        </div>
    );
};

export default BarChart;
