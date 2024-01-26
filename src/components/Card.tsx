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
            className={`${className} p-4 w-full h-full rounded-[0.875rem] border border-[#EDF2F7] dark:border-gray-600 flex flex-col items-start gap-[0.62rem] bg-white dark:bg-zinc-800 hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500 cursor-pointer`}
        >
            <header className="flex w-full justify-between items-center">
                <div className="h-10 w-10 rounded-full border border-[#E6E6E6] dark:border-gray-500 flex items-center justify-center">
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
                    className="font-medium capitalize text-[#898989] dark:text-gray-300"
                >
                    {heading}
                </Heading>
                <strong className="font-semibold text-[1.5rem] leading-[2rem] text-[#3A3F51] dark:text-gray-200">
                    {heading.toLowerCase() === "total income"
                        ? `$${quantity}`
                        : quantity}
                </strong>
            </div>

            <div className="flex w-full justify-between items-center">
                <small
                    className={`px-2 rounded-[62.5rem] py-1 flex items-center font-medium justify-center text-[0.75rem] gap-0.5 ${
                        uptrend
                            ? "text-alerts-success bg-[#34CAA51F]"
                            : "text-alerts-error bg-[#ED544E1F]"
                    }`}
                >
                    <span>
                        {uptrend ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
                    </span>
                    {`${percent}%`}
                </small>

                <small className="text-[#606060] dark:text-grayscale-300 text-[0.75rem] leading-normal">
                    vs. previous month
                </small>
            </div>
        </article>
    );
};

export default Card;
