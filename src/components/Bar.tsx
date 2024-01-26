import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";

type TBarProps = {
    className?: string;
    height?: string;
    isActive?: boolean;
    month: string;
    amount?: string;
    onBarClick?: () => void;
};

const Bar = ({
    height,
    className = "",
    isActive = false,
    month,
    amount,
    onBarClick,
}: TBarProps) => {
    return (
        <button
            className="flex flex-col gap-3 items-center relative group duration-500"
            onClick={onBarClick}
        >
            <section
                className={`absolute -top-10 z-[1] -left-[105%] lg:-left-[84%] ${
                    isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                } transition-opacity duration-300`}
            >
                <div className="w-20 h-7 bg-[#090C2C] rounded-lg flex items-center justify-center shadow-lg">
                    <Text type="small" variant="medium" className="text-white">
                        ${amount}
                    </Text>
                </div>
                <div className="relative bottom-0 left-[40%] w-0 h-0 border-8 border-transparent border-t-[#090C2C] border-b-0"></div>
            </section>

            <div
                className={`${className} ${height} w-[1.25rem] lg:w-[1.875rem] ${
                    isActive
                        ? "bg-gradient-to-b from-[#34CAA5] to-white duration-500"
                        : "bg-[#34CAA51A] dark:bg-[#34CAA5]/30 duration-500"
                } rounded-tl-[1.25rem] rounded-tr-[1.25rem] group-hover:bg-gradient-to-b from-[#34CAA5] to-white`}
            />

            <Heading
                type="h4"
                variant="medium"
                className="text-neutral-600/50 dark:text-gray-300/60 text-center w-full"
            >
                {month}
            </Heading>
        </button>
    );
};

export default Bar;
