import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";

const platforms = [
    {
        id: 1,
        name: "book bazaar",
        amount: "2,500,000",
        percent: 15,
        color: "bg-[#6160DC]",
        progress: "w-[55%]",
    },
    {
        id: 2,
        name: "artisan aisle",
        amount: "1,800,000",
        percent: 10,
        color: "bg-[#54c5eb]",
        progress: "w-[40%]",
    },
    {
        id: 3,
        name: "toy troop",
        amount: "1,200,000",
        percent: 8,
        color: "bg-[#FFB74A]",
        progress: "w-[30%]",
    },
    {
        id: 4,
        name: "XStore",
        amount: "1,000,000",
        percent: 6,
        color: "bg-[#FF4A55]",
        progress: "w-[20%]",
    },
];

const TopPlatforms = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            {platforms.map(({ id, name, amount, percent, color, progress }) => (
                <div key={id} className="space-y-4 cursor-pointer">
                    <Heading type="h4" variant="large" className="capitalize">
                        {name}
                    </Heading>
                    {/* Progress bar */}
                    <div className="w-full relative bg-[#F5F5F5] dark:bg-gray-300 rounded-[2.5rem] h-[0.75rem]">
                        <div
                            className={`absolute left-0 h-full rounded-[2.5rem] z-[1] ${color} ${progress}`}
                        />
                    </div>
                    <div className="flex w-full justify-between items-center text-[#525252]">
                        <Text
                            type="medium"
                            variant="normal"
                            className="dark:text-grayscale-200"
                        >
                            ${amount}
                        </Text>
                        <Text
                            type="medium"
                            variant="normal"
                            className="dark:text-grayscale-200"
                        >
                            +{percent}%
                        </Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopPlatforms;
