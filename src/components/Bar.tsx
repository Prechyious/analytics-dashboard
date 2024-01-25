import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";

type TBarProps = {
    className?: string;
    height: string;
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
            className="flex flex-col gap-3 relative group duration-500"
            onClick={onBarClick}
        >
            <section
                className={`absolute -top-10 z-10 -left-[84%] ${
                    isActive ? "block" : "hidden group-hover:block"
                }`}
            >
                <div className=" w-20 h-7 bg-[#090C2C] rounded-lg flex items-center justify-center shadow-lg">
                    <Text type="small" variant="medium" className="text-white">
                        ${amount}
                    </Text>
                </div>
                <div className="relative bottom-0 left-[40%] w-0 h-0 border-8 border-transparent border-t-[#090C2C] border-b-0"></div>
            </section>

            <div
                className={`${className} w-[1.875rem] ${height} ${
                    isActive
                        ? "bg-gradient-to-b from-[#34CAA5] to-white duration-500"
                        : "bg-[#34CAA51A] duration-500"
                } rounded-tl-[1.25rem] rounded-tr-[1.25rem] group-hover:bg-gradient-to-b from-[#34CAA5] to-white duration-500`}
            />

            <Heading
                type="h4"
                variant="medium"
                className="text-neutral-600/50 "
            >
                {month}
            </Heading>
        </button>
    );
};

export default Bar;
