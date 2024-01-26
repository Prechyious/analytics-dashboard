import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";

type TProfileProps = {
    openProfile: boolean;
    closeProfile: () => void;
};

const Profile = ({ openProfile, closeProfile }: TProfileProps) => {
    return (
        <div
            className={`absolute top-[4.25rem] px-2 py-3 rounded-[1.25rem] bg-sidebar dark:bg-zinc-600 dark:border dark:border-gray-500 transition-all duration-500 ${
                openProfile ? "right-5" : "-right-full"
            }`}
        >
            <div>
                <Heading
                    type="h4"
                    variant="large"
                    className="capitalize text-right text-[#26282C] font-normal dark:text-gray-50"
                >
                    Justin Bergson
                </Heading>

                <Text
                    variant="normal"
                    type="small"
                    className="text-right text-[#787486] dark:text-gray-50"
                >
                    Justin@gmail.com
                </Text>
            </div>
        </div>
    );
};

export default Profile;
