import { formattedDate } from "@/utils/date";
import Heading from "./atoms/typography/Heading";
import Text from "./atoms/typography/Text";

type TProfileProps = {
    openProfile: boolean;
    closeProfile: () => void;
};

const Profile = ({ openProfile, closeProfile }: TProfileProps) => {
    return (
        <button
            className={`absolute lg:hidden top-[4.25rem] px-5 py-3 rounded-[1.25rem] bg-sidebar dark:bg-zinc-800 dark:border dark:border-gray-500 ${
                openProfile ? "right-5" : "-right-full"
            } transition-all duration-500`}
            onClick={closeProfile}
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
            <div className="mt-2 text-right">
                <small className="font-medium text-[0.75rem] text-right">
                    {formattedDate("short")}
                </small>
            </div>
        </button>
    );
};

export default Profile;
