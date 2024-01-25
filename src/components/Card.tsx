import upTrend from "@/assets/icons/uptrend.svg";
import downTrend from "@/assets/icons/downtrend.svg";
import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import Image from "next/image";

type TCardProps = {
    className?: string;
    icon: string;
    heading: string;
    percent: string;
    uptrend: boolean;
    quantity: string;
    trendImg: string;
};

const Card = ({
    className = "",
    heading,
    icon,
    percent,
    quantity,
    uptrend = true,
    trendImg,
}: TCardProps) => {
    return (
        <article
            className={`${className} p-4 w-full h-full rounded-[0.875rem] border border-[#EDF2F7] flex flex-col items-start gap-[0.62rem] bg-white`}
        >
            <header className="flex w-full justify-between items-center">
                <div className="h-10 w-10 rounded-full border border-[#E6E6E6] flex items-center justify-center">
                    <Image src={icon} alt={heading} height={24} width={24} />
                </div>
                <div className="">
                    <Image
                        src={trendImg}
                        alt={uptrend ? "Upwards trend" : "Downwards trend"}
                        width={104}
                        height={32}
                    />
                </div>
            </header>

            <div>
                <Heading
                    type="h4"
                    variant="large"
                    className="font-medium capitalize text-[#898989]"
                >
                    {heading}
                </Heading>
                <Text
                    type="2xl"
                    variant="semibold"
                    className="font-semibold text-[#3A3F51]"
                >
                    {heading.toLowerCase() === "total income"
                        ? `$${quantity}`
                        : quantity}
                </Text>
            </div>

            <div className="flex w-full justify-between items-center">
                <Text
                    type="small"
                    variant="medium"
                    className={`px-1.5 rounded-[62.5rem] py-1 flex items-center justify-center gap-0.5 ${
                        uptrend
                            ? "text-alerts-success bg-[#34CAA51F]"
                            : "text-alerts-error bg-[#ED544E1F]"
                    }`}
                >
                    <span>
                        {uptrend ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
                    </span>
                    {`${percent}%`}
                </Text>

                <Text type="small" variant="normal" className="text-[#606060]">
                    vs. previous month
                </Text>
            </div>
        </article>
    );
};

export default Card;
